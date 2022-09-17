import React from "react";
import './adminSidebar.css';

const AdminSidebar = () => {
    return (
        <div className="my_sidebar">
            <a className={"a_style"} href={"/"}><h1>오점뭐먹</h1></a>
            <ul className={"my_sidebar_menu"}>
                <a className={"a_style"} href={"/admin"}><h4>음식메뉴</h4></a>
                <a className={"a_style"} href={"/usersmanage"}><h4>회원관리</h4></a>
            </ul>
        </div>
    );
}

export default AdminSidebar;