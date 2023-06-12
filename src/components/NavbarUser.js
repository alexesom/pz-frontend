import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const NavbarUser = () => {
    const [cookies] = useCookies(['username']);
    const username = cookies.username;

    const isUserLoggedIn = Boolean(username);
    const linkTo = isUserLoggedIn ? '/profile' : '/login';
    const buttonLabel = isUserLoggedIn ? `Hello, ${username}` : 'Moje konto';

    return (
        <div className="d-flex align-items-center gap-2">
            <Link to={linkTo} className="btn text-white bg-pw-gray not-rounded">
                {buttonLabel}
            </Link>
        </div>
    );
};

export default NavbarUser;
