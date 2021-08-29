import React from 'react';
import './App.css';
import Header from "./common/component/Header";
import MainPage from "./Page/Main/MainPage";
import AdminPage from "./Page/admin/adminPage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/admin" component={AdminPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
