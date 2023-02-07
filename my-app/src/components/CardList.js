import Data from '../data.json';
import Card from './Card';
import './CardList.css'

function CardList({data, time}) {
    return (
        <div className='cardlist'>
            {data.map(task => {
                if(time === 'daily') {
                    return(
                        <Card 
                        title={task.title}
                        currentTime = {task.timeframes.daily.current}
                        previousTime = {task.timeframes.daily.previous}
                        timeframe = 'Yesterday - '
                        />
                    )
                }
                else if (time === 'weekly') {
                    return(
                        <Card 
                        title={task.title}
                        currentTime = {task.timeframes.weekly.current}
                        previousTime = {task.timeframes.weekly.previous}
                        timeframe = 'Last Week - '
                        />
                    )
                }
                else {
                    return(
                        <Card 
                        title={task.title}
                        currentTime = {task.timeframes.monthly.current}
                        previousTime = {task.timeframes.monthly.previous}
                        timeframe = 'Last Month - '
                        />
                    )
                }
            })}
        </div>
    )
}

export default CardList;