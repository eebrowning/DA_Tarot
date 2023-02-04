import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom'
import Navigation from "./Navigation.css";
function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    const toggleMenu = () => {
        if (showMenu === true) setShowMenu(false)
        else setShowMenu(true)
    };

    useEffect(() => {
        // if (!showMenu) return;

        // const closeMenu = () => {
        //     setShowMenu(false);
        // };

        // document.addEventListener('click', closeMenu);

        // return () => document.removeEventListener("click", closeMenu);
    }, []);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    return (
        <>
            <div id='profile-menu' onClick={toggleMenu}>
                {/* <i className="fas fa-user-circle" /> */}
                <img onClick={toggleMenu} height='25x' width={'25px'} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61f1b112-2cb0-40b0-a6b9-9ab92066e5c7/d33mwsf-0dd81126-6d91-4b0d-905c-886a1a41566c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi82MWYxYjExMi0yY2IwLTQwYjAtYTZiOS05YWI5MjA2NmU1YzcvZDMzbXdzZi0wZGQ4MTEyNi02ZDkxLTRiMGQtOTA1Yy04ODZhMWE0MTU2NmMucG5nIn1dXX0.1vwL8FOjsywblgj9w4zBe3Cakiyvmmi412HCfZgfM60" />
            </div>
            <button id='dropdown-button' onClick={logout}>Log Out</button>
            {
                showMenu === true &&
                (
                    <ul className="profile-dropdown">
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>
                        </li>
                    </ul>
                )}
        </>
    );
}

export default ProfileButton;
