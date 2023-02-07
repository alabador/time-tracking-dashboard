import Data from '../data.json';
import Card from './Card';
import './CardList.css'

function CardList({data}) {
    return (
        <div className='cardlist'>
            {data.map(task => {
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