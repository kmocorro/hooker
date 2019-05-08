import React from 'react';
import Auther from './components/Auther';
import Home from './pages/Home';


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
                    <Auther />
                </div>
                : 
                <div>
                    <Home/>
                </div>
            }
        </div>

    )
}
