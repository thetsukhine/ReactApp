import React, {useState} from 'react'
import './ManageLayout.scss'
import {Dropdown, Nav} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {logout} from "../../apis/User";
import {RoutPaths} from "../../config/const";
//import CenteredSpinner from "../loadingSpinner/CenteredSpinner";

const ManageLayout = ({children}: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleNavigate = (to: string) => {
        navigate(to);
    }
    const handleLogout = () => {
        setIsLoading(true);
        logout().finally(() => {
            navigate(RoutPaths.Login);
            setIsLoading(false);
        })
    }
    return (
        <>
            <header className="bg-primary text-white py-3">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <h1 className="h3 mb-0">ダッシュボード</h1>
                        <Nav>
                            <Nav.Link
                                className="text-white"
                                onClick={() => {
                                    navigate(RoutPaths.Dashboard);
                                }}
                                tabIndex={0}
                            >
                                ホーム
                            </Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle
                                    as={Nav.Link}
                                    className="text-white"
                                    tabIndex={1}
                                >
                                    ユーザー管理
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={() => handleNavigate(RoutPaths.ManageUsers)}
                                        tabIndex={2}
                                    >
                                        ユーザー管理
                                    </Dropdown.Item>

                                    <Dropdown.Item
                                        onClick={() => handleNavigate(RoutPaths.ManageUsers1)}
                                        tabIndex={2}
                                    >
                                        1111111
                                    </Dropdown.Item>
                                    
                                    <Dropdown.Item
                                        onClick={() => handleNavigate(RoutPaths.Role)}
                                        tabIndex={3}
                                    >
                                        権限管理
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link
                                className="text-white"
                                onClick={() => {
                                    navigate(RoutPaths.Tenant);
                                }}
                                tabIndex={4}
                            >
                                会社情報
                            </Nav.Link>
                            <Nav.Link
                                className="text-white"
                                onClick={() => {
                                    navigate(RoutPaths.Service);
                                }}
                                tabIndex={5}
                            >
                                サービス管理
                            </Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle
                                    as={Nav.Link}
                                    className="text-white"
                                    tabIndex={6}
                                >
                                    売上管理
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={() => handleNavigate(RoutPaths.Finance)}
                                        tabIndex={7}
                                    >
                                        売上管理
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => handleNavigate(RoutPaths.LicenseIssue)}
                                        tabIndex={8}
                                    >
                                        ライセンス発行状況
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle
                                    as={Nav.Link}
                                    className="text-white"
                                    tabIndex={9}
                                >
                                    タスク管理
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={() => handleNavigate(RoutPaths.TaskList)}
                                        tabIndex={10}
                                    >
                                        タスク一覧
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => handleNavigate(RoutPaths.CreateTask)}
                                        tabIndex={11}
                                    >
                                        タスク作成
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => handleNavigate(RoutPaths.TaskManage)}
                                        tabIndex={12}
                                    >
                                        タスクテンプレート
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle
                                    as={Nav.Link}
                                    className="text-white"
                                    tabIndex={13}
                                >
                                    お知らせ管理
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={() => handleNavigate(RoutPaths.Notice)}
                                        tabIndex={14}
                                    >
                                        お知らせ一覧
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => handleNavigate(RoutPaths.CreateNotice)}
                                        tabIndex={15}
                                    >
                                        お知らせ作成
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Link
                                className="text-white"
                                onClick={handleLogout}
                                tabIndex={16}
                            >
                                ログアウト
                            </Nav.Link>
                        </Nav>
                    </div>
                </div>
            </header>
            {children}
            {/* <CenteredSpinner isLoading={isLoading}/> */}
        </>
    )
}

export default ManageLayout;