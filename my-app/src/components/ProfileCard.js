import './ProfileCard.css';
import profile from '../images/image-jeremy.png'
import { useState } from 'react';

function ProfileCard({time, func}) {

    const [dailyActive, setDailyActive] = useState(true);
    const [weeklyActive, setWeeklyActive] = useState(false);
    const [monthlyActive, setMonthlyActive] = useState(false);


    //set current button to active
    //check if other buttons are active, if so then inactive

    //passes prop to parent
    function dailyClicked() {
        func('daily');
        setDailyActive(true)
        setWeeklyActive(false)
        setMonthlyActive(false)
    }

    function weeklyClicked() {
        func('weekly');
        setDailyActive(false)
        setWeeklyActive(true)
        setMonthlyActive(false)
    }
    function monthlyClicked() {
        func('monthly');
        setDailyActive(false)
        setWeeklyActive(false)
        setMonthlyActive(true)
    }

    return(
        <div className="profile-card">
            <section className='profile-section'>
                <img src={profile} alt="profile pic"></img>
                <div className='profile-info'>
                    <h2 className="report-for">Report for</h2>
                    <h1 className='profile-name'>Jeremy Robson</h1>
                </div>
            </section>
            <section className='timeline-section'>
                <button className={`daily ${dailyActive ? "active" : "inactive"}`} onClick={dailyClicked}>Daily</button>
                <button className={`weekly ${weeklyActive ? "active" : "inactive"}`} onClick={weeklyClicked}>Weekly</button>
                <button className={`monthly ${monthlyActive ? "active" : "inactive"}`} onClick={monthlyClicked}>Monthly</button>
            </section>
        </div>
    )
}

export default ProfileCard;