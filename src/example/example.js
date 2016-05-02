import React from 'react';
import CardsBoard from '../components/cardsBoard/CardsBoard';
import styles from './style.css';
import flipCardGame from 'flip-card-game/dist/flip-card-game';

const FlipCardGame = flipCardGame.FlipCardGame;
const getCard = (flipped, id, image) => ({flipped, id, image});

const game = new FlipCardGame();
const gamePlayers = game.getPlayers();
const gameCards = game.getCards();

//fixme: import events from game
const CARD_FLIP_EVENT = 'cardFlipEvent';
const PLAYER_FOUND_PAIR_EVENT = 'playerFoundPairEvent';
const PLAYER_FINISHED_FLIPPING_PAIR_EVENT = 'playerFinishedFlippingPairEvent';
const GAME_OVER_EVENT = 'gameOverEvent';
const GAME_DRAW_EVENT = 'gameDrawEvent';

game.on(CARD_FLIP_EVENT, ()=>console.log(CARD_FLIP_EVENT));
game.on(PLAYER_FOUND_PAIR_EVENT, ()=>console.log(PLAYER_FOUND_PAIR_EVENT));
game.on(PLAYER_FINISHED_FLIPPING_PAIR_EVENT, ()=>console.log(PLAYER_FINISHED_FLIPPING_PAIR_EVENT));
game.on(GAME_OVER_EVENT, ()=>console.log(GAME_OVER_EVENT));
game.on(GAME_DRAW_EVENT, ()=>console.log(GAME_DRAW_EVENT));

function getCards(nariveGameGards) {
    return nariveGameGards.map(function (nativeGameCard) {
        return getCard(
            nativeGameCard.getState() !== 'back',
            nativeGameCard.getId(),
            nativeGameCard.getPairId()
        );
    });
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
            players: gamePlayers,
            currentPlayer: gamePlayers[0],
            cards: getCards(gameCards)
        };

        this.onCardClickHandler = this.onCardClickHandler.bind(this);
        this.onPlayerChangeHandler = this.onPlayerChangeHandler.bind(this);
    }

    onCardClickHandler(cardData) {
        console.log(cardData);

        game.flipCard({
            cardId: cardData.id,
            playerId: this.state.currentPlayer.getId()
        });

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

    onPlayerChangeHandler(e) {
        this.setState(Object.assign(
            this.state,
            {
                currentPlayer: e.target.value
            }
        ));
    }

    render() {
        const playersNodes = this.state.players.map(function (player) {
            const playerId = player.getId();
            return <option value={playerId}
                           key={playerId}>
                {playerId}
            </option>
        });

        return (
            <div>
                Current player:
                <select
                    defaultValue={this.state.currentPlayer.getId()}
                    onChange={this.onPlayerChangeHandler}>
                    {playersNodes}
                </select>

                <CardsBoard cards={this.state.cards}
                            onCardClick={this.onCardClickHandler}/>
            </div>
        );
    }
}