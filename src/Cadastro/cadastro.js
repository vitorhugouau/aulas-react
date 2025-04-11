import React, { useState } from 'react';

function RegisterPage() {
  const [form, setForm] = useState({
    usuario: '',
    senha: '',
    confirma: '',
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      const response = await fetch('https://backend-aula.vercel.app/app/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log(response)
      console.log(data)

      if (response.ok) {
        setMessage(`Usuário registrado com sucesso! ID: ${data.id}`);
        // localStorage.setItem('acessToken', response.data.token)
        localStorage.setItem('accessToken', data.token);
        console.log('if de aqui')

        
      } else {
        console.log('qualquer coisa')
        setMessage(data.error || 'Erro desconhecido');
      }
    } catch (error) {
      setMessage('Erro ao conectar com o servidor');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Registrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>RA do Aluno:</label>
          <input
            type="text"
            name="usuario"
            value={form.usuario}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirmar Senha:</label>
          <input
            type="password"
            name="confirma"
            value={form.confirma}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>

      {message && (
        <div style={{ marginTop: '1rem', color: 'blue' }}>
          {message}
        </div>
      )}
    </div>
  );
}

export default RegisterPage;
