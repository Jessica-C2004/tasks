import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ColorPreviewProps {
    colorIndex: number;
}

function ChangeColor(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <Button
                    onClick={() =>
                        setColorIndex((1 + colorIndex) % COLORS.length)
                    }
                >
                    Next Color
                </Button>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}

function ColorPreview({ colorIndex }: ColorPreviewProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    return (
        <div>
            <h3>Colored Box</h3>
            <div>
                <ChangeColor></ChangeColor>
            </div>
        </div>
    );
}
