import React from 'react';
import { Link } from 'react-router-dom';
import Auther from './components/Auther';

export default () => {

    function isLoggedIn(){
        let tokener = getToken();
        return tokener; //blnk false
    }

    function getToken(){
        return localStorage.getItem('ldap_token');
    }

    return (
        <div>
            { isLoggedIn()
                ? 
                <div>
                    <h1>hello</h1>
                    <Link to="/logout">logout</Link>
                </div>

                : <Auther />
            }
        </div>

    )
}
