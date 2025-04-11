import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const validaUsuario = async () => {
        const url = "https://backend-aula.vercel.app/app/login"
        const dados = {
            usuario,
            senha
        }

        await axios.post(
            url,
            dados
        ).then(retorno => {
            console.log(retorno)
            if (retorno.data.erro) {
                alert(retorno.data.erro)
                return
            }
            if (retorno.data.token) {
                localStorage.setItem("ALUNO_ITE", retorno.data.token)
            }
        })
    }

    return (
        <div>
            <h1>Faça seu login</h1>

            <input type="text" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} />
            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
            <input type="button" value="Logar" onClick={() => validaUsuario()} />

            <Link to="/cadastro">
                <button>Faça seu cadastro</button>
            </Link>
        </div>
    )

}

export default Login