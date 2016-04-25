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

        function getCard(flipped) {
            return {
                flipped: !!flipped
            }
        }

        this.state = {
            cards: [getCard(true), getCard(false), getCard(true)]
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
        console.log(this.state);

        const that = this;

        const cardNodes = this.state.cards.map(function (cardData) {
            return (
                <Card data={cardData}
                      onClick={that.onClickHandler}>
                </Card>
            );
        });

        return (
            <div className={styles.content}>
                <div>
                    {cardNodes}
                </div>

            </div>
        );
    }
}
