import React, { useState } from "react";
import { Button } from "react-bootstrap";
/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);

    //set die
    function changeLeftDie(): void {
        setLeftDie(d6);
    }

    function changeRightDie(): void {
        setRightDie(d6);
    }

    //roll buttons
    <div>
        <Button onClick={changeLeftDie}>Roll Left</Button>
        <Button onClick={changeRightDie}>Roll Right</Button>
    </div>;

    return (
        <div>
            Two Dice
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <div>
                Left Die: <span>{leftDie}</span>
                Right Die: <span>{rightDie}</span>
                <Button onClick={changeLeftDie}>Roll Left</Button>
                <Button onClick={changeRightDie}>Roll Right</Button>
            </div>
            <div>
                {leftDie === 1 && rightDie === 1 ? (
                    <span>You Lose!</span>
                ) : rightDie === leftDie ? (
                    <span>You Win</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
