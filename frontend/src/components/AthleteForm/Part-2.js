
import { useEffect, useState } from "react";
import './part-2.css'
import classData from "../../util/classData";
import raceData from '../../util/raceData'
import moveToSelected from "../../util/moveToSelected";
import moveToSelectedRedux from "../../util/move2";

////TODO for dragon age app: make radio options for gender, after gender selectedSport, move to class.
//class radio options appear, after selection, next enabled.
//this will be the test of the DA:Inquisition-like character detail menu.
const Part2_5 = ({ receivePart2, step }) => {
    let classValues = Object.values(classData);
    let sportsArr = [];
    const [gender, setGender] = useState("Male");

    //some wiggle room with my carousel: allows me to pick starting point
    const carouselLabels = ["selectedPart2", 'nextPart2', 'nextRightSecondPart2', 'hideRightPart2', 'hideRightPart2'];

    const [carouselCards, setCarouselCards] = useState([])


    useEffect(() => {
        // receivePart2({ gender, sports, birthdate })
        console.log('gender?', gender)

    }, [gender])

    useEffect(() => {
        setCarouselCards(document.getElementById("race-select").children)
        handleLabels();
        document.getElementById('prev').style.opacity = '0';//cheeky fix

        console.log('blaaah');
        // document.getElementsByClassName('form-phase')[0].innerText = "Select Class"
        document.querySelector(".selectedPart2")?.classList.remove('.selectedPart2')


        // document.querySelector('.prev-2').addEventListener("mousedown", () => document.querySelector('.prev-2').classList.add('click'))
        // document.querySelector('.prev-2').addEventListener("mouseup", () => document.querySelector('.prev-2').classList.remove('click'))
        // document.querySelector('.next-2').addEventListener("mousedown", () => document.querySelector('.next-2').classList.add('click'))
        // document.querySelector('.next-2').addEventListener("mouseup", () => document.querySelector('.next-2').classList.remove('click'))

    }, [])


    let handleLabels = () => {
        for (let i = 0; i < carouselLabels.length; i++) {
            document.getElementsByClassName('race')[i]?.classList.remove('hideRightPart2')
            document.getElementsByClassName('race')[i]?.classList.add(carouselLabels[i])
        }
    }
    let handleClickLeft = (e) => {
        e.preventDefault();

        // moveToSelected('prev')
        moveToSelectedRedux('prev', 'Part2')


        // setSports(document.querySelector('#sports-select  .selected')?.firstChild.value)

    }
    let handleClickRight = (e) => {
        e.preventDefault();

        // moveToSelected('next');
        moveToSelectedRedux('next', 'Part2')

        // setSports(document.querySelector('#sports-select  .selected')?.firstChild.value)
    }
    let handleClickPicture = (e) => {
        e.preventDefault();
        // document.querySelector('.selected')?.classList.remove('selected');
        // document.getElementById(e.target.id + '-card').classList.add('selected');
        // setSports(document.querySelector('#sports-select .selected').firstChild.value)
    }

    return (<div style={{ display: step === 2 ? 'flex' : "none" }} className="part-2 bootPart">
        <div id='race-and-gender' style={{ display: 'block' }}>

            <label htmlFor="gender-select" id='gender-select' className="form-label race-label" style={{ display: 'flex' }}>
                <div>
                    Gender Select
                </div>
                <div>
                    <input onChange={() => setGender("Male")} type='radio' className="form-check-input " name="inlineRadioOptions" value="Male" id={`inlineRadio${1}`} />
                    Male
                </div>
                <div>
                    <input onChange={() => setGender("Female")} type='radio' className="form-check-input " name="inlineRadioOptions" value="Female" id={`inlineRadio${1}`} />
                    Female
                </div>
                <label id='gender-error' htmlFor="gender-select"></label>
            </label>

            <label htmlFor="race-select" id='race-select' className="form-label" style={{ display: 'flex' }}>
                {/* <div className={`form-check form-check-inline race`} id={`race-card`} key={`${1}`}> */}
                <div>

                    <div className={`form-check form-check-inline race`}>
                        <div>

                            <label onClick={handleClickPicture} id={'male-gender'} className={`form-check-label ${gender === "Male" ? "gender-top" : "gender-bottom"}`} htmlFor={`inlineRadio${1}`} style={{ backgroundImage: `URL(${'https://i.imgur.com/2dtacUM.png'})` }}>
                                <input type='radio' className="form-check-input" name="inlineRadioOptions" value="Male" id={`inlineRadio${1}`} />
                            </label>


                            <label onClick={handleClickPicture} id={'female-gender'} className={`form-check-label ${gender === "Male" ? "gender-bottom" : "gender-top"}`} htmlFor={`inlineRadio${1}`} style={{ backgroundImage: `URL(${'https://i.imgur.com/IMv2C07.jpg'})` }}>
                                <input type='radio' className="form-check-input" name="inlineRadioOptions" value="Female" id={`inlineRadio${1}`} />
                            </label>
                        </div>

                    </div>
                    <div className={`form-check form-check-inline race`}>
                        <div>

                            <label onClick={handleClickPicture} id={'male-gender'} className={`form-check-label ${gender === "Male" ? "gender-top" : "gender-bottom"}`} htmlFor={`inlineRadio${1}`} style={{ backgroundImage: `URL(${'https://i.imgur.com/pFz1Z0l.jpg'})` }}>
                                <input type='radio' className="form-check-input" name="inlineRadioOptions" value="Male" id={`inlineRadio${1}`} />
                            </label>


                            <label onClick={handleClickPicture} id={'female-gender'} className={`form-check-label ${gender === "Male" ? "gender-bottom" : "gender-top"}`} htmlFor={`inlineRadio${1}`} style={{ backgroundImage: `URL(${'https://i.imgur.com/pFz1Z0l.jpg'})` }}>
                                <input type='radio' className="form-check-input" name="inlineRadioOptions" value="Female" id={`inlineRadio${1}`} />
                            </label>
                        </div>

                    </div>
                    <div className={`form-check form-check-inline race`}>
                        <div >

                            <label onClick={handleClickPicture} id={'male-gender'} className={`form-check-label ${gender === "Male" ? "gender-top" : "gender-bottom"}`} htmlFor={`inlineRadio${1}`} style={{ backgroundImage: `URL(${'https://i.imgur.com/2dtacUM.png'})` }}>
                                <input type='radio' className="form-check-input" name="inlineRadioOptions" value="Male" id={`inlineRadio${1}`} />
                            </label>


                            <label onClick={handleClickPicture} id={'female-gender'} className={`form-check-label ${gender === "Male" ? "gender-bottom" : "gender-top"}`} htmlFor={`inlineRadio${1}`} style={{ backgroundImage: `URL(${'https://i.imgur.com/IMv2C07.jpg'})` }}>
                                <input type='radio' className="form-check-input" name="inlineRadioOptions" value="Female" id={`inlineRadio${1}`} />
                            </label>
                        </div>
                    </div>

                </div>
                {/* </div> */}
                {/* TODO need NEED to figure out how to separate logic enough to reuse carousel. maybe adding a selector? */}
                <img className={'white-arrow prev-2'} onClick={handleClickLeft} id="prev" src='https://i.imgur.com/oTediJN.png' />
                <img className={'white-arrow next-2'} onClick={handleClickRight} id="next" src='https://i.imgur.com/UpFYkCd.png' />
                <div className='arrow-spacer'></div>
                <label id='gender-error' htmlFor="gender-select"></label>
                {/* <button>Select Race and Gender</button> */}

            </label>

        </div >


        {/* 
            KEEP, former form structure
            <select  name='sports' id='sports-select' className="form-control boot-data" onChange={e => setSports(e.target.value)} required>
                <option>{null}</option>
                {
                    sportsArr.map(sport => (
                        <option key={sport}>{sport}</option>
                    ))
                }
            </select> 
            */}

        {/* temp disable  */}
        {/* <label htmlFor="birthdate" className="form-label">Birthdate
            <label id='birthdate-error' htmlFor="birthdate"></label>
            <input
                required
                name='birthdate'
                placeholder="Athlete's birthdate"
                type='date'
                className="form-control boot-data"

                onChange={e => setBirthdate(e.target.value)}
            />
        </label> */}


    </div >)
}
export default Part2_5;
