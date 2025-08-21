import React from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
//import QuestionMark from '../../assets/question_mark.svg';
import './style.css';

const HelpTooltip = ({children}: { children: React.ReactNode }) => {
    const uuid = Math.random().toString(36).substring(7);
    return (
        // <OverlayTrigger
        //     key={uuid}
        //     placement={'top'}
        //     overlay={
        //         <Tooltip id={`tooltip-${uuid}`} className={"help-tooltip"}>{children}</Tooltip>
        //     }
        // >
        //     {/* <Button variant="secondary" className={"rounded-circle m-0 p-0 ms-2"}>
        //         <img src={QuestionMark} alt="question_mark" className={"rounded-circle"}/>
        //     </Button> */}
        // </OverlayTrigger>
        <></>
    );
};

export default HelpTooltip;