import classNames from 'classnames';
import React from 'react';
import styles from './card.css';

export default class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardFlipped: false
        };

        this.onFlipHandler = this.onFlipHandler.bind(this);
    }

    onFlipHandler() {
        this.setState({
            cardFlipped: !this.state.cardFlipped
        });
    }

    render() {
        const cardClass = classNames({
            [styles.card]: true,
            [styles.flipped]: this.state.cardFlipped
        });

        return (
            <div className={styles.cardcontainer}
                 onClick={this.onFlipHandler}>
                <div id="card" className={cardClass}>
                    <figure className={styles.front}>1</figure>
                    <figure className={styles.back}>2</figure>
                </div>
            </div>
        );
    }
}
