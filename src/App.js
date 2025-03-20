import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Filho, MeuComponente } from "./Filho";
import { Blog, VoltarPrincipal } from "./Atividade2";
import Atividade2 from "./Atividade2";


const App = () => {
    const [formData, setFormData] = useState({
        cep: "",
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
    });

    const Buscar = async () => {
        try {
            const url = `http://viacep.com.br/ws/${formData.cep}/json/`;
            const retorno = await axios.get(url);
            setFormData({
                ...formData,
                endereco: retorno.data.logradouro,
                bairro: retorno.data.bairro,
                cidade: retorno.data.localidade,
                estado: retorno.data.uf,
            });
        } catch (error) {
            console.log("Erro ao buscar o CEP");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaginaPrincipal formData={formData} handleChange={handleChange} Buscar={Buscar} />} />
                <Route path="/outra-atividade" element={<Blog />} />
            </Routes>
        </Router>
    );
};

const PaginaPrincipal = ({ formData, handleChange, Buscar }) => {
    return (
        <div style={{ maxWidth: "300px", margin: "20px auto", padding: "25px", border: "1px solid #ccc" }}>
            <h3>Endereço</h3>
            <Filho label="CEP" name="cep" value={formData.cep} onChange={handleChange} onBlur={Buscar} />
            <Filho label="Endereço" name="endereco" value={formData.endereco} onChange={handleChange} />
            <Filho label="Bairro" name="bairro" value={formData.bairro} onChange={handleChange} />
            <Filho label="Cidade" name="cidade" value={formData.cidade} onChange={handleChange} />
            <Filho label="Estado" name="estado" value={formData.estado} onChange={handleChange} />

            <MeuComponente />
            
        </div>
    );
};

export default App;
