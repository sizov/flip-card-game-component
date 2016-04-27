import React from 'react';
import CardsBoard from '../components/cardsBoard/CardsBoard';
import styles from './style.css';

const rndBool = () => !!Math.round(Math.random());
const getCard = (flipped, id) => ({id, flipped});

function getCards() {
    const result = [];
    const l = 10 + Math.round(Math.random() * 10);

    for (let i = 0; i < l; i++) {
        result.push(getCard(rndBool(), i.toString()));
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
            cards: getCards()
        };

        this.onCardClickHandler = this.onCardClickHandler.bind(this);
    }

    onCardClickHandler(cardData) {
        if (rndBool()) {
            alert('can\'t flip');
            return;
        }

        const cards = immutableUpdate(this.state.cards, {
            item: cardData,
            update: {
                flipped: !cardData.flipped
            }
        });

        this.setState({
            cards
        });
    }

    render() {
        return (
            <CardsBoard cards={this.state.cards}
                        onCardClick={this.onCardClickHandler}/>
        );
    }
}