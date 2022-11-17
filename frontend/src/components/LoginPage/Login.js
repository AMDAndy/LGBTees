import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className='form-group'>
            <label>
                Username or Email
                <input
                    type="text"
                    className='form-control'
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                    />
            </label>
            </div>
            <div className='form-group'>
            <label>
                Password
                <input
                className='form-control'
                type="password"

                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
                </div>
            <button className='btn btn-primary' type="submit">Log In</button>
        </form>
    );
}

export default LoginFormPage;
