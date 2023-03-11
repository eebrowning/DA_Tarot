import { set, setDriver } from "mongoose";
import { useEffect, useState } from "react"
import api from "../../api";
import "./Styles/form.css"
import Sports from "./Sports";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateAthlete, thunkGetAllAthletes } from "../../store/athletes";
// import Part1 from "./Part-1";
import Part2 from "./Parts/Part-2";
import Part3 from "./Parts/Part-3";
import Part4 from "./Parts/Part-4";
import Part5 from "./Parts/Part-5";
import SingleAthlete from './../Athletes/SingleAthlete'
import factionData from "../../util/factionData";
import classData from '../../util/classData'



//todo: sports picking up -select sport- as an option.
const AthleteForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [avatarFile, setAvatarFile] = useState("");
    const [gender, setGender] = useState("");
    const [race, setRace] = useState('')
    const [sports, setSports] = useState("");
    const [birthdate, setBirthdate] = useState();
    const [location, setLocation] = useState("");
    const [about, setAbout] = useState("");
    const [team, setTeam] = useState("");
    const [interests, setInterests] = useState("");
    const [errors, setErrors] = useState([]);
    // const [step, setStep] = useState(2)
    const [step, setStep] = useState(4); //todo temporary while styling

    const user = useSelector((state) => state.session.user)

    useEffect(() => {
        bootSubmit();
        labelErrors();
    }, [errors])

    useEffect(() => {
        if (step == 2 && document.querySelector('.prev-2')) {
            document.getElementsByClassName('form-phase')[0].innerText = "Select Race";
            document.querySelector('.prev-2').addEventListener("mousedown", () => document.querySelector('.prev-2').classList.add('click'))
            document.querySelector('.prev-2').addEventListener("mouseup", () => document.querySelector('.prev-2').classList.remove('click'))
            document.querySelector('.next-2').addEventListener("mousedown", () => document.querySelector('.next-2').classList.add('click'))
            document.querySelector('.next-2').addEventListener("mouseup", () => document.querySelector('.next-2').classList.remove('click'))
        } else if (document.querySelector('.prev-2')) {
            document.querySelector('.prev-2').removeEventListener("mousedown", () => document.querySelector('.prev-2').classList.add('click'))
            document.querySelector('.prev-2').removeEventListener("mouseup", () => document.querySelector('.prev-2').classList.remove('click'))
            document.querySelector('.next-2').removeEventListener("mousedown", () => document.querySelector('.next-2').classList.add('click'))
            document.querySelector('.next-2').removeEventListener("mouseup", () => document.querySelector('.next-2').classList.remove('click'))
        }
        if (step == 3 && document.querySelector('.prev-3')) {
            document.getElementsByClassName('form-phase')[0].innerText = "Select Class";
            document.querySelector('.prev-3').addEventListener("mousedown", () => document.querySelector('.prev-3').classList.add('click'))
            document.querySelector('.prev-3').addEventListener("mouseup", () => document.querySelector('.prev-3').classList.remove('click'))
            document.querySelector('.next-3').addEventListener("mousedown", () => document.querySelector('.next-3').classList.add('click'))
            document.querySelector('.next-3').addEventListener("mouseup", () => document.querySelector('.next-3').classList.remove('click'))
        } else if (document.querySelector('.prev-3')) {
            document.querySelector('.prev-3').removeEventListener("mousedown", () => document.querySelector('.prev-3').classList.add('click'))
            document.querySelector('.prev-3').removeEventListener("mouseup", () => document.querySelector('.prev-3').classList.remove('click'))
            document.querySelector('.next-3').removeEventListener("mousedown", () => document.querySelector('.next-3').classList.add('click'))
            document.querySelector('.next-3').removeEventListener("mouseup", () => document.querySelector('.next-3').classList.remove('click'))
        }
        if (step == 4) {
            document.getElementsByClassName('form-phase')[0].innerText = "Name and Avatar";

        }
        if (step == 5) {
            document.getElementsByClassName('form-phase')[0].innerText = "Misc. Details";
        }
    }, [step])


    const handleSubmit = async (e) => {
        e.preventDefault();
        // const newAthlete = { user: user.id, name, birthdate, location, team, gender, sports, about, interests, avatar }
        const newAthlete = {
            "user": user.id,
            "name": name,
            "birthdate": birthdate,
            "location": location,
            "team": team,
            "gender": gender,
            "sports": sports,
            "about": about,
            "interests": interests,
            "avatar": avatar
        }
        // console.log('newathlete', newAthlete)
        const athleteData = new FormData();
        if (avatarFile) { athleteData.append('avatarFile', avatarFile) }
        ///Idea: on submit, use route for AWS upload, get URL from response and setAvatar(URL), THEN dispatch to thunkCreateAthlete(newAthlete)
        setErrors([]);
        let response = await dispatch(thunkCreateAthlete(newAthlete));

        // for (let data in newAthlete) {
        //     // console.log('looping through athlete object', data, newAthlete[data])
        //     athleteData.append(`${data}`, newAthlete[data])
        // }
        // let response = await dispatch(thunkCreateAthlete(athleteData));
        // for (var pair of athleteData.entries()) {
        //     console.log(`${pair[0]}: ${pair[1]}`);
        // }

        console.log(response, 'response ')
        if (newAthlete !== response) {
            setErrors(response)
        }

    }
    ///start data receipt/
    // const receivePart1 = async (data) => {
    //     await setName(data.name)
    //     await setAvatar(data.avatar)
    // }
    const receivePart2 = async (data) => {
        await setGender(data.gender)
        await setRace(data.race)
    }
    const receivePart3 = async (data) => {
        await setSports(data.sports)
        await setBirthdate(data.birthdate)
    }
    const receivePart4 = async (data) => {
        await setName(data.name)
        await setAvatar(data.avatar)
    }
    const receivePart5 = async (data) => {
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
        const inputVal = document.querySelectorAll(`.part-${step} .boot-data`);

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
                <div id='menu-header'>
                    <img src='https://cdn.dragonagekeep.com/bundles/eabwedahub/images/ui_new/world_states/slot-banner.png' />
                    <h2>Character Creation {">"} <strong className="form-phase">Stage {step}</strong></h2>
                </div>
                <div id='buttons'>
                    <div>
                        <button style={{ display: step > 2 ? "block" : "none" }} onClick={prev}>Previous</button>
                        <button className="btn btn-primary" type="submit" style={{ display: step < 5 ? "block" : "none" }} onClick={next}>Next</button>
                        <button className="btn btn-primary" type='submit' style={{ display: step === 5 ? "block" : "none" }} onClick={bootSubmit} >Submit Athlete</button>
                    </div>
                </div>

                <Part2 receivePart2={receivePart2} step={step} />
                <Part3 receivePart3={receivePart3} step={step} race={race ? race : undefined} />
                <div id='fields-container'>
                    <div id='fields'>
                        <Part4 receivePart4={receivePart4} step={step} />
                        <Part5 receivePart5={receivePart5} step={step} />
                    </div>
                    {(step == 4 || step == 5) && (<div className="preview">
                        <div id='profile-card' className='profile test-avatar'>
                            <h2>Preview:</h2>

                            <SingleAthlete profile={{
                                name,
                                location,
                                team,
                                gender,
                                sports,
                                about,
                                avatar
                            }} />
                        </div>

                    </div>)}


                </div>

                <div id='errors' style={{ display: errors.length ? 'flex' : 'none' }}>
                    <ul id='athlete-errors'>
                        <p>Check form for the following errors:</p>
                        {errors.length > 3 && (`There are ${errors.length} errors: review your submission.`)}
                        {errors.length > 0 && errors.length < 4 && errors.map((error) => <li style={{ color: 'red' }} key={error.param + error.msg}>{error.msg}</li>)}
                    </ul>
                </div>



            </form>

        </section>
    )

}

export default AthleteForm;
