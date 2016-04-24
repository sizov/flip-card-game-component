import classNames from 'classnames';
import React from 'react';
import styles from './card.css';

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.props.onClick();
    }

    render() {
        const cardClass = classNames({
            [styles.card]: true,
            [styles.flipped]: this.props.flipped
        });

        return (
            <div className={styles.cardcontainer}
                 onClick={this.onClickHandler}>
                <div id="card" className={cardClass}>
                    <figure className={styles.front}>1</figure>
                    <figure className={styles.back}>2</figure>
                </div>
            </div>
        );
    }
}

Card.defaultProps = {
    flipped: false,
    onClick: function () {
    }
};

export default Card;