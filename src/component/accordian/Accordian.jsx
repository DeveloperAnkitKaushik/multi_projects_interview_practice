import { useState } from 'react';
import styles from './index.module.css';
import Data from "./data";
import { FaPlusCircle,FaMinusCircle  } from "react-icons/fa";

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const handleSingle = (id) => {
        id === selected ? setSelected(null): setSelected(id);
    }
    return (
        <div className={styles.container}>
            <div className="maincontainer">
                <h1 className={styles.heaidng}>Accordion</h1>
                {Data && Data.length > 0 && (
                    <div className={styles.innercontainer}>
                        {Data.map((dataItem) => (
                            <div className={styles.accordiancontainer} key={dataItem.id} onClick={() => handleSingle(dataItem.id)}>
                                <div className={styles.sign}>{selected === dataItem.id ? <FaMinusCircle/> : <FaPlusCircle/>}</div>
                                <h1>{dataItem.question}</h1>
                                {
                                    selected === dataItem.id && (
                                        <h2>{dataItem.answer}</h2>
                                    )
                                }
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Accordian