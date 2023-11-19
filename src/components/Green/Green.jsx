

import styles from "./Green.module.css";

const Green = ({colors, activeColor, setAnswer}) => {
    const soundTwo = new Audio("sounds_2.ogg");

    (activeColor === 'green') && soundTwo.play();

    return (<div onClick={(e) => {
        setAnswer(prev => [...prev, e.target.id]);
        soundTwo.play();
    }
    } id="green" className={activeColor === 'green' ? `${styles.green} ${styles.active}` : `${styles.green} ${styles.not_active}`}>
        
    </div>
    )
}

export default Green;