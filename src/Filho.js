import React from "react";
import { useNavigate } from "react-router-dom";


const MeuComponente = () => {
  const navigate = useNavigate();

  const irParaOutraAtividade = () => {
      navigate("/outra-atividade"); 
  };

  return (
      <div>
          <input type="button" value="Ir para a outra atividade" onClick={irParaOutraAtividade} />
      </div>
  );
};

const Filho = ({ label, name, value, onChange, onBlur }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{ display: "block", marginBottom: "10px", padding: "5px", width: "100%" }}
      />
    </div>
  );
};

export { Filho, MeuComponente };


