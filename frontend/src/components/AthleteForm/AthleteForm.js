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
        bootSubmit();
        labelErrors();
    }, [errors])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAthlete = { name, birthdate, location, team, gender, sports, about, interests, avatar }
        setErrors([]);
        let response = await dispatch(thunkCreateAthlete(newAthlete));

        if (newAthlete !== response) {
            setErrors(response)
        }

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
                // console.log(err, 'error looking for info')
                let label = document.getElementById(`${err.param}-error`);
                label.innerText = `* ${err.msg}`;
                label.style.color = 'red';
            })
        }
        if (!errors.length) {
            let labels = document.querySelectorAll("label label")
            labels.forEach(label => {
                label.innerText = "";
            })
        }
    }

    let prev = (e) => {
        e.preventDefault();
        setStep(step - 1)
    }

    let next = (e) => {
        e.preventDefault();
        bootSubmit();
        let good = true;
        const form = document.querySelectorAll('.needs-validation')[0];
        const inputVal = document.querySelectorAll(`.part-${step} .boot-data`)

        Array.from(inputVal).forEach(input => {
            if (!input.checkValidity()) {
                // console.log(input, 'bad input in next')
                good = false;

            }
            form.classList.add('was-validated')
        })

        if (!good) {
            form.classList.add('was-validated')
        } else {
            form.classList.remove('was-validated')
            setStep(step + 1);
        }
    }
    /////////////Bootstrap validation
    let bootSubmit = () => {
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    // console.log(form, 'form in bootsubmit')
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated')
            }, false)
        })

    }
    ///////////end bootstrap validation


    return (
        <section id="athlete-form-box">

            <form id="athlete-form" className="needs-validation" onSubmit={handleSubmit} noValidate>

                <h2 id='form-head'>Create a new Athlete:</h2>
                <div id='fields'>
                    <Part1 receivePart1={receivePart1} step={step} />
                    <Part2 receivePart2={receivePart2} step={step} />
                    <Part3 receivePart3={receivePart3} step={step} />
                </div>
                {/* {errors && ( */}

                <div id='errors' style={{ display: errors.length ? 'flex' : 'none' }}>
                    <ul id='athlete-errors'>
                        <p>Check form for the following errors:</p>
                        {errors.length > 3 && (`There are ${errors.length} errors: review your submission.`)}
                        {errors.length > 0 && errors.length < 4 && errors.map((error) => <li style={{ color: 'red' }} key={error.param + error.msg}>{error.msg}</li>)}
                    </ul>
                </div>

                {/* )} */}
                <div id='buttons'>
                    <button style={{ display: step > 1 ? "block" : "none" }} onClick={prev}>Previous</button>
                    <button className="btn btn-primary" type="submit" style={{ display: step < 3 ? "block" : "none" }} onClick={next}>Next</button>
                    <button className="btn btn-primary" type='submit' style={{ display: step === 3 ? "block" : "none" }} onClick={bootSubmit} >Submit Athlete</button>
                </div>
            </form>

        </section>
    )

}

export default AthleteForm;
