import { useEffect, useState } from "react";
import './part-3.css'
import classData from "../../util/classData";
import raceData from '../../util/raceData'
import moveToSelected from "../../util/moveToSelected";

////TODO for dragon age app: make radio options for gender, after gender selectedSport, move to class.
//class radio options appear, after selection, next enabled.
//this will be the test of the DA:Inquisition-like character detail menu.
const Part3 = ({ receivePart3, step }) => {
    let classValues = Object.values(classData);
    let sportsArr = [];
    classValues.forEach(entry => { sportsArr.push(entry['class']) })
    const [gender, setGender] = useState();
    const [sports, setSports] = useState("Rogue");
    // const [birthdate, setBirthdate] = useState();
    const [birthdate, setBirthdate] = useState("1111-11-11T00:00:00.000Z");//temp to disable input TODO
    //some wiggle room with my carousel: allows me to pick starting point
    const carouselLabels = ["selected", 'next', 'nextRightSecond', 'hideRight', 'hideRight'];

    const [carouselCards, setCarouselCards] = useState([])


    useEffect(() => {
        receivePart3({ gender, sports, birthdate })
        console.log('gender?', gender)

        // document.querySelector('.gender-top').classList.add('swap')

        if (gender === 'Female') {
            document.querySelector('#female-gender').classList.replace('gender-bottom', 'gender-top')
            document.querySelector('#male-gender').classList.replace('gender-top', 'gender-bottom')

        } else if (gender === 'Male') {
            document.querySelector('#male-gender').classList.replace('gender-bottom', 'gender-top')
            document.querySelector('#female-gender').classList.replace('gender-top', 'gender-bottom')

        }

    }, [gender, sports, birthdate])

    useEffect(() => {
        setCarouselCards(document.getElementById("sports-select").children)
        handleLabels();
        setSports(document.querySelector('.sport')?.firstChild.value)
        // document.querySelector('.prev-3').style.opacity = '0';//cheeky fix

        console.log(document.getElementsByClassName('form-phase')[0], 'blaaah');
        document.getElementsByClassName('form-phase')[0].innerText = "Select Class"



        // document.getElementById('prev').addEventListener("mousedown", () => document.getElementById('prev').classList.add('click'))
        // document.getElementById('prev').addEventListener("mouseup", () => document.getElementById('prev').classList.remove('click'))
        // document.getElementById('next').addEventListener("mousedown", () => document.getElementById('next').classList.add('click'))
        // document.getElementById('next').addEventListener("mouseup", () => document.getElementById('next').classList.remove('click'))


        document.querySelector('.prev-3').addEventListener("mousedown", () => document.querySelector('.prev-3').classList.add('click'))
        document.querySelector('.prev-3').addEventListener("mouseup", () => document.querySelector('.prev-3').classList.remove('click'))
        document.querySelector('.next-3').addEventListener("mousedown", () => document.querySelector('.next-3').classList.add('click'))
        document.querySelector('.next-3').addEventListener("mouseup", () => document.querySelector('.next-3').classList.remove('click'))



    }, [])


    let handleLabels = () => {
        for (let i = 0; i < carouselLabels.length; i++) {
            document.getElementsByClassName('sport')[i]?.classList.remove('hideRight')
            document.getElementsByClassName('sport')[i]?.classList.add(carouselLabels[i])
        }
    }
    let handleClickLeft = (e) => {
        e.preventDefault();

        moveToSelected('prev')

        setSports(document.querySelector('#sports-select  .selected')?.firstChild.value)

    }
    let handleClickRight = (e) => {
        e.preventDefault();
        moveToSelected('next');
        setSports(document.querySelector('#sports-select  .selected')?.firstChild.value)
    }

    let handleSelect = (e) => {
        e.preventDefault();
        // redundant
        setSports(document.querySelector('#sports-select .selected').firstChild.value)
    }
    let handleClickPicture = (e) => {
        e.preventDefault();
        // document.querySelector('.selected')?.classList.remove('selected');
        // document.getElementById(e.target.id + '-card').classList.add('selected');
        // setSports(document.querySelector('#sports-select .selected').firstChild.value)
    }

    return (<div style={{ display: step === 3 ? 'flex' : "none" }} className="part-3 bootPart">

        <label htmlFor="sports" className="form-label sport-label" style={{ display: 'block' }}>
            {/* <img src="https://cdn.dragonagekeep.com/bundles/eabwedahub/images/ui_new/banner.png" /> */}
            {/* <div id='menu-header'>
                <img src='https://cdn.dragonagekeep.com/bundles/eabwedahub/images/ui_new/world_states/slot-banner.png' />
                <h2>Character Creation {">"} <strong>Select Class</strong></h2>
            </div> */}
            <label id='sports-error' htmlFor="sports"></label>
            <div name='sports' id='sports-select'>
                <div>
                    {
                        sportsArr?.map(sport => (
                            <div className={`form-check form-check-inline sport`} id={`${sport}-card`} key={`${sport}`}>
                                <input type='radio' className="form-check-input " name="inlineRadioOptions" value={sport} id={`inlineRadio${sport}`} />
                                <label onClick={handleClickPicture} id={sport} className="form-check-label" htmlFor={`inlineRadio${sport}`} style={{ backgroundImage: `URL(${classData[sport]["cardURL"]})` }}>
                                    {sport}
                                </label>
                            </div>
                        ))
                    }
                    {!document.getElementsByClassName('selectedSport') && document.getElementById('sports-select')?.firstChild.classList.add('selectedSport')}
                </div>

                {sports && (<div className="sports-info-bubble">
                    <h2>{classData[sports]['general_class']}</h2>
                    <p>{classData[sports]['description']}</p>
                </div>)}

            </div>

            <img className={'white-arrow prev-3'} onClick={handleClickLeft} id="prev" src='https://i.imgur.com/oTediJN.png' />
            <img className={'white-arrow next-3'} onClick={handleClickRight} id="next" src='https://i.imgur.com/UpFYkCd.png' />
            <div className='arrow-spacer'></div>

        </label >

        {/* <div id='race-and-gender' style={{ display: 'block' }}>

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
                <div className={`form-check form-check-inline race`} id={`${1}-card`} key={`${1}`}>


                    <label onClick={handleClickPicture} id={'male-gender'} className="form-check-label gender-top" htmlFor={`inlineRadio${1}`} style={{ backgroundImage: `URL(${'https://i.imgur.com/2dtacUM.png'})` }}>
                        <input type='radio' className="form-check-input" name="inlineRadioOptions" value="Male" id={`inlineRadio${1}`} />
                    </label>


                    <label onClick={handleClickPicture} id={'female-gender'} className="form-check-label gender-bottom" htmlFor={`inlineRadio${1}`} style={{ backgroundImage: `URL(${'https://i.imgur.com/IMv2C07.jpg'})` }}>
                        <input type='radio' className="form-check-input" name="inlineRadioOptions" value="Female" id={`inlineRadio${1}`} />
                    </label>

                </div>
                <img className={'white-arrow'} onClick={handleClickLeft} id="prev" src='https://i.imgur.com/oTediJN.png' />
                <img className={'white-arrow'} onClick={handleClickRight} id="next" src='https://i.imgur.com/UpFYkCd.png' />
                <div className='arrow-spacer'></div>
                <label id='gender-error' htmlFor="gender-select"></label>
                <button>Select Race and Gender</button>

            </label>

        </div> */}


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
export default Part3;
