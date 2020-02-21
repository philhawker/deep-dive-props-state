import React, { Component } from 'react';
import { JournalEntry } from './journal_entry'


const rawJournalData = [
    { title: 'Post One', content: 'Post content', status: 'draft' },
    { title: 'Post Two', content: 'Post content', status: 'draft' },
    { title: 'Post Three', content: 'Post content', status: 'draft' },
    { title: 'Post Four', content: 'Post content', status: 'draft' }
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

    clearEntries = () => {
        this.setState({ journalData: [] })
    }

    render() {
        const jouranlEntries = this.state.journalData.map(journalEntry => {
            return (
                <div key={journalEntry.title}>
                    <JournalEntry
                        title={journalEntry.title}
                        content={journalEntry.content}
                    />
                </div>
            )
        })

        return (
            <div>
                <h2>{this.props.heading}</h2>
                {jouranlEntries}

                <button onClick={this.clearEntries}>Clear Journal Entries</button>
            </div>
        );
    }
}