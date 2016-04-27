import React from 'react';
import GameBoard from '../../components/gameBoard/GameBoard';
import { browserHistory } from 'react-router';
import styles from './style.css';

const getCard = (flipped, id) => ({
    id,
    flipped: !!flipped
});

function getCards() {
    const result = [];
    const l = 10 + Math.round(Math.random() * 10);

    for (let i = 0; i < l; i++) {
        result.push(getCard(!!Math.round(Math.random()), i.toString()));
    }

    return result;
}

//FIXME: move to utils or use immutable.js
function immutableUpdate(source, params) {
    const result = [];

    source.forEach(function (item) {
        let itemToSave = item;
        if (item === params.item) {
            itemToSave = Object.assign(params.item, params.update);
        }
        result.push(itemToSave);
    });

    return result;
}

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            game: {
                cards: getCards()
            }
        };

        this.onCardClickHandler = this.onCardClickHandler.bind(this);
    }

    onCardClickHandler(cardData) {
        const cards = immutableUpdate(this.state.game.cards, {
            item: cardData,
            update: {
                flipped: !cardData.flipped
            }
        });

        this.setState({
            game: {cards}
        });
    }

    render() {
        return (
            <GameBoard game={this.state.game}
                       onCardClick={this.onCardClickHandler}/>
        );
    }
}
