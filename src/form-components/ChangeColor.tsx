import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors = [
        "red",
        "green",
        "pink",
        "purple",
        "blue",
        "yellow",
        "brown",
        "white",
        "orange"
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((colorVar) => (
                <Form.Check
                    inline
                    key={colorVar}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id={"colorCheck" + colorVar}
                    label={colorVar}
                    value={colorVar}
                    checked={color === colorVar}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "100%",
                    height: "100px",
                    backgroundColor: color,
                    marginTop: "10px",
                    fontSize: "400%"
                }}
            >
                {color}
            </div>
        </div>
    );
}
