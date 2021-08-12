import React from "react";

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

    render(){
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.changeText}>시작!</button>
            </div>
        );
    }
}

export default MainPage;