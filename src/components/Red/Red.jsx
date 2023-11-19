
import styles from "./Red.module.css";

const Red = ({colors, activeColor, setAnswer}) => {
    const soundThree = new Audio("sounds_3.ogg");

    (activeColor === 'red') && soundThree.play();

    return (<div onClick={(e) => {
        setAnswer(prev => [...prev, e.target.id]);
        soundThree.play();

    }} id="red" className={activeColor === 'red' ? `${styles.red} ${styles.active}` : `${styles.red} ${styles.not_active}`}>
        
    </div>
    )
}

export default Red;