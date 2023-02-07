import './ProfileCard.css';
import profile from '../images/image-jeremy.png'

function ProfileCard() {
    function handleClick() {
        console.log('clicked!')
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
                <button className='daily' onClick={handleClick}>Daily</button>
                <button className='weekly' onClick={handleClick}>Weekly</button>
                <button className='monthly' onClick={handleClick}>Monthly</button>
            </section>
        </div>
    )
}

export default ProfileCard;