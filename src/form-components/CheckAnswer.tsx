import exp from "constants";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateGivenAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <hr></hr>
            <Form.Group controlId="Answer">
                <Form.Label> Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateGivenAnswer} />
                {answer === expectedAnswer ? "✔️" : "❌"}
            </Form.Group>
        </div>
    );
}
