import React, { useState } from 'react';
import axios from 'axios';
import './RMP.css';

export default () => {

    const [ file, setFile ] = useState(null);
    const [ selectedFile, setSelectedFile ] = useState(null);
    const [ responseFromUpload, setResponseFromUpload ] = useState(null);
    const [ okResponseFromUpload, setOkResponseFromUpload ] = useState(null);
    const [ errResponseFromUpload, setErrResponseFromUpload ] = useState(null);

    function handleFileChange(e){
        setFile(e.target.files[0]);

        if(e.target.files[0]){
            setSelectedFile(e.target.files[0].name);
        } else {
            setSelectedFile('Choose file');
        }
        
    }

    function onClickFileUpload(e){
        setResponseFromUpload(null);
        setOkResponseFromUpload(null);
        setErrResponseFromUpload(null);
    }

    function onFormSubmit(e){
        e.preventDefault();
        document.getElementById('rmp_submit_button').disabled = true;
        document.getElementById('rmp_file_browser').disabled = true;

        uploadFile(file).then((res) => {
            if(res.data){
                setFile(null);
                setSelectedFile('Choose file');
            }
            if(res.data.OK.length > 0){
                setOkResponseFromUpload(res.data.OK);
            }
            if(res.data.ERR.length > 0){
                setErrResponseFromUpload(res.data.ERR);
            }
            if(res.data.OK.length > 0 && res.data.ERR.length == 0){
                setResponseFromUpload('All worksheets has been uploaded.');

            } else if(res.data.OK.length > 0 && res.data.ERR.length > 1) {
                setResponseFromUpload('Warning! Some worksheets was not uploaded.');
            }
        });
    }

    function uploadFile(file){

        const data = new FormData();
        const configFile = {
            headers: {'content-type': 'multipart/form-data'}
        }

        data.append('file', file);

        return axios.post('http://dev-metaspf401.sunpowercorp.com:8080/api/uploader/rmp', data, {withCredentials: true, configFile})
        .then(res => {
            if(res.status >= 200 && res.status < 300 ){

                document.getElementById('rmp_submit_button').disabled = false;
                document.getElementById('rmp_file_browser').disabled = false;

                console.log(res.data);

                return res;
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
    
        <div className="col-md-5" style={{marginTop: '20px'}}>
            <div className="card border-light">
            <div className="card-body">
                <h4 className="card-title">RMP</h4>
                <h6 className="card-subtitle mb-2 text-muted">uploader</h6>
                <form
                    onSubmit={onFormSubmit}
                    id="upload_file"
                >
                    <div className="form-group">
                        <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" id="rmp_file_browser" className="custom-file-input" required onClick={onClickFileUpload} onChange={handleFileChange}/>
                            <label className="custom-file-label" >
                                {
                                    selectedFile
                                }
                            </label>
                        </div>
                        <div className="input-group-append">
                            <input type="submit" className="input-group-text" id="rmp_submit_button" defaultValue="Upload" />
                        </div>
                        </div>
                        <div>
                            <p className="lead">{responseFromUpload}</p>
                            <ul className="list-group">
                                {okResponseFromUpload ? 
                                okResponseFromUpload.map(ok => (
                                    <li key={ok} className="list-group-item d-flex justify-content-between align-items-center">
                                        {ok}
                                        <span className="badge badge-success">OK</span>
                                    </li>
                                )):<></>}
                                {errResponseFromUpload ?
                                errResponseFromUpload.map(err => (
                                    <li key={err} className="list-group-item d-flex justify-content-between align-items-center">
                                        {err}
                                        <span className="badge badge-danger">Error</span>
                                    </li>
                                )):<></>}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>

    )
   
}