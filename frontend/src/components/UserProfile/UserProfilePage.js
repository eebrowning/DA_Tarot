import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { thunkDeleteAthlete } from '../../store/athletes';
import SingleAthlete from '../Athletes/SingleAthlete';
import "./user-profile.css"
import PerfectScrollbar from 'react-perfect-scrollbar'

function UserProfilePage() {
    // const athletes = useSelector((state) => Object.values(state.athletes));
    const selectAthletes = useCallback(state => Object.values(state.athletes), []);
    const athletes = useSelector(selectAthletes);
    const user = useSelector((state) => state.session.user);
    const [userObjects, setUserObjects] = useState([]);
    const dispatch = useDispatch();
    const scrollOptions = {
        scrollSpeed: 2,
        minScrollbarLength: 20,
        maxScrollbarLength: 70,
    };

    useEffect(() => {
        const userAthletes = athletes.filter(athlete => {
            if (athlete.user === user.id) { return athlete } else { return null }
        })
        setUserObjects(userAthletes);
    }, [dispatch, athletes, user.id, athletes.length]);

    const handleDelete = async (e) => {
        e.preventDefault();

        dispatch(thunkDeleteAthlete(e.target.id))
        //consider putting delete option on profile page only, will remove need for dynamic delete for your carousel
    }
    return (

        <div id='user-profile' >
            <div id='user-banner'>
                <div id='user-header'>
                    <img alt='banner to draw attention to header' src='https://cdn.dragonagekeep.com/bundles/eabwedahub/images/ui_new/world_states/slot-banner.png' />
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
                <PerfectScrollbar id='user-gal'
                    options={scrollOptions}
                    className='vertical-scroll'>
                    <div id='user-cards'>
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
                    </div>
                </PerfectScrollbar>
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
