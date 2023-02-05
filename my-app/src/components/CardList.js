import Data from '../data.json';
import Card from './Card';
import './CardList.css'

function CardList() {
    return (
        <div className='cardlist'>
            {Data.map(task => {
                return(
                    <Card 
                    title={task.title}
                    currentTime = {task.timeframes.daily.current}
                    previousTime = {task.timeframes.daily.previous}
                    />
                )
            })}
        </div>
    )
}

export default CardList;