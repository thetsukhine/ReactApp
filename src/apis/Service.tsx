import axios from 'axios';
import {RoutPaths} from "../config/const";
import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {ErrorMessages} from "../config/message";

const defaultHeaderOptions = {
    'Content-Type': 'application/json',
    Accept: '*/*',
};

const service = axios.create({
    baseURL:  "http://localhost:8000/api",//  `${process.env.REACT_APP_BACKEND_URL}`,//    
    headers: defaultHeaderOptions,
    // Cookieを送信するための設定
    // https://github.com/axios/axios#readme
    //  // `withCredentials` indicates whether or not cross-site Access-Control requests
    //   // should be made using credentials
    //   withCredentials: false, // default
    withCredentials: true,
    timeout: 120000  // 2分（ミリ秒）
});

service.interceptors.request.use(
    (config) => config,
    (error) => {
        console.log('Api Request Error - ', error);
        return Promise.reject(error);
    },
);

export const ApiService = () => {
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleCloseErrorModal = () => setShowErrorModal(false);

    service.interceptors.response.use(
        (response) => response,
        async (error) => {
            console.log(`Error${error.response?.status}`);
            let message = ErrorMessages.M_E1004;
            switch (error.response?.status) {
                case 400:
                    if (window.location.pathname === RoutPaths.CreateManageUser) {
                        // 上記以外の画面は画面側でエラーハンドリングしているためrejectする
                        return Promise.reject(error);
                    }
                    if (error.response.data && typeof error.response.data === 'string') {
                        message = error.response.data;
                    }
                    break;
                case 401:
                    if (window.location.pathname !== RoutPaths.Login) {
                        window.location.href = RoutPaths.Login;
                        return;
                    }
                    // 上記以外の画面は画面側でエラーハンドリングしているためrejectする
                    return Promise.reject(error);
                case 500:
                    if (error.response.data && typeof error.response.data === 'string') {
                        message = error.response.data;
                    }
                    break;
                default:
                    if (error.response.data && typeof error.response.data === 'string') {
                        message = error.response.data;
                    }
                    break;
            }
            //setErrorMessage(message);
            setShowErrorModal(true);
            return Promise.reject(error);
        },
    );

    return (
        <>
            <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
                <Modal.Header closeButton>
                    <Modal.Title>エラー</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errorMessage}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseErrorModal}>
                        閉じる
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default service;