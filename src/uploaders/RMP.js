import React, { useState } from 'react';
import axios from 'axios';
import './RMP.css';

export default () => {

    const [ file, setFile ] = useState(null);
    const [ selectedFile, setSelectedFile ] = useState(null);
    const [ responseFromUpload, setResponseFromUpload ] = useState(null);

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
    }

    function onFormSubmit(e){
        e.preventDefault();

        uploadFile(file);
    }

    function uploadFile(file){

        const data = new FormData();
        const configFile = {
            headers: {'content-type': 'multipart/form-data'}
        }

        data.append('file', file);

        return axios.post('http://localhost:8080/api/uploader/rmp', data, {withCredentials: true, configFile})
        .then(res => {
            if(res.status >= 200 && res.status < 300 ){
                setResponseFromUpload('File has been uploaded');
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
                            <input type="file" className="custom-file-input" required onClick={onClickFileUpload} onChange={handleFileChange}/>
                            <label className="custom-file-label" >
                                {
                                    selectedFile
                                }
                            </label>
                        </div>
                        <div className="input-group-append">
                            <input type="submit" className="input-group-text" defaultValue="Upload" />
                        </div>
                        </div>
                        <div>
                            <p>{responseFromUpload}</p>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>

    )
   
}