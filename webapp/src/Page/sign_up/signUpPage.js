import React from "react";
import {Link} from "react-router-dom";

function signUpPage () {
    return (
        <div>
            <h1>회원가입</h1>
            <input placeholder="닉네임"/>
            <input placeholder="ID"/>
            <input placeholder="PW"/>
            <input placeholder="PW 확인"/>
            <Link to="/user/profile"><button>회원가입</button></Link>
        </div>
    );
}

export default signUpPage;