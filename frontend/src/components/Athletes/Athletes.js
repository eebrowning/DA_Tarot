
import axios from "axios";
import api from "../../api";
import { useEffect, useState } from "react"
import "./athletes.css"
import SingleAthlete from "./SingleAthlete";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllAthletes } from "../../store/athletes";
import { getAllUsers } from "../../store/session";
import "./carousel.css"
import moveToSelected from "../../util/moveToSelected";


//this is the carousel of profile cards
function Athletes() {
    let [profiles, setProfiles] = useState([]);
    let dispatch = useDispatch();
    const athletes = useSelector((state) => Object.values(state.athletes));
    // const carouselLabels = ["selected", "next", "next2", "next3"]
    const carouselLabels = ["prevLeftSecond", "prev", "selected", "next", "nextRightSecond"]
    const [carouselCards, setCarouselCards] = useState([])

    useEffect(() => {

        dispatch(thunkGetAllAthletes());
        dispatch(getAllUsers());
        setCarouselCards(document.getElementsByClassName('outer-profile'))
        // console.log(document.querySelector('.selected'), 'balddd')
        // if (!document.querySelector('.selected')) setCarouselCards(document.getElementsByClassName('outer-profile'))
    }, [dispatch, athletes.length])
    /////////////////


    let handleLabels = () => {
        for (let i = 0; i < carouselLabels.length; i++) {
            document.getElementsByClassName('outer-profile')[i]?.classList.remove('hideRight')
            document.getElementsByClassName('outer-profile')[i]?.classList.add(carouselLabels[i])
        }
    }
    let handleClickLeft = (e) => {
        e.preventDefault();
        moveToSelected('prev')
    }
    let handleClickRight = (e) => {
        e.preventDefault();
        moveToSelected('next')
    }

    /////////////////
    //////////
    return (
        <div >
            <h2>All Profiles</h2>
            <div className="buttons"></div>
            <img className={'white-arrow'} onClick={handleClickLeft} id="prev" src='https://i.imgur.com/oTediJN.png' />
            <img className={'white-arrow'} onClick={handleClickRight} id="next" src='https://i.imgur.com/UpFYkCd.png' />

            <div id='athletes' className="athletes">

                {athletes.map(profile => (

                    < SingleAthlete key={profile._id} profile={profile} profiles={profiles} />


                ))}
                {carouselCards.length && handleLabels()}

            </div>
        </div >
    );
}

export default Athletes;
