import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "💘" | "🦃" | "🍀";
const HOLIDAY_YEAR: Record<Holiday, Holiday> = {
    "💘": "🍀",
    "🍀": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "💘"
};

const HOLIDAY_ALPHABET: Record<Holiday, Holiday> = {
    "🎄": "🎃",
    "🎃": "🍀",
    "🍀": "🦃",
    "🦃": "💘",
    "💘": "🎄"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    function changeHolidayYr(): void {
        const newHoliday = HOLIDAY_YEAR[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayAlphabet(): void {
        const newHoliday = HOLIDAY_ALPHABET[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>
                <span>Holiday: {holiday}</span>
                <Button onClick={changeHolidayAlphabet}>
                    Advance By Alphabet
                </Button>
                <Button onClick={changeHolidayYr}>Advance by Year</Button>
            </div>
        </div>
    );
}
