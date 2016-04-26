import React from 'react';
import GameBoard from '../../components/gameBoard/GameBoard';
import { browserHistory } from 'react-router';
import styles from './style.css';

const getCard = (flipped, id) => ({
    id,
    flipped: !!flipped
});

const getCards = () => ([
    getCard(false, '0'),
    getCard(true, '1'),
    getCard(false, '2'),
    getCard(true, '3'),
    getCard(false, '4'),
    getCard(true, '5')
]);

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

    this.onCardClickHandler = this.onCardClickHandler.bind(this);

    return result;
}

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            game: {
                cards: getCards()
            }
        }
    }

    onCardClickHandler(cardData) {
        this.setState({
            game: {
                cards: immutableUpdate(this.state.game.cards, {
                    item: cardData,
                    update: {
                        flipped: !cardData.flipped
                    }
                })
            }
        });
    }

    render() {
        return (
            <GameBoard game={this.state.game}
                       onCardClick={this.onCardClickHandler}/>
        );
    }
}
