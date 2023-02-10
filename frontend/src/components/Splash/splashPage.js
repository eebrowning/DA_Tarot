import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import ProfileButton from './ProfileButton';
import './splash.css';
// import { demoLogin } from '../../store/session';




function Splash() {
    // const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
    }, [dispatch])

    const handleClick = (e) => {
        e.preventDefault();

        history.push(`/cards`);
        // dispatch(thunkUpdatePlace(place)); NO! dispatch will go on submit of edit form!
    }
    return (
        <>
            <div className='splash'>
                <h2>Welcome to Dragon Age Tarot: </h2>
                <p>For now, this is a single-CRUD MERN app that creates tarot-like baseball cards for your favorite denizens of Thedas</p>
                <p>Stretch goals include user interactivity and maybe a rock-paper-scissors system</p>
            </div>
            <button onClick={handleClick}>Show All Cards</button>
        </>
    );
}

export default Splash;
