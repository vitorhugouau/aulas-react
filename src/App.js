import React from "react";
import ApiCard from "./ApiCard";
import './App.css';

const App = () => {
    return (
        <div className="body">
            <div className="top-bar">
                <h1>Personagens de Rick and Morty       
                </h1>
            </div>
            <ApiCard />
        </div>
    );
};

export default App;
