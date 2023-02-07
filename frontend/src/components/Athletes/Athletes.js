
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

        moveToSelected('next')

        // return document.getElementById('athletes').scrollBy({
        //     top: 0,
        //     left: carouselWidth,
        //     behavior: 'smooth'
        // })
    }

    /////////////////

    //so far, left to right traversal is working,but going back left the 'next' side isn't removed
    //also, new 'prev' not being labeled.
    function moveToSelected(element) {
        let $ = document.querySelector(`.${element}`)
        console.log('direction:', element)

        if (element == "next") {
            var newSelected = document.querySelector(".selected").nextSibling;
        } else if (element == "prev") {
            var newSelected = document.querySelector(".selected").previousSibling;
        } else {
            // var selected = element;
            var newSelected = document.querySelector(".selected");
        }

        var next = newSelected.nextSibling;
        var prev = newSelected.previousSibling;
        var prevSecond = prev?.previousSibling;
        var nextSecond = next?.nextSibling;


        // console.log(next)

        console.log(newSelected, 'selected', element, 'element')
        newSelected?.classList.remove(element);
        newSelected?.classList.add('selected');
        document.querySelector(".selected").classList.add('next')
        document.querySelector(".selected").classList.remove('selected')


        prev?.classList.remove('prevLeftSecond');
        prev?.classList.add('prev');
        document.querySelector(".prev").classList.add('prevLeftSecond')
        document.querySelector(".prev").classList.remove('prev')

        next?.classList.remove('nextRightSecond')
        next?.classList.add("next");
        document.querySelector(".next").classList.add('nextRightSecond')
        document.querySelector(".next").classList.remove('next')

        nextSecond?.classList.remove('hideRight');
        nextSecond?.classList.add("nextRightSecond");
        // document.querySelector(".nextRightSecond").classList.add('hideRight')
        document.querySelector(".nextRightSecond").classList.remove('nextRightSecond')

        prevSecond?.classList.remove('hideLeft');
        prevSecond?.classList.add("prevLeftSecond")
        // document.querySelector(".prevLeftSecond").classList.add('hideLeft')
        document.querySelector(".prevLeftSecond").classList.remove('prevLeftSecond')
        // prevSecond.removeClass().addClass("prevLeftSecond");

        console.log(nextSecond, 'dooooo iiiiit')


        // nextSecond.nextAll().removeClass().addClass('hideRight');

        // prevSecond.prevAll().removeClass().addClass('hideLeft');

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
