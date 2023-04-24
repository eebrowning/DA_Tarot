
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        let res = await dispatch(sessionActions.login({ credential, password }))
        // .catch(async (res) => {
        //     const data = await res.json();
        //     if (data && data.errors) setErrors(data.errors);
        //     console.log(data, errors, 'blah')
        // });

        console.log(res)
        if (!res.token) {
            setErrors([res.error])
            console.log(errors, 'errs in form')
        }
        else return res;

        // return dispatch(sessionActions.login({ credential, password }))
        //     .catch(async (res) => {
        //         const data = await res.json();
        //         if (data && data.errors) setErrors(data.errors);
        //         console.log(data, errors, 'blah')
        //     });
    }

    return (
        <span id={'login-box'}>

            <form id={'login-form'} onSubmit={handleSubmit}>
                <ul id='login-errors'>
                    {console.log(errors, 'errors rendering')}
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Email
                    <input
                        type="text"
                        value={credential}
                        placeholder={'case-sensitive'}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        placeholder={'password'}

                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Log In</button>
            </form>
        </span>
    );
}

export default LoginFormPage;
