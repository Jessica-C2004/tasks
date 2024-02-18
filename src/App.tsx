import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import cat from "./assets/ren cat.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Hello World
            </header>
            <h2>2/14/24</h2>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Jessica Cunningham - Edit <code>src/App.tsx</code> and save.
                This page will automatically reload.
            </p>
            <img src={cat} alt="A picture of a renaissance cat painting" />
            <ul>
                <li> One element</li>
                <li> Two element</li>
                <li>
                    <span style={{ color: "red" }}> red element</span>
                </li>
                <li>
                    <span style={{ color: "blue" }}> blue element</span>
                </li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        <div className="Rectangle">
                            This is my first column. How are you?
                        </div>
                    </Col>
                    <Col>
                        <div className="Rectangle">
                            This is my second column. Not much going on.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
