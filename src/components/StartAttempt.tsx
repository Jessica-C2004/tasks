import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //two states: one for number of attempts and another for if the quiz is in progress
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgess] = useState<boolean>(false);

    // adds attempts (for Mulligan button)
    function addOne(): void {
        setAttempts(attempts + 1);
    }

    //removes attempts (for Start Quiz button)
    function minusOne(): void {
        setProgess(true);
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <div>
                Attempts: <span>{attempts}</span>
                <Button onClick={addOne} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
            <div>
                <Button
                    onClick={minusOne}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setProgess(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
