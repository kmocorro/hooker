import React from 'react';
import { Link } from 'react-router-dom';
import Auther from './components/Auther';
import axios from 'axios';

export default () => {

    function isLoggedIn(){
        let tokener = getToken();
        return tokener; //blnk false
    }

    function getToken(){
        return localStorage.getItem('ldap_token');
    }

    function homeServer(){
        return axios.get(`http://dev-metaspf401.sunpowercorp.com:8080/`, {withCredentials: true})
        .then(res => {
            let prototypeList = res.data.meta_meta.prototypeList;

            return prototypeList;
        })
        .catch(err => {

        });
    }

    const protoList = homeServer();

    return (
        <div>
            { isLoggedIn()
                ? 
                <div>
                    <ul>
                        {protoList.map(proto => (
                            <li key={proto.id}>{proto.name}</li>
                        ))}
                    </ul>
                    <Link to="/logout">logout</Link>
                </div>

                : <Auther />
            }
        </div>

    )
}
