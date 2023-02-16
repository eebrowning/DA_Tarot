import { useEffect, useState } from "react";
import './part-2.css'
import classData from "../../util/classData";
import raceData from '../../util/raceData'
import moveToSelected from "../../util/moveToSelected";

////TODO for dragon age app: make radio options for gender, after gender selectedSport, move to class.
//class radio options appear, after selection, next enabled.
//this will be the test of the DA:Inquisition-like character detail menu.
const Part2 = ({ receivePart2, step }) => {
    let classValues = Object.values(classData);
    let sportsArr = [];
    classValues.forEach(entry => { sportsArr.push(entry['class']) })
    const [gender, setGender] = useState();
    const [sports, setSports] = useState();
    // const [birthdate, setBirthdate] = useState();
    const [birthdate, setBirthdate] = useState("1111-11-11T00:00:00.000Z");//temp to disable input TODO
    // const carouselLabels = ["prevLeftSecond", "prev", "selected", "next", "nextRightSecond"];
    //some wiggle room with my carousel: allows me to pick starting point
    const carouselLabels = ["selected", 'next', 'nextRightSecond', 'hideRight', 'hideRight'];
    // const carouselLabels = ["selected", 'next', 'nextRightSecond'];


    const [carouselCards, setCarouselCards] = useState([])


    useEffect(() => {
        receivePart2({ gender, sports, birthdate })
        console.log(sports, 'did class change?')
    }, [gender, sports, birthdate])
    useEffect(() => {
        setCarouselCards(document.getElementById("sports-select").children)
        handleLabels();
        setSports(document.querySelector('.sport')?.firstChild.value)

        console.log(document.querySelector('.selected'));

    }, [])


    let handleLabels = () => {
        for (let i = 0; i < carouselLabels.length; i++) {
            document.getElementsByClassName('sport')[i]?.classList.remove('hideRight')
            document.getElementsByClassName('sport')[i]?.classList.add(carouselLabels[i])
        }
    }
    let handleClickLeft = (e) => {
        e.preventDefault();
        // setSports(document.querySelector('.selected').firstChild.value)

        // document.querySelector('#sports-select .selected')?.previousSibling.classList.add('selected')
        // document.querySelectorAll('#sports-select .selected')[1]?.classList.remove('selected')
        moveToSelected('prev')

        setSports(document.querySelector('#sports-select  .selected')?.firstChild.value)



    }
    let handleClickRight = (e) => {
        e.preventDefault();

        moveToSelected('next');

        console.log(document.querySelector('#sports-select  .selected'), 'selected class in .sports');
        setSports(document.querySelector('#sports-select  .selected')?.firstChild.value)

    }

    let handleSelect = (e) => {
        e.preventDefault();
        // redundant
        setSports(document.querySelector('#sports-select .selected').firstChild.value)
    }
    let handleClickPicture = (e) => {
        e.preventDefault();
        document.querySelector('.selected')?.classList.remove('selected');
        document.getElementById(e.target.id + '-card').classList.add('selected');
        setSports(document.querySelector('#sports-select .selected').firstChild.value)
    }

    return (<div style={{ display: step === 2 ? 'flex' : "none" }} className="part-2 bootPart">

        <label htmlFor="gender-select" className="form-label">Gender
            <label id='gender-error' htmlFor="gender-select"></label>
            <select onChange={e => setGender(e.target.value)} id='gender' className="form-control boot-data" required>
                <option>{null}</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>

            </select>
        </label>

        <label htmlFor="sports" className="form-label">Select Class
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
            </div>
            <img className={'white-arrow'} onClick={handleClickLeft} id="prev" src='https://i.imgur.com/oTediJN.png' />

            {/* <button onClick={handleSelect} id='class-button'>Select </button> */}
            <button onClick={handleSelect} id='class-button'>Select {sports ? classData[sports]['general_class'] : null}</button>

            <img className={'white-arrow'} onClick={handleClickRight} id="next" src='https://i.imgur.com/UpFYkCd.png' />

        </label >

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

export default Part2;
