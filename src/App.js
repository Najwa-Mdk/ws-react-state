import './App.css';

import React, {Component} from 'react'
import Profile from "./Component/Profile";
import Timer from "./Component/Timer";

export default class App extends Component {

    render() {
        return (
            <div className='App'>
                <Profile/>
                <Timer/>
            </div>
        )
    }
}
