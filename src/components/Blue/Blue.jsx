
import styles from "./Blue.module.css";

const Blue = ({colors, activeColor, setAnswer}) => {

    const soundOne = new Audio("sounds_1.ogg");

    (activeColor === 'blue') && soundOne.play();
    
    return (<div onClick={(e) => {
        setAnswer(prev => [...prev, e.target.id]);
        soundOne.play();
    }
    } id="blue" className={activeColor === 'blue' ? `${styles.blue} ${styles.active}` : `${styles.blue} ${styles.not_active}`}>
        
    </div>
    )
}

export default Blue;