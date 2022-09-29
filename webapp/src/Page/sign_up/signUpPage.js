import React, {useState} from "react";
import '../sign_up/signUpPage.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {saveUser} from "../../actions/userAction";
import TestListRepetition from "./testListRepetition";

function SignUpPage() {
    const [nickName, setNickName] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useDispatch();

    const addUser = (event) => {
        event.preventDefault();

        const admitData = {
            num: '',
            userId: userId,
            nickname: nickName,
            password: password
        };
        console.log("admitData 전송");
        console.log(saveUser(userId));

        dispatch(saveUser(admitData));

        resetForm();
    }

    // 입력란 초기화
    const resetForm = () => {
        setNickName('');
        setUserId('');
        setPassword('');
        setPasswordConfirm('');
    };

    return (
        <div className={"signup_body"}>
            <form className={"signup_inner"} onSubmit={addUser}>
                <a href="/"><h1>오점뭐먹</h1></a><br/>
                <input
                    type={"text"}
                    value={nickName}
                    placeholder="닉네임"
                    className={"signup_input"}
                    maxLength={10}
                    onChange={e => setNickName(e.target.value)}
                /><br/>
                <input
                    type={"id"}
                    value={userId}
                    placeholder="ID"
                    className={"signup_input"}
                    maxLength={10}
                    onChange={e => setUserId(e.target.value)}
                /><br/>
                <input
                    type={'password'}
                    value={password}
                    placeholder="비밀번호"
                    className={"signup_input"}
                    minLength={4}
                    maxLength={18}
                    onChange={e => setPassword(e.target.value)}
                /><br/>
                <input
                    type={'password'}
                    value={passwordConfirm}
                    placeholder="비밀번호 확인"
                    className={"signup_input"}
                    minLength={4}
                    maxLength={18}
                    onChange={e => setPasswordConfirm(e.target.value)}
                /><br/>
                {/*<Link to="/usersmanage">*/}
                    <button type={"submit"} className={"signup_btn"}>회원가입</button>
                {/*</Link>*/}
            </form>
            <TestListRepetition/>
        </div>
    );
};

export default SignUpPage;