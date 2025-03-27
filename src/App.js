import React, { useState, useEffect } from 'react';
import ApiCard from "./ApiCard";
import './App.css';

const COLORS = ['#97CE4C', '#F4F41C', '#00BFFF', '#C0C0C0', '#2C0735', '#41B6E6'];

const App = () => {
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="body">
            <div className="top-bar">
                <h1
                    style={{
                        color: COLORS[colorIndex],
                        textShadow: '2px 2px 4px #2C0735',
                        transition: 'color 0.3s ease',
                    }}
                >
                    PERSONAGENS DE RICK AND MORTY
                </h1>
            </div>
            <ApiCard />
        </div>
    );
};

export default App;
