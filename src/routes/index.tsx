import {Outlet, useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import PublicLayout from "../components/publicLayout/PublicLayout";
import {logout} from "../apis/User";
import ManageLayout from "../components/manageLayout/ManageLayout";
import {RoutPaths} from "../config/const";
import {getMe} from "../apis/ManageUser";
//import CenteredSpinner from "../components/loadingSpinner/CenteredSpinner";

export const ProtectedRoutes = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        // ログインユーザーのチェック
        setIsLoading(true);
        getMe().then(async (res) => {
            if (res.status === 200) {
                if (res.data.isUserRole === true) {
                    await logout().then().finally(() => {
                        navigate(RoutPaths.Login);
                    });
                }
            }
        }).catch(() => {
            navigate(RoutPaths.Login);
        }).finally(() => {
            setIsLoading(false);
        });
        // eslint-disable-next-line
    }, [location.pathname]);
    return <>
        <ManageLayout><Outlet/></ManageLayout>
        {/* <CenteredSpinner isLoading={isLoading}/> */}
    </>
}

export const PublicRoutes = () => {
    return (<PublicLayout><Outlet/></PublicLayout>)
}
