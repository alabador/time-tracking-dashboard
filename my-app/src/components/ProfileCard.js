import './ProfileCard.css';
import profile from '../images/image-jeremy.png'
import { useState } from 'react';

function ProfileCard({time, func}) {

    //passes prop to parent
    function dailyClicked() {
        func('daily');
    }

    function weeklyClicked() {
        func('weekly');
    }
    function monthlyClicked() {
        func('monthly');
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
                <button className='daily' onClick={dailyClicked}>Daily</button>
                <button className='weekly' onClick={weeklyClicked}>Weekly</button>
                <button className='monthly' onClick={monthlyClicked}>Monthly</button>
            </section>
        </div>
    )
}

export default ProfileCard;