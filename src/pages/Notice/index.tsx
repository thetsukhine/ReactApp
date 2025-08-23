import React, {useEffect, useState} from "react";
import {Accordion, Button, Form, Modal, Table} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import MoreHoriz from "../../assets/more_horiz.svg";
import {RoutPaths} from "../../config/const";
import './index.css';
import {NoticeCategory, NoticeInfo, NoticeStatus, PagedNoticeResponse} from "../../models/Notice";
import {deleteNotice, getNotice} from "../../apis/Notice";
import ListPagination from "../../components/listPagination/ListPagination";
import {getJST1MonthAgo, getJST1MonthLater, stringDatetimeToStringDateTime} from "../../util/DateTimeUtils";
import NoticeDetail, {Target} from "../NoticeDetail";
import {getNoticeStatusText, getNoticeTargetText} from "../../util/NoticeUtils";
import CenteredSpinner from "../../components/loadingSpinner/CenteredSpinner";

export enum DisplayModeNotice {
    List,
    Register,
    View
}

const Notice = ({displayMode}: { displayMode: DisplayModeNotice }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [accordionKey, setAccordionKey] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedNotice, setSelectedNotice] = useState<NoticeInfo | null>(null);
    const [notices, setNotices] = useState<NoticeInfo[]>([]);

    // 検索条件
    const [noticeTarget, setTargetTenant] = useState<'all' | number>('all'); // 対象
    const [category, setCategory] = useState<'all' | NoticeCategory>('all'); // カテゴリ
    const [title, setTitle] = useState<string>(""); // タイトル
    const [status, setStatus] = useState<'all' | NoticeStatus>('all'); // ステータス
    const [publishAtFrom, setPublishAtFrom] = useState<string>(getJST1MonthAgo()); // 公開日時(From)
    const [publishAtTo, setPublishAtTo] = useState<string>(getJST1MonthLater()); // 公開日時(To)

    // ページング
    const [totalCount, setTotalCount] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);

    const handleAddNotice = () => {
        navigate(RoutPaths.CreateNotice);
    };

    const handleNoticeDetail = (notice: NoticeInfo) => {
        navigate(`${RoutPaths.Notice}/${notice.id}`);
    };

    const handleEditNotice = (notice: NoticeInfo) => {
        navigate(`${RoutPaths.CreateNotice}?id=${notice.id}`);
    };

    const handleDeleteNotice = (notice: NoticeInfo) => {
        setSelectedNotice(notice);
        setShowModal(true);
    };

    const confirmDeleteNotice = () => {
        if (selectedNotice) {
            setIsLoading(true);
            deleteNotice(selectedNotice.id).then(() => {
                getNoticeList();
                setShowModal(false);
                setIsLoading(false);
            });
        }
    };

    const handleSearch = () => {
        getNoticeList();
    }

    const getNoticeList = () => {
        setIsLoading(true);
        getNotice(
            noticeTarget === 'all' ? null : noticeTarget,
            category === 'all' ? null : category,
            title,
            status === 'all' ? null : status,
            publishAtFrom === '' ? null : publishAtFrom,
            publishAtTo === '' ? null : publishAtTo,
            page,
            pageSize
        ).then((res) => {
            const pagedNotice = res.data as PagedNoticeResponse;
            if (pagedNotice.notices.length === 0 && page > 1 && pagedNotice.totalCount > 0) {
                setPage(1);
                return;
            }
            setTotalCount(pagedNotice.totalCount);
            setNotices(pagedNotice.notices);
        }).finally(() => {
            setIsLoading(false);
        });
    }


    useEffect(() => {
        getNoticeList();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        getNoticeList();
        // eslint-disable-next-line
    }, [page, pageSize, location]);

    if (displayMode === DisplayModeNotice.Register) {
        return (
            <NoticeDetail isReadOnly={false}/>
        )
    }

    if (displayMode === DisplayModeNotice.View) {
        return (
            <NoticeDetail isReadOnly={true}/>
        )
    }

    return (
        <div className="container notice-container mt-4">
            <h3 className={"text-start"}>お知らせ一覧</h3>
            <div className={"row mt-4"}>
                <Accordion
                    onSelect={(key) => {
                        setAccordionKey(key?.toString() ?? "");
                    }}
                >
                    <Accordion.Item eventKey="0" tabIndex={201}>
                        <Accordion.Header>
                            <h6 className={"m-0 p-0 text-center w-100"}>
                                {accordionKey !== '' ? '検索条件を閉じる' : '検索条件を表示する'}
                            </h6>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="row g-3">
                                <div className="col-md-2 align-items-center">
                                    <Form.Label>対象</Form.Label>
                                </div>
                                <div className="col-md-3 align-items-center">
                                    <Form.Select
                                        value={noticeTarget}
                                        onChange={(e) => setTargetTenant(e.target.value as 'all' | number)}
                                        tabIndex={202}
                                    >
                                        <option value="all">全て</option>
                                        {Target.map((target, index) => (
                                            <option key={index} value={target.value}>{target.label}</option>
                                        ))}
                                    </Form.Select>
                                </div>
                                <div className="col-md-2 align-items-center">
                                    <Form.Label>カテゴリ</Form.Label>
                                </div>
                                <div className="col-md-3 align-items-center">
                                    <Form.Select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value as 'all' | NoticeCategory)}
                                        tabIndex={203}
                                    >
                                        <option value="all">全て</option>
                                        <option value={NoticeCategory.Notice}>お知らせ</option>
                                        <option value={NoticeCategory.Information}>アプリップリからの案内</option>
                                    </Form.Select>
                                </div>
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-2 align-items-center">
                                    <Form.Label>タイトル</Form.Label>
                                </div>
                                <div className="col-md-3 align-items-center">
                                    <Form.Control
                                        type="text"
                                        placeholder="タイトルを入力"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        maxLength={200}
                                        tabIndex={204}
                                    />
                                </div>
                                <div className="col-md-2 align-items-center">
                                    <Form.Label>ステータス</Form.Label>
                                </div>
                                <div className="col-md-3 align-items-center">
                                    <Form.Select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value as 'all' | NoticeStatus)}
                                        tabIndex={205}
                                    >
                                        <option value="all">全て</option>
                                        <option value={NoticeStatus.Draft}>下書き</option>
                                        <option value={NoticeStatus.Waiting}>送信待ち</option>
                                        <option value={NoticeStatus.Sending}>送信中</option>
                                        <option value={NoticeStatus.Sent}>送信済み</option>
                                    </Form.Select>
                                </div>
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-2 align-items-center">
                                    <Form.Label>公開日付(From)</Form.Label>
                                </div>
                                <div className="col-md-3 align-items-center">
                                    <Form.Control
                                        type="date"
                                        value={publishAtFrom}
                                        onChange={(e) => setPublishAtFrom(e.target.value)}
                                        tabIndex={206}
                                    />
                                </div>
                                <div className="col-md-2 align-items-center">
                                    <Form.Label>公開日付(To)</Form.Label>
                                </div>
                                <div className="col-md-3 align-items-center">
                                    <Form.Control
                                        type="date"
                                        value={publishAtTo}
                                        onChange={(e) => setPublishAtTo(e.target.value)}
                                        tabIndex={207}
                                    />
                                </div>
                                <div className="col-md-2 align-items-center text-end">
                                    <Button variant="primary" className={"ps-5 pe-5 m-0 me-3 text-nowrap"}
                                            onClick={handleSearch}
                                            tabIndex={208}
                                    >
                                        検索
                                    </Button>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className={"row m-0 p-0 mt-4"}>
                <Table bordered hover>
                    <thead>
                    <tr>

                        <th className="bg-light text-center">対象</th>
                        <th className="bg-light text-center">カテゴリ</th>
                        <th className="bg-light text-center">タイトル</th>
                        <th className="bg-light text-center">ステータス</th>
                        <th className="bg-light text-center">公開日時</th>
                        <th className="bg-light text-center">更新日時</th>
                        <th className="bg-light text-center">アクション</th>
                    </tr>
                    </thead>
                    <tbody>
                    {notices.map((notice, index) => (
                        <tr key={index}>
                            <td className={"text-center align-middle"}>
                                {getNoticeTargetText(notice.target)}
                            </td>
                            <td className={"text-center align-middle"}>
                                {notice.category === NoticeCategory.Notice ? 'お知らせ' : 'アプリップリからのご案内'}
                            </td>
                            <td className={"align-middle"}>{notice.title}</td>
                            <td className={"text-center align-middle"}>{getNoticeStatusText(notice.status)}</td>
                            <td className={"text-center align-middle"}>{stringDatetimeToStringDateTime(notice.publishAt)}</td>
                            <td className={"text-center align-middle"}>{stringDatetimeToStringDateTime(notice.updatedAt)}</td>
                            <td className={"text-center align-middle"}>
                                {(notice.status === NoticeStatus.Draft || notice.status === NoticeStatus.Waiting) ? (
                                    <>
                                        <Button variant="link" className="me-2" tabIndex={209}
                                                onClick={() => handleEditNotice(notice)}
                                        >
                                            <img src={Edit} alt="edit" className={"me-1"}/>
                                        </Button>
                                        <Button variant="link" onClick={() => handleDeleteNotice(notice)}
                                                tabIndex={210}>
                                            <img src={Delete} alt="delete" className={"me-1"}/>
                                        </Button>
                                    </>
                                ) : (
                                    <Button variant="link" onClick={() => handleNoticeDetail(notice)} tabIndex={211}>
                                        <img src={MoreHoriz} alt="MoreHoriz" className={"me-1"}/>
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
            <ListPagination
                totalCount={totalCount}
                page={page}
                pageSize={pageSize}
                setPage={setPage}
                setPageSize={setPageSize}
            />
            <div className={"d-flex justify-content-end mt-3 mb-5"}>
                <Button variant="outline-primary" className={"d-flex"} onClick={handleAddNotice} tabIndex={212}>
                    <span className="m-0 p-0 me-1 add-icon"></span>
                    お知らせ作成
                </Button>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>お知らせ削除確認</Modal.Title>
                </Modal.Header>
                <Modal.Body>{selectedNotice?.title} のお知らせデータを削除してもよろしいですか？</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        キャンセル
                    </Button>
                    <Button variant="danger" onClick={confirmDeleteNotice}>
                        削除
                    </Button>
                </Modal.Footer>
            </Modal>
            <CenteredSpinner isLoading={isLoading}/>
        </div>
    )

};

export default Notice;