
import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import api from "../../api";
import { thunkDeleteAthlete } from "../../store/athletes";
import "./athletes.css"



function SingleAthlete(profile) {
    profile = profile.profile;
    let dispatch = useDispatch();
    const athletes = useSelector((state) => Object.values(state.athletesReducer));
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
        console.log(e.target.id, 'should be ath id')
        dispatch(thunkDeleteAthlete(e.target.id))

    }

    return (

        <div className='profile' >
            <img src={avatar} />
            <div id='basic-info'>
                <p>Name: {name}</p>
                <p>Sports: {sports}</p>
                <p>Gender: {gender}</p>
                <p>Birthdate: {birthdate}</p>
            </div>
            <div id='about'>
                <p>Location: {location}</p>
                <p>Team: {team}</p>
                <p>About: {about}</p>
                <p>Interests: {interests}</p>
            </div>
            <button id={id} onClick={handleDelete} >Delete Athlete </button>
        </div>

    );
}

export default SingleAthlete;
