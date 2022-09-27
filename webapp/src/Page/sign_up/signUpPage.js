import React, {useState} from "react";
import '../sign_up/signUpPage.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {saveUser} from "../../actions/userAction";

function SignUpPage() {
    const [nickName, setNickName] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const dispatch = useDispatch();

    const addUser = (event) => {
        event.preventDefault();

        const admitData = {
            userId: userId,
            nickname: nickName,
            password: password
        };
        console.log("admitData 전송");
        console.log(admitData);

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
            <div className={"signup_inner"} onSubmit={addUser}>
                <a href="/"><h1>오점뭐먹</h1></a><br/>
                <input
                    type={"text"}
                    className={"signup_input"}
                    placeholder="닉네임"
                    maxLength={10}
                    onChange={e => setNickName(e.target.value)}
                /><br/>
                <input
                    type={"id"}
                    className={"signup_input"}
                    placeholder="ID"
                    maxLength={10}
                    onChange={e => setUserId(e.target.value)}
                /><br/>
                <input
                    type={'password'}
                    className={"signup_input"}
                    placeholder="비밀번호"
                    minLength={4}
                    maxLength={18}
                    onChange={e => setPassword(e.target.value)}
                /><br/>
                <input
                    type={'password'}
                    className={"signup_input"}
                    placeholder="비밀번호 확인"
                    minLength={4}
                    maxLength={18}
                /><br/>
                <Link to="/usersmanage">
                    <button className={"signup_btn"}>회원가입</button>
                </Link>
            </div>
        </div>
    );
};

export default SignUpPage;