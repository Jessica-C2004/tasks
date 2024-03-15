import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<string>("3");
    const [requested, setRequested] = useState<string>(0);

    function updateRequest(evt: React.ChangeEvent<HTMLInputElement>) {
        setRequested(evt.target.value);
    }

    function addAttempts(): void {
        if (requested !== "") {
            setAttempts((parseInt(attempts) + parseInt(requested)).toString());
        }
    }

    function minusOne(): void {
        setAttempts((parseInt(attempts) - 1 || 0).toString());
    }

    return (
        <div>
            <div>
                <h3>Give Attempts</h3>
                <span>Attempts left: {attempts}</span>
                <Button onClick={addAttempts}> Gain </Button>
                <Button onClick={minusOne} disabled={attempts === "0"}>
                    Use
                </Button>
            </div>
            <Form.Group controlId="formQuizAttempts">
                <Form.Label>Requested Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={updateRequest}
                ></Form.Control>
            </Form.Group>
        </div>
    );
}
