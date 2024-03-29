
import { useEffect, useState } from "react"
import "./athletes.css"
import SingleAthlete from "./SingleAthlete";
import { useDispatch, useSelector } from "react-redux";
import "./carousel.css"
import moveToSelected from "../../util/moveToSelected";


//this is the carousel of profile cards
function Athletes() {
    let dispatch = useDispatch();
    const athletes = useSelector((state) => Object.values(state.athletes));
    const carouselLabels = ["prevLeftSecond", "prev", "selected", "next", "nextRightSecond"]
    const [carouselCards, setCarouselCards] = useState([])

    useEffect(() => {
        // let els = [...document.getElementsByClassName('outer-profile')];
        // els.forEach(el => {
        //     el.classList.remove(...carouselLabels)
        // })
        setCarouselCards(document.getElementsByClassName('outer-profile'))
    }, [dispatch, athletes.length])
    /////////////////


    let handleLabels = () => {
        // let els = [...document.getElementsByClassName('outer-profile')];
        // els.forEach(el => {
        //     el.classList.remove(...carouselLabels, "hideLeft", "hideRight")
        // })
        for (let i = 0; i < carouselLabels.length; i++) {
            document.getElementsByClassName('outer-profile')[i]?.classList.remove('hideRight')
            document.getElementsByClassName('outer-profile')[i]?.classList.add(carouselLabels[i])
        }
    }
    let handleClickLeft = (e) => {
        e.preventDefault();
        if (document.querySelector(".prev")) moveToSelected('prev')
    }
    let handleClickRight = (e) => {
        e.preventDefault();
        if (document.querySelector(".next")) moveToSelected('next')
    }

    /////////////////
    //////////
    return (
        <div id='all-athletes'>
            <h2>All Profiles</h2>
            <div className="buttons"></div>
            <img className={'white-arrow'} onClick={handleClickLeft} id="prev" src='https://i.imgur.com/oTediJN.png' />
            <img className={'white-arrow'} onClick={handleClickRight} id="next" src='https://i.imgur.com/UpFYkCd.png' />

            <div id='athletes' className="athletes">

                {athletes.map(profile => (

                    < SingleAthlete key={profile._id} profile={profile} />


                ))}
                {carouselCards.length && handleLabels()}

            </div>
        </div >
    );
}

export default Athletes;
