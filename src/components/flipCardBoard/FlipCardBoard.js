import React from 'react';
import Card from '../../components/card/Card';
import styles from './flipCardBoard.css';

class FlipCardBoard extends React.Component {

    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(cardData) {
        this.props.onCardClick(cardData);
    }

    render() {
        const that = this;
        const cardNodes = this.props.cards.map((cardData) => (
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

FlipCardBoard.defaultProps = {
    cards: [],
    onCardClick: function () {
    }
};

export default FlipCardBoard;