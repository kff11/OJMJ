import React from "react";
import axios from 'axios';

class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "연어 덮밥",
        };
    }

    changeText = () => {
        this.setState({
            text: "고등어구이",
        });
    };

    hitFood = () => {
        axios.get('http://ec2-54-180-100-55.ap-northeast-2.compute.amazonaws.com:8081/api/food/KOR002', {
            food_id: 'test',
            food_main_category: 'KoreaFood',
            food_middle_category: 'BrothFood',
            food_sub_category: 'rice',
            food_name: '국밥'
        }).then(res => {
            if (res.data === 1) {
                this.setState({
                    text: "김치맛있어요"
                });
            }
        }).catch(err => {
            throw err;
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.hitFood}>시작!</button>
                <button onClick={this.hitFood}>선택!</button>
            </div>
        );
    }
}

export default MainPage;