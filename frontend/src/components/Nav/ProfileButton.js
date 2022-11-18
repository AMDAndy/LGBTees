import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div className='dropdown'>
            <button className='btn btn-secondary btn-lg dropdown-toggle'>
                {/* <i className="fas fa-user-circle" /> */} Bigger text here
            </button>
            <div className='dropdown-menu'>
                <button class="dropdown-item" type="button">Action</button>
                <button class="dropdown-item" type="button">Another action</button>
                <button class="dropdown-item" type="button">Something else here</button>
                {/* <div className='dropdown-item'>{user.username}</div>
        <div className='dropdown-item'>{user.email}</div> */}
                {/* <div className='dropdown-item' onClick={logout}>Log Out</div> */}
            </div>
        </div>
    );
}

export default ProfileButton;
