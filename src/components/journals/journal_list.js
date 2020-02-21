import React, { Component } from 'react';
import { JournalEntry } from './journal_entry'


const rawJournalData = [
    { title: 'Post One', content: 'Post content', status: 'draft' },
    { title: 'Post One', content: 'Post content', status: 'draft' },
    { title: 'Post One', content: 'Post content', status: 'draft' },
    { title: 'Post One', content: 'Post content', status: 'draft' }
];

//class component
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: 'Hi there',
            isOpens: true
        };
    }
    render() {
        return (
            <div>
                <h2>{this.props.heading}</h2>
                <JournalEntry title='some title' content='more content' />
            </div>
        );
    }
}