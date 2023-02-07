
import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import api from "../../api";
import { thunkDeleteAthlete } from "../../store/athletes";
import "./athletes.css"



function SingleAthlete(profile) {
    profile = profile.profile;
    let dispatch = useDispatch();
    const athletes = useSelector((state) => Object.values(state.athletes));
    let [name, setName] = useState(profile.name);
    let [birthdate, setBirthdate] = useState(profile.birthdate);
    let [location, setLocation] = useState(profile.location);
    let [team, setTeam] = useState(profile.team);
    let [gender, setGender] = useState(profile.gender);
    let [sports, setSports] = useState(profile.sports);
    let [about, setAbout] = useState(profile.about);
    let [interests, setInterests] = useState(profile.interests);
    let [avatar, setAvatar] = useState(profile.avatar);
    let [id, setId] = useState(profile._id);


    const handleDelete = async (e) => {
        e.preventDefault();
        // console.log(e.target.id, 'should be ath id')
        dispatch(thunkDeleteAthlete(e.target.id))

    }
    //if you want a card, have two sections of profile, and a flip animation to transition between the two.
    //front: pic, name, sport, team
    //back: name, team, location, about
    return (
        <div className="outer-profile">

            <div id='profile-card' className='profile'>
                <div className='card'>

                    <div className="card-front">
                        <img className="card-img" src={avatar} />
                        <div className="front-info">
                            <div id='basic-info'>
                                {/* <p className="name">Name: {name}</p>
                                <p className="sports">Sport: {sports}</p> */}
                                <p className="name">{name}</p>
                                <p className="sports">{sports}</p>
                            </div>
                            <div id='about'>
                                {/* <p className="location">Location: {location}</p>
                                <p className="team">Team: {team}</p> */}
                                <p className="team">{team}</p>
                                <p className="location">{location}</p>
                            </div>
                        </div >
                    </div>
                    <div className="card-back" >
                        <div className="back-info">
                            <div id='basic-info'>
                                <p className="team">Team: {team}</p>
                                <p className="name">Name: {name}</p>
                                <p className="location">Location: {location}</p>
                            </div>
                            <img className="back-img" src={avatar} />
                            <div id='about'>
                                <p className="birthdate">Birthdate: {birthdate}</p>
                                <p className="gender">Gender: {gender}</p>
                                <p className="sports">Sports: {sports}</p>
                                <>About:<p className="about"> {about}</p></>
                                {/* <p className="interests">Interests: {interests}</p> */}
                            </div>
                        </div >
                    </div>
                </div>
            </div>
            <button className="delete-button" id={id} onClick={handleDelete} >Delete Athlete </button>

        </div>
    );
}

export default SingleAthlete;
