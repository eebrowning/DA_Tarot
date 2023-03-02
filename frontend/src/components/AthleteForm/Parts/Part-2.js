
import { useEffect, useState } from "react";
import '../Styles/part-2.css'

import raceData from '../../../util/raceData'
import moveToSelectedRedux from "../../../util/move2";

const Part2 = ({ receivePart2, step }) => {
    let raceValues = Object.values(raceData);
    const [gender, setGender] = useState("Male");
    const [race, setRace] = useState('Human')
    //some wiggle room with my carousel: allows me to pick starting point
    const carouselLabels = ["selectedPart2", 'nextPart2', 'nextRightSecondPart2', 'hideRightPart2', 'hideRightPart2'];


    useEffect(() => {
        receivePart2({ gender, race })

        if (gender === 'Female') {
            document.querySelector('#female-gender').classList?.replace('gender-bottom', 'gender-top')
            document.querySelector('#male-gender').classList?.replace('gender-top', 'gender-bottom')

        } else if (gender === 'Male') {
            document.querySelector('#male-gender').classList?.replace('gender-bottom', 'gender-top')
            document.querySelector('#female-gender').classList?.replace('gender-top', 'gender-bottom')
        }



    }, [gender, race])

    useEffect(() => {
        // setCarouselCards(document.getElementById("race-select").children)
        handleLabels();
        document.querySelector('.prev-2').style.opacity = '0';//cheeky fix
        document.querySelector(".selectedPart2")?.classList.remove('.selectedPart2')

    }, [])


    let handleLabels = () => {
        for (let i = 0; i < carouselLabels.length; i++) {
            document.getElementsByClassName('race')[i]?.classList.remove('hideRightPart2')
            document.getElementsByClassName('race')[i]?.classList.add(carouselLabels[i])
        }
    }
    let handleClickLeft = (e) => {
        e.preventDefault();
        moveToSelectedRedux('prev', 'Part2')
        setRace(document.querySelector('.selectedPart2')?.firstChild.id)

    }
    let handleClickRight = (e) => {

        e.preventDefault();
        moveToSelectedRedux('next', 'Part2')
        setRace(document.querySelector('.selectedPart2')?.firstChild.id)

    }
    const handleSelectGender = (e) => {
        e.preventDefault();
        console.log(e.target.id, 'boo')
        document.getElementById(e.target.id).previousSibling.checked = 'true'
        setGender(e.target.id)
    }
    // (
    //     <div className={`form-check form-check-inline`} key={"team"}>
    //         <input defaultChecked onChange={() => setGender("Male")} type='radio' className="form-check-input " name="inlineRadioOptions" value="Male" id={`inlineRadio${1}`} />
    //         <img id={"team"} className='faction-icon' src={'https://i.imgur.com/JPzJ0nS.png'} onClick={""} />
    //         <p>Male</p>
    //     </div>
    // )


    return (<div style={{ display: step === 2 ? 'flex' : "none" }} className="part-2 bootPart">
        <div id='race-and-gender' style={{ display: 'block' }}>
            <label htmlFor="gender-select" id='gender-select' className="form-label race-label" style={{ display: 'flex' }}>
                <div>
                    Select:
                </div>
                <div className={`form-check form-check-inline gender-input`} key={"male"}>
                    <div className="side-by-side">
                        <input defaultChecked onChange={() => setGender("Male")} type='radio' className="form-check-input " name="inlineRadioOptions" value="Male" id={`inlineRadio${1}`} />
                        <img id='Male' className='gender-icon' src={'https://i.imgur.com/JPzJ0nS.png'} onClick={handleSelectGender} />
                        Male</div>
                </div>
                <div className={`form-check form-check-inline gender-input`} key={"female"}>
                    <div className="side-by-side">
                        <input onChange={() => setGender("Female")} type='radio' className="form-check-input " name="inlineRadioOptions" value="Female" id={`inlineRadio${1}`} />
                        <img id='Female' className='gender-icon' src={'https://i.imgur.com/z7sksQe.png'} onClick={handleSelectGender} />
                        Female</div>
                </div>
                <label id='gender-error' htmlFor="gender-select"></label>
            </label>

            <label htmlFor="race-select" className="form-label" style={{ display: 'flex' }}>
                <div id='race-select'>
                    <div id="race-gallery">
                        {raceValues.map(race => (
                            <div className={`form-check form-check-inline race`} key={race['race']}>
                                <div id={race['race']}>
                                    <label id={'male-gender'} className={`form-check-label ${gender === "Male" ? "gender-top" : "gender-bottom"}`} htmlFor={`inlineRadio${1}`} style={{ backgroundImage: `URL(${race['male']})` }}>
                                        <input type='radio' className="form-check-input" name="inlineRadioOptions" value="Male" id={`inlineRadio${1}`} />
                                    </label>
                                    <label id={'female-gender'} className={`form-check-label ${gender === "Male" ? "gender-bottom" : "gender-top"}`} htmlFor={`inlineRadio${1}`} style={{ backgroundImage: `URL(${race['female']})` }}>
                                        <input type='radio' className="form-check-input" name="inlineRadioOptions" value="Female" id={`inlineRadio${1}`} />
                                    </label>
                                </div>

                            </div>

                        ))}
                    </div>

                    {race && (<div className="race-info-bubble">
                        <h2>{raceData[race]['race']}</h2>
                        <p>{raceData[race]['description']}</p>
                    </div>)}


                    <div className='arrow-spacer'>
                        <img className={'white-arrow prev-2'} onClick={handleClickLeft} id="prev" src='https://i.imgur.com/oTediJN.png' />
                        <img className={'white-arrow next-2'} onClick={handleClickRight} id="next" src='https://i.imgur.com/UpFYkCd.png' />
                    </div>
                </div>


                <label id='gender-error' htmlFor="gender-select"></label>
            </label>
        </div >
    </div >)
}
export default Part2;
