import React from 'react';
import './App.css';
import Header from "./common/component/Header";
import MainPage from "./Page/main/mainPage";
import adminPage from "./Page/admin/AdminPage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/admin" component={adminPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
