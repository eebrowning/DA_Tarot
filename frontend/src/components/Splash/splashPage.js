import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkGetAllAthletes } from '../../store/athletes';
import { demoLogin, getAllUsers } from '../../store/session';
// import ProfileButton from './ProfileButton';
import './splash.css';
// import { demoLogin } from '../../store/session';



function Splash() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
    }, [dispatch])

    // useEffect(() => {

    //     dispatch(thunkGetAllAthletes());
    //     dispatch(getAllUsers());
    // }, [dispatch])


    const handleClick = (e) => {
        e.preventDefault();
        console.log('butts')
        history.push(`/create`);
        // dispatch(thunkUpdatePlace(place)); NO! dispatch will go on submit of edit form!
    }

    const handleDemo = (e) => {
        e.preventDefault();

        return dispatch(demoLogin())
        // .catch(async (res) => {
        //     const data = await res.json();
        //     if (data && data.errors) setErrors(data.errors);
        // });
    }

    return (
        <>
            <div>
                <div id='splash-buttons'>
                    <h2>Log in and take a look at the creation menu:</h2>
                    {sessionUser && (<button onClick={handleClick}>Check out the menu!</button>)}
                    {!sessionUser && (<button onClick={handleDemo}>Demo Login</button>)}
                </div>
            </div>
            <div className='splash'>
                <h2>Welcome to Dragon Age Tarot: </h2>
                <p>For now, this is a front-end challenge to myself to mimic the style of Dragon Age: Inquisition's character creation menu. I did not create any of the card art assets, using existing card images from the game, however any custom buttons or scrollbars were executed by myself.</p>
                <p>The cards you create can be seeen in the main gallery carousel, or at your profile(neither of which are close to done, keep checking back on my progress!)</p>
                <p>Currently hosted on an AWS EC2 instance via an Nginx server and PM2</p>
                <p>Stretch goals include user interactivity and maybe a rock-paper-scissors game system (tarot-sham-bo?)</p>
            </div>
            {/* <button onClick={handleClick}>Show All Cards</button> */}

        </>
    );
}

export default Splash;
