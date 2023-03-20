import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { thunkDeleteAthlete, thunkGetAllAthletes } from '../../store/athletes';
import SingleAthlete from '../Athletes/SingleAthlete';
import "./user-profile.css"
import classData from "../../util/classData";
import PerfectScrollbar from 'react-perfect-scrollbar'

function UserProfilePage() {
    // const athletes = useSelector((state) => Object.values(state.athletes));
    const selectAthletes = useCallback(state => Object.values(state.athletes), []);
    const athletes = useSelector(selectAthletes);
    const user = useSelector((state) => state.session.user);
    const [userObjects, setUserObjects] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        // dispatch(thunkGetAllAthletes)
        const userAthletes = athletes.filter(athlete => {
            if (athlete.user === user.id) { return athlete }
        })
        setUserObjects(userAthletes);
    }, [dispatch, athletes]);

    const handleDelete = async (e) => {
        e.preventDefault();
        // console.log(e.target.id, 'should be ath id')
        dispatch(thunkDeleteAthlete(e.target.id))
        //consider putting delete option on profile page only, will remove need for dynamic delete for your carousel
    }
    return (

        <div id='user-profile' >
            <div id='user-banner'>
                <div id='user-header'>
                    <img src='https://cdn.dragonagekeep.com/bundles/eabwedahub/images/ui_new/world_states/slot-banner.png' />
                    <h2>Browse Characters</h2>
                </div>
                <div id='user-info'>
                    <h2>{user.username} </h2>
                    <h2>{user.email} </h2>
                </div>

            </div>
            {/* this should be the list of 'characters' */}
            {/* <div id='user-cards-list'> */}
            {/* <div className='side-by-side'> */}

            <div id='user-gallery'>
                <div id='user-cards'>
                    <PerfectScrollbar id='user-gal' className='vertical-scroll'>

                        {userObjects.map((profile) => (
                            <div className='spacer' key={profile._id} >
                                <SingleAthlete profile={profile} />
                                {/* <div className='side-by-side'>
                            <p>{classData[profile.sports]['base_class']}</p>
                            <p>{profile.name}</p>
                        </div> */}
                                <button className="delete-button" id={profile._id} onClick={handleDelete} >Delete Athlete </button>
                            </div>
                        ))}
                    </PerfectScrollbar>
                </div>
            </div>
            {/* This will be the block where details show */}
            <div id='user-cards-preview'>
                {/* <SingleAthlete profile={profile} /> */}
            </div>

            {/* </div> */}
        </div>
    );
}

export default UserProfilePage;
