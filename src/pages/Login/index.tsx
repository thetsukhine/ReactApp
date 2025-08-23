import React, {useEffect, useState} from "react";
import {Button, Card, FloatingLabel, Form} from "react-bootstrap";
import './index.css';
import {useNavigate} from "react-router-dom";
import {login, logout} from "../../apis/User";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";
import {AssetPaths, RoutPaths} from "../../config/const";
import {getMe} from "../../apis/ManageUser";
//import CenteredSpinner from "../../components/loadingSpinner/CenteredSpinner";

interface Errors {
    email?: string;
    password?: string;
}

const ManageLogin = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 画面入力項目
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    // エラーオブジェクト
    const [errors, setErrors] = React.useState<Errors>({});
    const [responseErrors, setResponseErrors] = React.useState<{} | null>(null);

    const handleSubmit = () => {
        if (!validate()) {
            return;
        }
        setIsLoading(true);
        login(email, password).then(async () => {
            await getMe().then(async (res) => {
                console.log ("resdata", res.data );
                if (res.status === 200) {
                    if (res.data.isUserRole === true) {
                        await logout().finally(() => {
                            setResponseErrors({unauthorized: ['メールアドレスまたはパスワードが間違っています']});
                        });
                    } else {
                        navigate(RoutPaths.Dashboard);
                        return;
                    }
                }
            });
        }).catch((err) => {
            if (err.response.status === 401) {
                setResponseErrors({unauthorized: ['メールアドレスまたはパスワードが間違っています']});
            }
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const validate = () => {
        let errors: Errors = {};
        if (email === "") {
            errors.email = 'メールアドレスを入力してください';
        }
        if (password === "") {
            errors.password = 'パスワードを入力してください';
        }
        setErrors(errors);
        return Object.keys(errors).length <= 0;
    }

useEffect(() => {
        setIsLoading(true);
        getMe().then(async (res) => {
            console.log( "res.data", res.data );
            if (res.status === 200) {
                if (res.data.isUserRole === true) {
                    await logout();
                } else {
                    navigate(RoutPaths.Dashboard);
                    return;
                }
            }
        }).finally(() => {
            setIsLoading(false);
        });
        // eslint-disable-next-line
    }, []);


    return (
        <div className="container d-flex justify-content-center align-items-center login-container">
            <Card className="login-form-card">
                <div className="card-body text-center">
                    <img
                        src={AssetPaths.NavbarBrandLogo}
                        width="236"
                        height="80"
                        alt="Applippli"
                        className={"mb-4"}
                    />

                    <h5 className="card-title mt-3 mb-3" data-testid="header">管理者ログイン</h5>

                    {responseErrors && (
                        <ErrorAlert errors={responseErrors}/>
                    )}
                    <div className="mb-3">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="メールアドレス"
                        >
                            <Form.Control
                                type="text"
                                placeholder="メールアドレスを入力"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                isInvalid={!!errors.email}
                                data-testid="email-input"
                                maxLength={100}
                                tabIndex={201}
                            />
                            {errors.email && (
                                <Form.Control.Feedback type="invalid" className="text-start">
                                    {errors.email}
                                </Form.Control.Feedback>
                            )}
                        </FloatingLabel>
                    </div>

                    <div className="mb-3">
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="パスワード"
                        >
                            <Form.Control
                                type="password"
                                placeholder="パスワードを入力"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                isInvalid={!!errors.password}
                                data-testid="password-input"
                                maxLength={100}
                                tabIndex={202}
                            />
                            {errors.password && (
                                <Form.Control.Feedback type="invalid" className="text-start">
                                    {errors.password}
                                </Form.Control.Feedback>
                            )}
                        </FloatingLabel>
                    </div>
                    <div className="d-grid gap-2">
                        <Button
                            onClick={handleSubmit}
                            tabIndex={203}
                        >
                            ログイン
                        </Button>
                    </div>
                </div>
            </Card>
            {/* <CenteredSpinner isLoading={isLoading}/> */}
        </div>
    );
}

export default ManageLogin;