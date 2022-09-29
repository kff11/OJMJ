import React, {useEffect, useState} from "react";
import './usersManage.css';
import AdminSidebar from './adminComponent/adminSidebar';
import Pagination from "./adminComponent/pagination";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getUser} from "../../actions/userAction";

const UsersManage = () => {
    const [limit, setLimit] = useState(10); //페이지당 게시물 수
    const [page, setPage] = useState(1); // 현재 페이지 번호
    const offset = (page - 1) * limit; //첫 게시물의 위치

    const {users} = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

    const onDeleteUser = (userId) => dispatch(deleteUser(userId));

    return (
        <div className={"usermanage_body"}>
            <div className={"sidebar"}>
                <AdminSidebar/>
            </div>
            <div className={"user_table"}>
                <label className={"select_the_num"}>
                    페이지 당 표시할 게시물 수:&nbsp;
                    <select
                        type="number"
                        value={limit}
                        onChange={({target: {value}}) => setLimit(Number(value))}>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </label>

                <main>
                    <table className="user">
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>닉네임</th>
                            <th>삭제</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.slice(offset, offset + limit).map(userRowData => (
                            <tr key={userRowData.userId}>
                                <td>{userRowData.num}</td>
                                <td>{userRowData.userId}</td>
                                <td>{userRowData.nickname}</td>
                                <td>
                                    <button onClick={() => onDeleteUser(userRowData.userId)} className={"user_delete_btn"}>
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </main>

                <footer>
                    <Pagination
                        total={users.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </footer>
            </div>
        </div>
    );
}

export default UsersManage;