import { set, setDriver } from "mongoose";
import { useEffect, useState } from "react"
import api from "../../api";

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

        // let response = await api.insertProfile(newAthlete)
        //     .catch(async (res) => {
        //         const data = await res;
        //         console.log(data, 'err')
        //         setErrors(data)

        //     });

        console.log(errors)
    }


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
                    <input
                        required
                        name='sports'
                        placeholder="Athlete's Sport(s)"
                        // value={address}
                        onChange={e => setSports(e.target.value)}
                    />
                    <input
                        required
                        name="gender"
                        placeholder="Athlete gender"
                        type="string"
                        // value={name}
                        onChange={e => setGender(e.target.value)}
                    />
                    <input
                        required
                        name='birthdate'
                        placeholder="Athlete's birthdate"
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
