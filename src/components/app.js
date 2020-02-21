import React, { Component } from 'react';
import JournaList from './journals/journal_list';

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <h1>Deep Dive: React, Props and State</h1>
                <JournaList />
            </div>
        );
    }
}