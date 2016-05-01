import classNames from 'classnames';
import React from 'react';
import styles from './card.css';

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.props.onClick(this.props.data);
    }

    render() {
        const cardClass = classNames({
            [styles.card]: true,
            [styles.flipped]: this.props.data.flipped
        });

        return (
            <div className={styles.cardcontainer}
                 onClick={this.onClickHandler}>
                <div id="card" className={cardClass}>
                    <figure className={styles.front}>?</figure>
                    <figure className={styles.back}>{this.props.data.image}</figure>
                </div>
            </div>
        );
    }
}

Card.defaultProps = {
    data: {
        flipped: false
    },
    onClick: function () {
    }
};

export default Card;