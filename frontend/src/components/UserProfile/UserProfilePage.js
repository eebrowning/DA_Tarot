import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { thunkDeleteAthlete, thunkGetAllAthletes } from '../../store/athletes';
import SingleAthlete from '../Athletes/SingleAthlete';
import "./user-profile.css"

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
        <div id='user-profile'>
            <h1>{user.name} Profile</h1>
            <div id='user-cards'>
                {userObjects.map((profile) => (
                    <div className='spacer' key={profile._id} >
                        <SingleAthlete profile={profile} />
                        <button className="delete-button" id={profile._id} onClick={handleDelete} >Delete Athlete </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserProfilePage;
