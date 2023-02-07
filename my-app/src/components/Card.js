import './Card.css'
import CardBg from './CardBg';
import Elipsis from '../images/icon-ellipsis.svg'

function Card(props) {
    const currentTitle = props.title;
    return (
        <div className = 'card'>
            <CardBg title={currentTitle}/>
            <section className="card-info">
                <div className = "title-div">
                    <h2 className='title'>{props.title}</h2>
                    {/* <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/></svg> */}
                    <img src={Elipsis} alt='elipsis'></img>
                </div>
                <div className = 'card-time'>
                    <h1 className='current-time'>{props.currentTime}hrs</h1>
                    <h3 className="previous-time">Last Week - <span className="previous-time">{props.previousTime}</span></h3>
                </div>
            </section>
        </div>
    )
}

export default Card;