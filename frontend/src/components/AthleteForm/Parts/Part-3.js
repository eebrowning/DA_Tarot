import { useEffect, useState } from "react";
import '../Styles/part-3.css'

import classData from "../../../util/classData";
import raceData from '../../../util/raceData'
import moveToSelected from "../../../util/moveToSelected";


////TODO for dragon age app: make radio options for gender, after gender selectedSport, move to class.
//class radio options appear, after selection, next enabled.
//this will be the test of the DA:Inquisition-like character detail menu.
const Part3 = ({ receivePart3, step, race }) => {

    let classValues = Object.values(classData);
    let sportsArr = [];
    classValues.forEach(entry => { sportsArr.push(entry['class']) })
    // const [gender, setGender] = useState();
    const [sports, setSports] = useState("Rogue");
    // const [birthdate, setBirthdate] = useState();
    const [birthdate, setBirthdate] = useState("1111-11-11T00:00:00.000Z");//temp to disable input TODO
    //some wiggle room with my carousel: allows me to pick starting point
    const carouselLabels = ["selected", 'next', 'nextRightSecond', 'hideRight', 'hideRight'];

    const [carouselCards, setCarouselCards] = useState([])


    useEffect(() => {
        let mageCard = document.getElementById('Mage-card');
        let next3 = document.querySelector('.next-3');//
        let next = document.querySelector('.next');//is the next card
        ///////
        if (sports === 'Mage') {
            next3.style.opacity = 0
        } else if (race === 'Dwarf' && sports == 'Warrior') {
            console.log(sports)
            next3.style.opacity = 0
            next3.style.zIndex = -5
        } else {
            next3.style.opacity = 1
            next3.style.zIndex = 5
        }
        ///////
        if (race === 'Dwarf' && mageCard) {
            if (sports === 'Mage') { setSports('Warrior'); moveToSelected('prev') };//shenanigans with moving backwards with 'mage' selected
            mageCard.style.display = 'none'
        }
        else if (race !== 'Dwarf' && mageCard) {
            mageCard.style.display = '';

        }
    }, [race, step, sports])


    useEffect(() => {
        receivePart3({ sports, birthdate })
    }, [sports, birthdate])


    useEffect(() => {
        setCarouselCards(document.getElementById("sports-select")?.children)
        handleLabels();
        document.getElementsByClassName('form-phase')[0].innerText = "Select Class";
        document.querySelector('.prev-3').style.opacity = '0';//cheeky fix

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
            <label id='sports-error' htmlFor="sports"></label>
            <div name='sports' id='sports-select'>
                <div>
                    {
                        sportsArr?.map(sport => (
                            <div className={`form-check form-check-inline sport`} id={`${sport}-card`} key={`${sport}`}>
                                <input type='radio' className="form-check-input " name="inlineRadioOptions" value={sport} id={`inlineRadio${sport}`} />
                                <label onClick={handleClickPicture} id={sport} className="form-check-label sports-label" htmlFor={`inlineRadio${sport}`} style={{ backgroundImage: `URL(${classData[sport]["cardURL"]})` }}>
                                    {sport}
                                </label>
                            </div>
                        ))
                    }
                </div>
                {sports && (<div className="sports-info-bubble">
                    <h2>{classData[sports]['general_class']}</h2>
                    <p>{classData[sports]['description']}</p>
                </div>)}

            </div>

            <img alt="previous-option arrow" className={'white-arrow prev-3'} onClick={handleClickLeft} id="prev" src='https://i.imgur.com/oTediJN.png' />
            <img alt="next-option arrow" className={'white-arrow next-3'} onClick={handleClickRight} id="next" src='https://i.imgur.com/UpFYkCd.png' />
            <div className='arrow-spacer'></div>
        </label >

    </div >)
}
export default Part3;
