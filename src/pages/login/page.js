import React from 'react';
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
        const s = this.state.cardFlipped ? styles.flipped : '';

        return (
            <div className={styles.content}>
                <h1 className={styles.heading}>Login Page</h1>
                <p className={styles.lead}>Create an account to get started!</p>
                <button className={styles.signUpButton} onClick={this.signUp}>
                    Sign up
                </button>

                <section className={styles.cardcontainer}
                         onClick={this.onFlipHandler}>
                    <div id="card" className={s}>
                        <figure className={styles.front}>1</figure>
                        <figure className={styles.back}>2</figure>
                    </div>
                </section>

            </div>
        );
    }
}
