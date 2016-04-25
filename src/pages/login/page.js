import React from 'react';
import Card from '../../components/card/Card';
import { browserHistory } from 'react-router';
import styles from './style.css';

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

        const getCard = (flipped, id) => ({
            id,
            flipped: !!flipped
        });

        this.state = {
            cards: [
                getCard(false, '0'),
                getCard(true, '1'),
                getCard(false, '2'),
                getCard(true, '3'),
                getCard(false, '4'),
                getCard(true, '5')
            ]
        };

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(cardData) {
        this.setState({
            cards: immutableUpdate(this.state.cards, {
                item: cardData,
                update: {
                    flipped: !cardData.flipped
                }
            })
        });
    }

    signUp() {
        browserHistory.push('/home');
    }

    render() {
        const that = this;
        const cardNodes = this.state.cards.map((cardData) => (
            <Card data={cardData}
                  key={cardData.id}
                  onClick={that.onClickHandler}>
            </Card>
        ));

        return (
            <div className={styles.content}>
                <div>
                    {cardNodes}
                </div>

            </div>
        );
    }
}
