import './CardBg.css';
import work from "../images/icon-work.svg";
import play from "../images/icon-play.svg";
import study from "../images/icon-study.svg";
import exercise from "../images/icon-exercise.svg";
import social from "../images/icon-social.svg";
import selfCare from "../images/icon-self-care.svg";


function CardBg(props) {
    if (props.title === 'Work') {
        return (
            <div className="card-bg-color">
                <img src={work} alt="svg" />
            </div>
        )
    }
    if (props.title === 'Play') {
        return (
            <div className="card-bg-color">
                <img src={play} alt="svg" />
            </div>
        )
    }
    if (props.title === 'Study') {
        return (
            <div className="card-bg-color">
                <img src={study} alt="svg" />
            </div>
        )
    }
    if (props.title === 'Exercise') {
        return (
            <div className="card-bg-color">
                <img src={exercise} alt="svg" />
            </div>
        )
    }
    if (props.title === 'Social') {
        return (
            <div className="card-bg-color">
                <img src={social} alt="svg" />
            </div>
        )
    }
    if (props.title === 'Self Care') {
        return (
            <div className="card-bg-color">
                <img src={selfCare} alt="svg" />
            </div>
        )
    }
}

export default CardBg;