import React, { Component } from 'react';
import { JournalEntry } from './journal_entry'


const rawJournalData = [
    { title: 'Post One', content: 'Post content', status: 'draft' },  // all of this represents raw data that could be pulled in from an outside source
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
        this.setState({ journalData: [], isOpen: false })
    }

    showAllEntries = () => {
        this.setState({ journalData: rawJournalData, isOpen: true })
    }

    toggleStatus = () => {
        if (this.state.isOpen) {
            this.setState({ journalData: [], isOpen: false })
        } else {
            this.setState({ journalData: rawJournalData, isOpen: true })
        }
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
                <button onClick={this.showAllEntries}>Show All Journal Entries</button>
                <button onClick={this.toggleStatus}>Toggle Entries</button>
            </div>
        );
    }
}