import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { demoLogin } from '../../store/session';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser, 'sesh user')
    const dispatch = useDispatch();
    const history = useHistory()
    let sessionLinks;

    useEffect(() => {

    }, [dispatch])

    const handleClick = (e) => {
        e.preventDefault();

        return dispatch(demoLogin())
        // .catch(async (res) => {
        //     const data = await res.json();
        //     if (data && data.errors) setErrors(data.errors);
        // });
    }

    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink exact to="/profile">Your cards</NavLink>
                <NavLink to='/create'>New Card</NavLink>
                <ProfileButton user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>

                <button id={'demo-login'} onClick={handleClick}>Demo User</button>

            </>
        );
    }
    //TODO hamburger menu, especially for mobile!
    return (
        <>
            <ul id={'nav-bar-ul'}>
                <li>
                    <a href='/' style={{ textDecoration: 'none' }}>

                        <p id='nav-logo'>DA:T</p>
                        {/* <p id='nav-logo'>Dragon Age Tarot</p> */}

                    </a>
                </li>

                <li>
                </li>

                <li id={'right-nav-box'}>
                    <NavLink exact to="/cards">All cards</NavLink>

                    {isLoaded && sessionLinks}
                    {sessionLinks}
                </li>

            </ul>
        </>
    );
}

export default Navigation;
