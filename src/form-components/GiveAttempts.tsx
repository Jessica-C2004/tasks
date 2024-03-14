import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);

    function updateRequest(evt: React.ChangeEvent<HTMLInputElement>) {
        setRequested(requested);
    }

    function addAttempts(): void {
        setAttempts(attempts + requested);
    }

    function minusOne(): void {
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <hr></hr>
            <span>Attempts left: {attempts}</span>
            <hr></hr>
            <Button onClick={addAttempts}> Gain </Button>
            <Button onClick={minusOne} disabled={attempts === 0}>
                Use
            </Button>
            <div>
                <Form.Group controlId="RequestedAttemptsBox">
                    <Form.Label>Requested Attempts: </Form.Label>
                    <Form.Control
                        value={requested}
                        onChange={updateRequest}
                    ></Form.Control>
                </Form.Group>
            </div>
        </div>
    );
}
