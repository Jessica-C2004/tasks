import React from "react";
import "./App.css";
import cat from "../src/assets/ren cat.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Hello World
            </header>
            <p>
                Jessica Cunningham - Edit <code>src/App.tsx</code> and save.
                This page will automatically reload.
            </p>
        </div>
    );
}

export default App;
