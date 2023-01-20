import { set, setDriver } from "mongoose";
import { useEffect, useState } from "react"
import api from "../../api";
import "./form.css"
import Sports from "./Sports";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateAthlete, thunkGetAllAthletes } from "../../store/athletes";
import Part1 from "./Part-1";
import Part2 from "./Part-2";
import Part3 from "./Part-3";


//todo: sports picking up -select sport- as an option.
const AthleteForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [gender, setGender] = useState("");
    const [sports, setSports] = useState("");
    const [birthdate, setBirthdate] = useState();
    const [location, setLocation] = useState("");
    const [about, setAbout] = useState("");
    const [team, setTeam] = useState("");
    const [interests, setInterests] = useState("");
    const [errors, setErrors] = useState([]);

    const [step, setStep] = useState(1)

    useEffect(() => {
        labelErrors();
    }, [errors])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAthlete = { name, birthdate, location, team, gender, sports, about, interests, avatar }
        setErrors([]);
        let response = await dispatch(thunkCreateAthlete(newAthlete));
        console.log(response, 'handle create');

        if (newAthlete !== response) {
            console.log(response, 'some fields right');

            setErrors(response)
        }
        // if (response[0].param.length) {
        //     console.log(response, 'response has errors');

        //     // setErrors([response])
        // }

    }
    ///start data receipt/
    const receivePart1 = async (data) => {
        await setName(data.name)
        await setAvatar(data.avatar)
    }
    const receivePart2 = async (data) => {
        await setSports(data.sports)
        await setGender(data.gender)
        await setBirthdate(data.birthdate)
    }
    const receivePart3 = async (data) => {
        await setLocation(data.location)
        await setAbout(data.about)
        await setTeam(data.team)
        await setInterests(data.interests)
    }
    ////////End Data receipt/
    const labelErrors = () => {
        if (errors.length) {

            errors.forEach(err => {
                let label = document.getElementById(`${err.param}-error`);
                console.log(label, 'blaaah')
                label.innerText = `*`;
                label.style.color = 'red';
            })
        }
    }

    let prev = (e) => {
        e.preventDefault();
        setStep(step - 1)
    }

    let next = (e) => {
        e.preventDefault();
        setStep(step + 1)
    }

    return (
        <section id="athlete-form-box">
            <form id="athlete-form" >

                <h2 id='form-head'>Create a new Athlete:</h2>
                <div id='fields'>

                    <Part1 receivePart1={receivePart1} step={step} />
                    <Part2 receivePart2={receivePart2} step={step} />
                    <Part3 receivePart3={receivePart3} step={step} />
                </div>
                <div id='errors'>
                    <ul id='athlete-errors'>
                        {errors.length > 0 && errors.map((error) => <li style={{ color: 'red' }} key={error.param + error.msg}>{error.msg}</li>)}
                    </ul>
                </div>
                <div id='buttons'>
                    <button style={{ display: step > 1 ? "block" : "none" }} onClick={prev}>Previous</button>
                    <button style={{ display: step < 3 ? "block" : "none" }} onClick={next}>Next</button>
                    <button style={{ display: step === 3 ? "block" : "none" }} onClick={handleSubmit} >Submit Athlete</button>
                </div>
            </form>

        </section>
    )

}

export default AthleteForm;
