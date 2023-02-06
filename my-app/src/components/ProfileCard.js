import './ProfileCard.css';
import profile from '../images/image-jeremy.png'

function ProfileCard() {
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
                <button className='daily'>Daily</button>
                <button className='weekly'>Weekly</button>
                <button className='monthly'>Monthly</button>
            </section>
        </div>
    )
}

export default ProfileCard;