import React from "react";
import {Alert} from "react-bootstrap";

const ErrorAlert = ({errors}: { errors: {} }) => {
    if (Object.keys(errors).length <= 0) {
        return null;
    }
    return (
        <Alert variant="danger" data-testid="error-alert">
            {Object.keys(errors).map((key, index) => {
                // @ts-ignore
                const messages = errors[key] as string[];
                if (!messages || messages.length <= 0 || messages[0] === "") {
                    return null;
                }
                return (
                    <p key={index} className="text-start m-0 p-0" data-testid="error-alert-message">{messages[0]}</p>
                );
            })}
        </Alert>
    );
};

export default ErrorAlert;