import React, { useState } from "react";
import axios from "axios";
import Filho from "./Filho";


const App = () => {
    const [formData, setFormData] = useState({
        cep: "",
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
    });

    const Buscar = async () => {
        const url = `http://viacep.com.br/ws/${formData.cep}/json/`;
        await axios
            .get(url)
            .then((retorno) => {
                setFormData({
                    ...formData,
                    endereco: retorno.data.logradouro,
                    bairro: retorno.data.bairro,
                    cidade: retorno.data.localidade,
                    estado: retorno.data.uf,
                });
            })
            .catch(() => {
                console.log("Erro ao buscar o CEP");
            });

        console.log("testeeeeeeeeeeeeee");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const irParaOutraAtividade = () => {
        window.location.href = "/outra-pagina"; 
    };

    return (
        <div style={{ maxWidth: "300px", margin: "20px auto", padding: "25px", border: "1px solid #ccc" }}>
            <h3>Endereço</h3>
            <Filho label="CEP" name="cep" value={formData.cep} onChange={handleChange} onBlur={Buscar} />
            <Filho label="Endereço" name="endereco" value={formData.endereco} onChange={handleChange} />
            <Filho label="Bairro" name="bairro" value={formData.bairro} onChange={handleChange} />
            <Filho label="Cidade" name="cidade" value={formData.cidade} onChange={handleChange} />
            <Filho label="Estado" name="estado" value={formData.estado} onChange={handleChange} />
            
        </div>
    );
};

export default App;
