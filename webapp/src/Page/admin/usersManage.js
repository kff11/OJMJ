import React from "react";
import './usersManage.css';
import AdminSidebar from './adminComponent/adminSidebar';

const UsersManage = () => {
    return (
        <div className={"usermanage_body"}>
            <div className={"sidebar"}>
                <AdminSidebar/>
            </div>
            <div className={"user_table"}>
                <h2>회원 관리</h2>
            </div>
        </div>
    );
}

export default UsersManage;