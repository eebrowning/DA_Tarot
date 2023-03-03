import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { demoLogin } from '../../store/session';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);


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
                    {/* <img onClick={() => history.push('/')} id='nav-logo' src='https://fontmeme.com/permalink/220702/01a4e3f2e2dfca0efb0d85c9a5590637.png' /> */}

                    {/* <img onClick={() => history.push('/')} id='nav-logo' src='https://fontmeme.com/permalink/220703/1ef7f1b8fbea632b7949072dce294a0b.png' /> */}
                    <a href='/' style={{ textDecoration: 'none' }}>

                        {/* <p id='nav-logo'>DA: Tarot</p> */}
                        {/* <p id='nav-logo'>Dragon Age Tarot</p> */}

                    </a>
                </li>

                <li>
                </li>

                <li id={'right-nav-box'}>
                    <NavLink exact to="/cards">Show cards</NavLink>
                    {isLoaded && sessionLinks}
                    {sessionLinks}
                </li>

            </ul>
        </>
    );
}

export default Navigation;
