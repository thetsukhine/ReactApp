import React from "react";
import {Button, Modal} from "react-bootstrap";
import {useService} from "../../context/ServiceOptionContext";

const SaveCompleteModal = () => {
    const {state, dispatch} = useService();
    const handleClose = () => dispatch({type: "CLOSE_MODAL"});

    return (
        <Modal show={state.isModalOpen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>保存完了</Modal.Title>
            </Modal.Header>
            <Modal.Body>{state.modalMessage}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    閉じる
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SaveCompleteModal;