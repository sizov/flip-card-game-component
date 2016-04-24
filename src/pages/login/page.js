import React from 'react';
import Card from '../../components/card/Card';
import { browserHistory } from 'react-router';
import styles from './style.css';


export default class LoginPage extends React.Component {

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

    signUp() {
        browserHistory.push('/home');
    }

    render() {
        const cardClass = this.state.cardFlipped ? styles.flipped : '';
        return (
            <div className={styles.content}>
                <h1 className={styles.heading}>Login Page</h1>
                <p className={styles.lead}>Create an account to get started!</p>
                <button className={styles.signUpButton} onClick={this.signUp}>
                    Sign up
                </button>

                <Card/>
                <Card/>
                <Card/>

            </div>
        );
    }
}
