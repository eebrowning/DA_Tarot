
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import "./athletes.css"
import factionData from '../../util/factionData';
import classData from '../../util/classData'

function SingleAthlete(profile) {
    profile = profile.profile;
    let dispatch = useDispatch();
    const athletes = useSelector((state) => Object.values(state.athletes));
    let [name, setName] = useState(profile.name);
    let [location, setLocation] = useState(profile.location);
    let [team, setTeam] = useState(profile.team);
    let [sports, setSports] = useState(profile.sports);
    let [about, setAbout] = useState(profile.about);
    let [avatar, setAvatar] = useState(profile.avatar);
    let [id, setId] = useState(profile._id);

    //if you want a card, have two sections of profile, and a flip animation to transition between the two.
    //front: pic, name, sport, team
    //back: name, team, location, about
    return (
        <div className="outer-profile  hideRight">

            <div id='profile-card' className='profile'>

                <div className='card'>

                    <div className="card-front">
                        <img className="card-img" src={avatar ? avatar : "avatar"} />
                        <div className="front-info">
                            <div id='basic-info'>
                                <p className="name">{name ? name : "<name>"}</p>
                                <p className="sports">{sports ? classData[sports]['general_class'] : "<class name>"}</p>
                            </div>
                            <div className='about-box'>
                                <div className="side-by-side">
                                    <img className="faction-icon" src={team ? factionData[team]['url'] : factionData['Inquisition']['url']} alt='faction emblem' />
                                    <p className="team">{team ? factionData[team]['name'] : "<faction>"}</p>
                                </div>
                                <p className="location">{location ? location : "<location>"}</p>
                            </div>
                        </div >
                    </div>
                    <div className="card-back" >
                        <div className="back-info">
                            <div id='basic-info'>
                                <p className="name">{name ? name : "<name>"}</p>
                                <p className="sports">{sports ? classData[sports]['general_class'] : "<class name>"}</p>
                            </div>
                            <img className="back-img" src={avatar ? avatar : "avatar"} />
                            <div className='about-box'>
                                <div className="side-by-side">
                                    <p className="team">{team ? factionData[team]['name'] : "<faction>"}</p>
                                    <img className="faction-icon" src={team ? factionData[team]['url'] : factionData['Inquisition']['url']} alt='faction emblem' />
                                </div>
                                <p className="location">{location ? location : "<location>"}</p>
                                <p className="about"> {about ? about : "<about>"}</p>
                            </div>
                        </div >

                    </div>
                </div>
            </div>

        </div>
    );
}

export default SingleAthlete;
