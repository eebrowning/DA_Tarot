
import axios from "axios";
import api from "../../api";
import { useEffect, useState } from "react"
import "./athletes.css"
import SingleAthlete from "./SingleAthlete";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllAthletes } from "../../store/athletes";


function Athletes() {
    let [profiles, setProfiles] = useState([]);
    let dispatch = useDispatch();
    const athletes = useSelector((state) => Object.values(state.athletesReducer));
    useEffect(() => {

        dispatch(thunkGetAllAthletes());
        // console.log("sent dispatch to thunkGetAllAthletes")

    }, [dispatch, athletes.length])


    // useEffect(() => {
    //     async function fetchData() {
    //         let response = await api.getAllProfiles()
    //         data = response.data.data.profiles;
    //         console.log(data, profiles, 'data and profiles')
    //         if (data != profiles) setProfiles(data);
    //         return response;
    //     }
    //     fetchData();
    //     // console.log(data, 'data', profiles)
    // }, [])



    return (
        <div className="Athletes">
            <>All Profiles</>
            <>
                {athletes?.map(profile => (
                    <SingleAthlete key={profile._id} profile={profile} profiles={profiles} />

                ))}
            </>

        </div >
    );
}

export default Athletes;
