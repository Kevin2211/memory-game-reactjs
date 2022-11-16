import './MemoryCard.css'
import { useState } from 'react'

const MemoryCard = (props) => {
    const [isFlippedLocal, setIsFlipped] = useState(props.isFlipped)
    const clickHandler = () => {
        if(!isFlippedLocal){
            setIsFlipped(true)
        }else{
            setIsFlipped(false) 
        }

    }
    return ( 
        <div className='MemoryCard' onClick={ clickHandler }>
        <div className={ isFlippedLocal ? 'MemoryCardInner flipped' : 'MemoryCardInner'}>
            <div className="MemoryCardBack">
                <img className='logo' src="https://www.digitalcrafts.com/media/Default/assets/logos/dc-logo.svg" alt="" />
            </div>
            <div className='MemoryCardFront'>
                {props.symbol}
            </div>
        </div>

        </div>
     );
}
 
export default MemoryCard;