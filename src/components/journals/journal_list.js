import React, { Component } from 'react';

const rawJournalData = [
    { title: 'Post One', content: 'Post content', status: 'draft' },
    { title: 'Post One', content: 'Post content', status: 'draft' },
    { title: 'Post One', content: 'Post content', status: 'draft' },
    { title: 'Post One', content: 'Post content', status: 'draft' }
];

export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            isOpens: true
        };
    }
    render() {
        return <h2>Hey</h2>;
    }
}