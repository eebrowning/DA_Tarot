import { set, setDriver } from "mongoose";
import { useEffect, useState } from "react"
import api from "../../api";
import "./form.css"
import Sports from "./Sports";

const AthleteForm = () => {

    let [name, setName] = useState();
    let [birthdate, setBirthdate] = useState();
    let [location, setLocation] = useState();
    let [team, setTeam] = useState();
    let [gender, setGender] = useState();
    let [sports, setSports] = useState();
    let [about, setAbout] = useState();
    let [interests, setInterests] = useState();
    let [avatar, setAvatar] = useState();
    const [errors, setErrors] = useState([])

    let sportsArr = [
        'Golf', 'Tennis', 'Cricket', 'Basketball', 'Baseball', 'American Football', 'Aquatics', 'Archery', 'Automobile Racing', 'Badminton', 'Beach Volleyball', 'Bobsleigh', 'Body Building', 'Boxing', 'Cross Country Running', 'Cross Country Skiing', 'Curling', 'Cycling', 'Darts', 'Decathlon', 'Down Hill Skiing', 'Equestrianism', 'eSports', 'Fencing', 'Field Hockey', 'Figure Skating', 'Gymnastics', 'Ice Hockey', 'Martial Arts', 'Mixed Martial Arts', 'Modern Pentathlon', 'Motorcycle Racing', 'Netball', 'Polo', 'Racquetball', 'Rowing', 'Rugby', 'Sailing', 'Softball', 'Shooting', 'Skateboarding', 'Skeet Shooting', 'Skeleton', 'Snow Boarding', 'Soccer (Football)', 'Squash', 'Surfing', 'Swimming', 'Track and Field'
    ]


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAthlete = { name, birthdate, location, team, gender, sports, about, interests, avatar }
        setErrors([]);

        try {
            let response = await api.insertProfile(newAthlete)

        } catch (err) {
            // Handle error
            console.log(err);
            setErrors([err])

        }

        console.log(errors)
    }


    //page1: name, sport, gender, dob

    //page2: About= description, location, team

    //page3 Summary= sample of profile info, edit option here

    return (
        <section id="place-form-box">
            <form id="place-form" onSubmit={handleSubmit}>

                <h2>Create a new Athlete:</h2>
                <input
                    name='Image'
                    placeholder='Image in jpg / jpeg format'
                    // value={imageURL}
                    onChange={e => setAvatar(e.target.value)}
                />
                <div className="about-form">
                    <input
                        required
                        name="name"
                        placeholder="Athlete name"
                        type="string"
                        // value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {/* <input
                        required
                        name='sports'
                        placeholder="Athlete's Sport(s)"
                        // value={address}
                        onChange={e => setSports(e.target.value)}
                    /> */}
                    <select id='sports-select' onChange={e => setSports(e.target.value)}>
                        <option>-Select Sport-</option>

                        {
                            sportsArr.map(sport => (
                                <option>{sport}</option>
                            ))
                        }
                    </select>
                    {/* <Sports sports={sports}/> */}
                    <select onChange={e => setGender(e.target.value)} id='gender-select' >
                        <option>-Select Gender-</option>

                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>

                    </select>
                    <input
                        required
                        name='birthdate'
                        placeholder="Athlete's birthdate"
                        type='date'
                        // value={address}
                        onChange={e => setBirthdate(e.target.value)}
                    />
                </div>

                < div className="about-form" >

                    <input
                        name='about'
                        placeholder='about'
                        // value={imageURL}
                        onChange={e => setAbout(e.target.value)}
                    />
                    <input
                        name='interests'
                        placeholder='interests'
                        // value={imageURL}
                        onChange={e => setInterests(e.target.value)}
                    />
                    <input
                        required
                        name="location"
                        placeholder="Athlete location"
                        type="string"
                        // value={name}
                        onChange={e => setLocation(e.target.value)}
                    />
                    <input
                        required
                        name='team'
                        placeholder="Athlete's Team"
                        // value={address}
                        onChange={e => setTeam(e.target.value)}
                    />
                </div>

                <div>
                    <ul>
                        {errors.length > 0 && errors.map((error) => <li key={error.code}>{error.message}</li>)}
                    </ul>
                    <button>Submit Athlete</button>
                </div>
            </form>

        </section>
    )

}

export default AthleteForm;
