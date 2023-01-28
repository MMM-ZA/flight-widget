import { useState } from "react"
import classes from'./TableLetter.module.css'


const TableLetter = ({ letter, index}) => {
    const [flip, setFlip] = useState(false)

    setTimeout(() => {
        setFlip(true)
    }, 100 * index)

    return (
        <div className={classes[flip ? 'flip' : null]}>
            {flip ? letter : null}
        </div>
    )
}

export default TableLetter
