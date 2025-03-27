import React from "react";
import ApiCard from "./ApiCard";
import './App.css';

const App = () => {
    return (
        <div className="body">
            <div className="top-bar">
                <h1 style={{ color: '#97CE4C', textShadow: '2px 2px 4px #2C0735' }}>
                    Personagens de Rick and Morty
                </h1>

            </div>
            <ApiCard />
        </div>
    );
};

export default App;
