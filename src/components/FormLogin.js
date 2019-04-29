import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {

    const username = useInputer('');
    const password = useInputer('');

    function useInputer(init){
        const [ value, setValue ] = useState(init);

        function handleChange(e){
            setValue(e.target.value);
        }

        return {
            value: value,
            handleChange
        }
    }
    
    function handleSubmit(e){
        e.preventDefault();

        let credentials = { username: username.value, password: password.value };
        postLoginPromise(credentials).then(res => {console.log(res)});
    }

    function postLoginPromise(credentials){
        return axios.post(`http://dev-metaspf401.sunpowercorp.com:8080/api/login`, credentials, {withCredentials: true})
        .then(response => {
            console.log(response.data);

            axios.get(`http://dev-metaspf401.sunpowercorp.com:8080/`, {withCredentials: true});
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            <div className="col-md-3">
                <form
                    onSubmit={handleSubmit}
                >   
                    <fieldset>
                        <div className="form-group">
                        <div className="col-md-12">
                            <h2 style={{textAlign: 'center', padding:'10px'}}>meta/fab4</h2>
                        </div>
                        <small className="form-text">Username</small>
                            <input type="text" placeholder="username" className="form-control form-control-sm" required value={username.value} onChange={username.handleChange} />
                        </div>

                        <div className="form-group">    
                        <small className="form-text">Password</small>
                            <input type="password" placeholder="password" className="form-control form-control-sm" required value={password.value} onChange={password.handleChange} />
                        </div>
                        <small className="form-text text-muted" style={{paddingTop: '10px', paddingBottom: '10px'}}>By logging in, you indicate that you have read and agree meta's Terms of Service.</small>
                        <input type="submit" value="login"  className="btn btn-outline-primary btn-block"/>
                    </fieldset>
                </form>
            </div>
        </div>
    );

}