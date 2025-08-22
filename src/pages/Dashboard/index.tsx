import React, {useEffect, useState} from "react";
import './index.css';
import {Card, Table} from "react-bootstrap";
//import {Bar} from "react-chartjs-2";
//import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";
import {Link, useNavigate} from "react-router-dom";
import {RoutPaths} from "../../config/const";
//import {getDashboardNotice} from "../../apis/Notice";
import {getDashboardTasks} from "../../apis/Task";
import {NoticeCategory, NoticeInfo} from "../../models/Notice";
//import {TaskInfo} from "../../models/Task";
//import {stringDatetimeToStringDate} from "../../util/DateTimeUtils";
import {getSubscriptionSummary} from "../../apis/Contract";
//import {TaskCategory} from "../TaskList/const";
//import {generateTaskStatus} from "../../util/TaskUtils";
//import CenteredSpinner from "../../components/loadingSpinner/CenteredSpinner";
import {getMe} from "../../apis/ManageUser";
//import {User} from "../../models/User";

//ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// 今日を起点に過去7日間の日付ラベルを生成
const labels = Array.from({length: 7}, (_, i) => {
    const date = new Date();
    date.setDate(new Date().getDate() - i);
    return `${date.getMonth() + 1}/${date.getDate()}`; // 月/日 形式でフォーマット
}).reverse();

// グラフのオプション
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const, // 凡例の位置
        },
        title: {
            display: true,
            text: "申込件数の推移（過去7日間）", // グラフタイトル
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: "日付", // X軸のタイトル
            },
        },
        y: {
            title: {
                display: true,
                text: "申込件数", // Y軸のタイトル
            },
            beginAtZero: true, // Y軸の始まりをゼロに設定
            ticks: {
                stepSize: 1, // 目盛の単位を1に設定
            },
        },
    },
};

const Dashboard = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
     const [notices, setNotices] = React.useState<NoticeInfo[]>([]);
    // const [tasks, setTasks] = React.useState<TaskInfo[]>([]);
    const [applicationData, setApplicationData] = React.useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            //getDashboardNotice(),
            getDashboardTasks(),
            getSubscriptionSummary()
        ]).then(([ taskRes, summaryRes]) => {
            // setNotices(noticeRes.data.notices);
            // setTasks(Array.isArray(taskRes.data.tasks) ? taskRes.data.tasks : []);
            const data = summaryRes.data as number[];
            setApplicationData(data);
        }).finally(() => {
            setIsLoading(false);
        })
        // eslint-disable-next-line
    }, []);

    // グラフを生成
    const generateBar = () => {
        const data = {
            labels, // X軸のラベル（過去7日間の日付）
            datasets: [
                {
                    label: "申込件数",
                    data: applicationData, // Y軸のデータ
                    backgroundColor: "rgba(75, 192, 192, 0.5)", // 棒の背景色
                    borderColor: "rgba(75, 192, 192, 1)", // 棒の枠線の色
                    borderWidth: 1, // 枠線の幅
                },
            ],
        };
        // return (
        //     <Bar data={data} options={options}/>
        // )
    }

    const handleTaskList = () => {
        setIsLoading(true);
        getMe().then((res) => {
            // const user = res.data as User;
            // navigate(RoutPaths.TaskList, {state: {role: user.roleId}});
        }).catch((err) => {
            console.error(err);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return (
        <div className="container-xxl dashboard-container">
            <div className="row m-2">
                <div className="col-md-6 mt-3">
                    <Card className={"mb-4"}>
                        <Card.Header
                            className={"bg-primary-subtle text-primary-emphasis fw-bold d-flex justify-content-between align-items-center"}>
                            <h5 className={"m-2"}>お知らせ</h5>
                            <Link to={RoutPaths.Notice} className="text-dark fw-nomal m-0 p-0" tabIndex={201}>
                                お知らせ一覧
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive small">
                                <Table bordered hover>
                                    <thead>
                                    <tr>
                                        <th className="bg-light text-center">カテゴリ</th>
                                        <th className="bg-light text-center">日付</th>
                                        <th className="bg-light text-center">タイトル</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {notices.map((notice, index) => (
                                        <tr key={index} onClick={() => navigate(`${RoutPaths.Notice}/${notice.id}`)}>
                                            <td>{notice.category === NoticeCategory.Notice ? "お知らせ" : "アプリップリからの案内"}</td>
                                            <td>{(notice.publishAt)}</td>
                                            <td>{notice.title}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className={"mb-4"}>
                        <Card.Header
                            className={"bg-primary-subtle text-primary-emphasis fw-bold d-flex justify-content-between align-items-center"}>
                            <h5 className={"m-2"}>タスク</h5>
                            <span className={"text-decoration-underline text-dark fw-nomal m-0 p-0 cursor-pointer"}
                                tabIndex={202} onClick={handleTaskList}>
                                タスク一覧
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive small">
                                <Table bordered hover>
                                    <thead>
                                    <tr>
                                        <th className="bg-light text-center">ステータス</th>
                                        <th className="bg-light text-center">期限</th>
                                        <th className="bg-light text-center">カテゴリ</th>
                                        <th className="bg-light text-center">会社名</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/* {tasks.map((task, index) => (
                                        <tr key={index} onClick={() => navigate(`${RoutPaths.TaskList}/${task.id}`)}>
                                            <td>{generateTaskStatus(task.status)}</td>
                                            <td>{stringDatetimeToStringDate(task.deadline)}</td>
                                            <td>{TaskCategory.find((category) => category.value === task.taskTemplateId)?.label}</td>
                                            <td>{task.tenantName}</td>
                                        </tr>
                                    ))} */}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 mt-3">
                    <Card className={"mb-4"}>
                        <Card.Header className={"bg-primary-subtle text-primary-emphasis fw-bold"}>
                            <h5 className={"m-2"}>申し込み推移</h5>
                        </Card.Header>
                        <Card.Body>
                            {/* {generateBar()} */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
            {/* <CenteredSpinner isLoading={isLoading}/> */}
        </div>
    );
}

export default Dashboard;