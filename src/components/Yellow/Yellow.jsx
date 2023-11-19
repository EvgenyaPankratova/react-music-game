

import styles from "./Yellow.module.css";

const Yellow = ({colors, activeColor, setAnswer}) => {
    const soundFour = new Audio("sounds_4.ogg");

    (activeColor === 'yellow') && soundFour.play();

    return (<div onClick={(e) => {
        setAnswer(prev => [...prev, e.target.id]);
        soundFour.play();
        }} id="yellow" className={activeColor === 'yellow' ? `${styles.yellow} ${styles.active}` : `${styles.yellow} ${styles.not_active}`}>
        
    </div>
    )
}

export default Yellow;