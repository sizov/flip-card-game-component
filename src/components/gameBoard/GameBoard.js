import React from 'react';
import Card from '../../components/card/Card';
import styles from './gameBoard.css';

class GameBoard extends React.Component {

    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(cardData) {
        this.props.onCardClick(cardData);
    }

    render() {
        const that = this;
        const cardNodes = this.props.game.cards.map((cardData) => (
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

GameBoard.defaultProps = {
    game: {},
    onCardClick: function () {
    }
};

export default GameBoard;