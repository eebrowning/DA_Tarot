
import axios from "axios";
import { useEffect, useState } from "react"
import api from "../../api";
import "./athletes.css"



function SingleAthlete(profile) {
    profile = profile.profile;
    let [name, setName] = useState(profile.name);
    let [birthdate, setBirthdate] = useState(profile.birthdate);
    let [location, setLocation] = useState(profile.location);
    let [team, setTeam] = useState(profile.team);
    let [gender, setGender] = useState(profile.gender);
    let [sports, setSports] = useState(profile.sports);
    let [about, setAbout] = useState(profile.about);
    let [interests, setInterests] = useState(profile.interests);
    let [avatar, setAvatar] = useState(profile.avatar);


    // let data;

    console.log(profile, 'in single')

    useEffect(() => {
        // async function fetchData() {
        //     let response = await api.getAllProfiles()
        //     data = response.data.data.profiles;
        //     setProfiles(data);
        //     return response;
        // }
        // fetchData();
        // // console.log(data, 'data', profiles)
    }, [])



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

        </div>

    );
}

export default SingleAthlete;
