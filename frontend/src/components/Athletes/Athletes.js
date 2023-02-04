
import axios from "axios";
import api from "../../api";
import { useEffect, useState } from "react"
import "./athletes.css"
import SingleAthlete from "./SingleAthlete";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllAthletes } from "../../store/athletes";
import { getAllUsers } from "../../store/session";


function Athletes() {
    let [profiles, setProfiles] = useState([]);
    let dispatch = useDispatch();
    const athletes = useSelector((state) => Object.values(state.athletes));
    useEffect(() => {

        dispatch(thunkGetAllAthletes());
        dispatch(getAllUsers());
        // console.log("sent dispatch to thunkGetAllAthletes")

    }, [dispatch, athletes.length])



    return (
        <div >
            <h2>All Profiles</h2>
            <div className="athletes">
                {athletes?.map(profile => (
                    <SingleAthlete key={profile._id} profile={profile} profiles={profiles} />

                ))}
            </div>

        </div >
    );
}

export default Athletes;
