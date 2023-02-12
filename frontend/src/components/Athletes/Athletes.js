
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


    let handleLabels = () => {
        for (let i = 0; i < carouselLabels.length; i++) {
            document.getElementsByClassName('outer-profile')[i]?.classList.remove('hideRight')
            document.getElementsByClassName('outer-profile')[i]?.classList.add(carouselLabels[i])
            // if (i >= carouselCards.length) return;
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
    //TODO
    //so far, it works: BUT.
    //I think I could use conditions to reduce the if(left)else if(right) portion by about half,
    // but it works.

    function moveToSelected(direction) {
        let $ = document.querySelector(`.${direction}`)
        console.log('direction:', direction)

        if (direction == "next") {
            var newSelected = document.querySelector(".selected").nextSibling;

        } else if (direction == "prev") {
            var newSelected = document.querySelector(".selected").previousSibling;
            console.log('in prev ', newSelected)
        }

        var next = newSelected.nextSibling;
        var prev = newSelected.previousSibling;
        var prevSecond = prev?.previousSibling;
        var nextSecond = next?.nextSibling;

        // console.log(next)
        if (direction == 'next') {
            //adjust selected to the right
            document.querySelector(".selected").classList.add('prev')
            document.querySelector(".selected").classList.remove('selected')
            newSelected?.classList.remove('next');
            newSelected?.classList.add('selected');
            //prev needs to move right
            prev?.classList.add('prev');
            prev?.previousSibling?.classList.remove('hideRight');//
            prev?.classList.remove('nextRightSecond');
            //next needs to move right
            next?.classList.add("next");
            next?.classList.remove('nextRightSecond')
            next.nextSibling.classList.remove('next');
            //nextsecond needs to move right
            nextSecond?.classList.add("nextRightSecond");
            nextSecond?.classList.remove('hideRight')
            nextSecond.nextSibling.classList.add('hideRight');
            //prevsecond needs to move right
            prevSecond?.classList.add("prevLeftSecond")
            prevSecond?.classList.remove('prev')
            prevSecond.previousSibling?.classList.remove('prevLeftSecond');
            prevSecond.previousSibling?.classList.add('hideLeft');


        } else if (direction == 'prev') {
            //adjust selected to the left
            document.querySelector(".selected").classList.add('next')
            document.querySelector(".selected").classList.remove('selected')
            newSelected?.classList.remove('prev');
            newSelected?.classList.add('selected');
            //prev needs to move left
            prev?.classList.add('prev');
            prevSecond?.classList.add('hideLeft')
            prev?.previousSibling?.classList.remove('hideLeft');//
            prev?.classList.remove('prevLeftSecond');
            //next needs to move left
            next?.classList.add("next");
            next?.classList.remove('nextRightSecond')
            next.nextSibling.classList.remove('next');
            //nextsecond needs to move left
            nextSecond?.classList.add("nextRightSecond");
            nextSecond.nextSibling.classList.add('hideRight');
            nextSecond.nextSibling.classList.remove('nextRightSecond');
            //prevsecond needs to move left
            prevSecond?.classList.add("prevLeftSecond")
            prevSecond.previousSibling?.classList.remove('prevLeftSecond');
        }

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
