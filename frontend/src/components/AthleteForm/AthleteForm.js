import { set, setDriver } from "mongoose";
import { useEffect, useState } from "react"
import api from "../../api";
import "./form.css"
import Sports from "./Sports";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateAthlete, thunkGetAllAthletes } from "../../store/athletes";


//todo: sports picking up -select sport- as an option.
const AthleteForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [birthdate, setBirthdate] = useState();
    const [location, setLocation] = useState();
    const [team, setTeam] = useState();
    const [gender, setGender] = useState();
    const [sports, setSports] = useState();
    const [about, setAbout] = useState();
    const [interests, setInterests] = useState();
    const [avatar, setAvatar] = useState();
    const [errors, setErrors] = useState([])

    let sportsArr = [
        'Golf', 'Tennis', 'Cricket', 'Basketball', 'Baseball', 'American Football', 'Aquatics', 'Archery', 'Automobile Racing', 'Badminton', 'Beach Volleyball', 'Bobsleigh', 'Body Building', 'Boxing', 'Cross Country Running', 'Cross Country Skiing', 'Curling', 'Cycling', 'Darts', 'Decathlon', 'Down Hill Skiing', 'Equestrianism', 'eSports', 'Fencing', 'Field Hockey', 'Figure Skating', 'Gymnastics', 'Ice Hockey', 'Martial Arts', 'Mixed Martial Arts', 'Modern Pentathlon', 'Motorcycle Racing', 'Netball', 'Polo', 'Racquetball', 'Rowing', 'Rugby', 'Sailing', 'Softball', 'Shooting', 'Skateboarding', 'Skeet Shooting', 'Skeleton', 'Snow Boarding', 'Soccer (Football)', 'Squash', 'Surfing', 'Swimming', 'Track and Field'
    ]

    useEffect(() => {
        labelErrors();
    }, [errors])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAthlete = { name, birthdate, location, team, gender, sports, about, interests, avatar }
        setErrors([]);
        let response = await dispatch(thunkCreateAthlete(newAthlete));
        // console.log(response, 'handle create');
        if (newAthlete.birthdate !== response.birthdate) {
            setErrors(response)
        }
    }

    const labelErrors = () => {
        errors.forEach(err => {
            let label = document.getElementById(`${err.param}-error`)
            // label.innerText = `*${err.msg}`
            label.innerText = `*`
            label.style.color = 'red'
        })
    }

    return (
        <section id="athlete-form-box">
            <form id="athlete-form" onSubmit={handleSubmit}>

                <h2>Create a new Athlete:</h2>
                < div className="part-1" >
                    <label for="avatar">Avatar link</label>
                    <label id='avatar-error' for="avatar"></label>
                    <input
                        name='avatar'
                        placeholder='Image link in jpg / jpeg format'
                        // value={imageURL}
                        onChange={e => setAvatar(e.target.value)}
                    />

                    <label for="name">Athlete name</label>
                    <label id='name-error' for="name"></label>
                    <input
                        required
                        name="name"
                        placeholder="Athlete name"
                        type="string"
                        // value={name}
                        onChange={e => setName(e.target.value)}
                    />


                </div>
                <div className="part-2">
                    <label for="sports">Sport
                        <label id='sports-error' for="sports"></label>
                        <select name='sports' id='sports-select' onChange={e => setSports(e.target.value)}>
                            <option>-Select Sport-</option>

                            {
                                sportsArr.map(sport => (
                                    <option key={sport}>{sport}</option>
                                ))
                            }
                        </select>
                    </label>
                    <label for="gender-select">Gender
                        <label id='gender-select-error' for="gender-select"></label>
                        <select onChange={e => setGender(e.target.value)} id='gender-select' >
                            <option>-Select Gender-</option>

                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>

                        </select>
                    </label>
                    <label for="birthdate">Birthdate
                        <label id='birthdate-error' for="birthdate"></label>
                        <input
                            required
                            name='birthdate'
                            placeholder="Athlete's birthdate"
                            type='date'
                            // value={address}
                            onChange={e => setBirthdate(e.target.value)}
                        />
                    </label>
                </div>
                < div className="part-3" >
                    <label for="about">About Summary
                        <label id='about-error' for="about"></label>
                        <textarea
                            name='about'
                            placeholder='about'
                            // value={imageURL}
                            onChange={e => setAbout(e.target.value)}
                        />
                    </label>

                    <label for="interests">Interests
                        <label id='interests-error' for="interests"></label>
                        <textarea
                            name='interests'
                            placeholder='interests'
                            // value={imageURL}
                            onChange={e => setInterests(e.target.value)}
                        />
                    </label>

                    <label for="location">Location
                        <label id='location-error' for="location"></label>
                        <input
                            required
                            name="location"
                            placeholder="Athlete location"
                            type="string"
                            // value={name}
                            onChange={e => setLocation(e.target.value)}
                        />
                    </label>

                    <label for="team">Team
                        <label id='team-error' for="team"></label>
                        <input
                            required
                            name='team'
                            placeholder="Athlete's Team"
                            // value={address}
                            onChange={e => setTeam(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <ul id='athlete-errors'>
                        {errors.length > 0 && errors.map((error) => <li style={{ color: 'red' }} key={error.msg}>{error.msg}</li>)}
                        {/* {console.log(errors)} */}
                        {/* <div className="content" dangerouslySetInnerHTML={{ __html: errors }}></div> */}
                    </ul>
                    <button>Submit Athlete</button>
                </div>
            </form>

        </section>
    )

}

export default AthleteForm;
