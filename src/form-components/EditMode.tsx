import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [username, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>): void {
        setEditMode(event.target.checked);
    }

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>): void {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="inEditMode"
                label="edit"
                checked={editMode}
                onChange={updateEdit}
            />
            {editMode ? (
                <div>
                    <Form.Group controlID="formStudentName" as={Row}>
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={username}
                                onChange={updateUsername}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="isStudent"
                        label="Are you a student?"
                        checked={student}
                        onChange={updateStudent}
                    />
                </div>
            ) : (
                <div>
                    {username} is {student ? "a student" : "not a student"};
                </div>
            )}
        </div>
    );
}
