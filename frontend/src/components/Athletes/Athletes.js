
import axios from "axios";
import api from "../../api";
import { useEffect, useState } from "react"
import "./athletes.css"
import SingleAthlete from "./SingleAthlete";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllAthletes } from "../../store/athletes";
import { getAllUsers } from "../../store/session";
import "./carousel.css"

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
        // console.log("sent dispatch to thunkGetAllAthletes")

        setCarouselCards(document.getElementsByClassName('outer-profile'))

        // if (profiles.length > 0) {
        // for (let i = 0; i < carouselLabels.length; i++) {
        //     document.getElementsByClassName('outer-profile')[i].classList.add(carouselLabels[i])
        //     if (i >= profiles.length) return;
        // }
        // }

    }, [dispatch, athletes.length])

    /////////////////
    const [carouselWidth, setCarouselWidth] = useState(document.getElementById("profile-card")?.clientWidth);
    let scrollBox = document.getElementById("athletes");

    useEffect(() => {
        setCarouselWidth(document.getElementById("profile-card")?.clientWidth)
        // console.log('width changed')

    })
    let handleLabels = () => {
        for (let i = 0; i < carouselLabels.length; i++) {

            document.getElementsByClassName('outer-profile')[i]?.classList.add(carouselLabels[i])
            // if (i >= carouselCards.length) return;
        }
    }
    let handleClickLeft = (e) => {
        e.preventDefault();

        moveToSelected('prev')

        // return document.getElementById('athletes').scrollBy({
        //     top: 0,
        //     left: -carouselWidth,
        //     behavior: 'smooth'
        // })
    }

    let handleClickRight = (e) => {
        e.preventDefault();

        // moveToSelected('next')
        // return document.getElementById('athletes').scrollBy({
        //     top: 0,
        //     left: carouselWidth,
        //     behavior: 'smooth'
        // })
    }

    /////////////////
    function moveToSelected(element) {
        let $ = document.$
        console.log('element', element)
        if (element == "next") {
            var selected = $(".selected").next();
        } else if (element == "prev") {
            var selected = $(".selected").prev();
        } else {
            var selected = element;
        }

        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();

        $(selected).removeClass().addClass("selected");

        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");

        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");

        $(nextSecond).nextAll().removeClass().addClass('hideRight');
        $(prevSecond).prevAll().removeClass().addClass('hideLeft');

    }


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
