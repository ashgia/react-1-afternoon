import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import Palindrome from '../Topics/Palindrome'
import FilterString from '../Topics/FilterString'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
    render () {
        return (
            <div>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )

    }
}

