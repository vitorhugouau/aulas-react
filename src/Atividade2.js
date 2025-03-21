import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VoltarPrincipal = () => {
    const navigate = useNavigate();
  
    const irParaOutraAtividade = () => {
        console.log("testeeeeeeeeeeeeee")
        navigate("/Mui.js"); 
    };
  
    return (
        <div>
            <input type="button" value="Voltar para a outra atividade" onClick={irParaOutraAtividade} />
        </div>
    );
};

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data)); 
    }, []);

    return (
        <div>
            <VoltarPrincipal />
            <h1>Blog </h1>
            {posts.map((post) => (
                <div key={post.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
        
    );
};

export { Blog, VoltarPrincipal };
