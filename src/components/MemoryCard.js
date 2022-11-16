import './MemoryCard.css'
import { useState } from 'react'

const MemoryCard = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const clickHandler = () => {
        if(!isFlipped){
            setIsFlipped(true)
        }else{
            setIsFlipped(false) 
        }

    }
    return ( 
        <div className='MemoryCard' onClick={ clickHandler }>
        <div className={ isFlipped ? 'MemoryCardInner flipped' : 'MemoryCardInner'}>
            <div className="MemoryCardBack">
                <img className='logo' src="https://www.digitalcrafts.com/media/Default/assets/logos/dc-logo.svg" alt="" />
            </div>
            <div className='MemoryCardFront'>
                YOO
            </div>
        </div>

        </div>
     );
}
 
export default MemoryCard;