

import styles from "./StartButton.module.css";

const StartButton = ({rounds, setRounds, startGame}) => {

    let currentRound = Object.keys(rounds)[0];

    return (<div className={styles.start_button}>
        <div className={styles.start_button_title}>
            Раунд: {currentRound}
        </div>

        <div>
            <button onClick={() => {startGame(currentRound)}}>Начать</button>
        </div>
    </div>
    )
}

export default StartButton;