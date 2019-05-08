import React from 'react';
import Auther from '../components/Auther';
import { Redirect } from 'react-router-dom';

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
                ? <Redirect to='/' />
                : <Auther />
            }
        </div>

    )
}
