

import styles from "./Options.module.css";

const Options = ({rounds, setRounds}) => {
    return (<div className={styles.options}>
        <div className={styles.options_title}>Режимы игры:</div>

        <div className={styles.options_options}>

        <div>
        <input type="radio" id="normal" name="normal" value="normal" checked/>
        <label htmlFor="normal">Обычная игра</label>
        </div>

        <div>
        <input type="radio" id="free" name="free" value="free" />
        <label htmlFor="free">Свободный режим</label>
        </div>
        
        </div>

    </div>
    )
}

export default Options;