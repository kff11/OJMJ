import React from "react";
import {Link} from "react-router-dom";

function loginPage() {
    return (
        <div>
            <h1>로그인</h1>
            <input placeholder="ID"></input>
            <input placeholder="PW"></input>
            <Link to="/"><button>login</button></Link>
            <Link to="/signUp"><button>회원가입</button></Link>
        </div>
    );
}

export default loginPage;