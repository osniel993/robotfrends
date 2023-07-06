import React, {Component} from "react";
import SearchBox from "../component/SearchBox";
import CardList from "./CardList";
import {robots} from "../data/robots";
import './App.css';
import 'tachyons'


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots, searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: this.toLowerCase(event.target.value)})
    }

    toLowerCase(text) {
        return text.toLowerCase();
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => this.toLowerCase(robot.name).includes(this.state.searchField));
        return (<div className={'tc'}>
            <h1>RobotsFriends</h1>
            <SearchBox onSearchChange={this.onSearchChange}></SearchBox>
            <CardList robots={filteredRobots}></CardList>
        </div>);
    }
}

export default App;
