import React, { useState } from 'react';
import axios from 'axios';

export default () => {

    const [ file, setFile ] = useState(null);
    const [ selectedFile, setSelectedFile ] = useState(null);
    const [ responseFromUpload, setResponseFromUpload ] = useState(null);
    const [ okResponseFromUpload, setOkResponseFromUpload ] = useState(null);
    const [ errResponseFromUpload, setErrResponseFromUpload ] = useState(null);
    const [ loadingBar, setLoadingBar ] = useState(true);
    const [ selectSubmit, setSelectSubmit ] = useState(false);

    function handleFileChange(e){
        setFile(e.target.files[0]);

        if(e.target.files[0]){
            setSelectedFile(e.target.files[0].name);
        } else {
            setSelectedFile('Choose file');
        }
        
    }

    function onClickFileUpload(e){
        setFile(null);
        setResponseFromUpload(null);
        setOkResponseFromUpload(null);
        setErrResponseFromUpload(null);

        document.getElementById('rmp_submit_button').disabled = false;
    }

    function onFormSubmit(e){
        e.preventDefault();
        document.getElementById('rmp_submit_button').disabled = true;
        document.getElementById('rmp_file_browser').disabled = true;
        
        setLoadingBar(false);
        setSelectSubmit(true);

        uploadFile(file).then((res) => {

            if(res.data.OK.length > 0){
                setOkResponseFromUpload(res.data.OK);
            }
            if(res.data.ERR.length > 0){
                setErrResponseFromUpload(res.data.ERR);
            }
            if(res.data.OK.length > 0 && res.data.ERR.length === 0){
                setResponseFromUpload('All worksheets has been uploaded.');

            } else if(res.data.OK.length > 0 && res.data.ERR.length > 1) {
                setResponseFromUpload('Warning! Some worksheets was not uploaded.');
            }


            setLoadingBar(true);
            setSelectSubmit(false);
            
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
    
        <div style={{
            width: "836px",
            marginLeft: "38px",
            paddingBottom: "50px",
        }}>
            <div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "10px 10px",
                }}>
                    <div id="barHeader" style={{
                        display: "flex",
                        WebkitBoxPack: "justify",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                    }}>
                        <h2 style={{
                            flex: "1 1 0%",
                            margin: "0px",
                            fontSize: "26px",
                            color: "rgb(33, 33, 33)",
                            fontWeight: "400",
                            lineHeight: "1.3",
                        }}>RMP Uploader
                        </h2>
                    </div>
                    
                    <div id="barBody">
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            WebkitBoxPack: "start",
                            justifyContent: "flex-start",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                WebkitBoxFlex: "1",
                                flexGrow: "1",
                                minHeight: "134px",
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    WebkitBoxPack: "center",
                                    justifyContent: "left",
                                    WebkitBoxFlex: "1",
                                    flexGrow: "1",
                                    minHeight: "84px",
                                    textAlign: "left",
                                    fontSize: "16px",
                                    color: "rgb(102, 102, 102)",
                                    marginTop: "20px",
                                    padding: "14px 0px",
                                    borderTop: "1px solid rgb(241, 241, 241)",
                                }}>
                                    <div id="loading_bar" hidden={loadingBar}>
                                        <p>Please wait...</p>
                                    </div>
                                    <form
                                        onSubmit={onFormSubmit}
                                        id="upload_file"
                                    >
                                        <div>
                                            <div id="former" hidden={selectSubmit}>
                                                <div>
                                                <div>
                                                    <input type="file" id="rmp_file_browser" required onClick={onClickFileUpload} onChange={handleFileChange}/>
                                                    <label>
                                                        {
                                                            selectedFile
                                                        }
                                                    </label>
                                                </div>
                                                <div>
                                                    <input type="submit" id="rmp_submit_button" defaultValue="Upload" />
                                                </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p>{responseFromUpload}</p>
                                                <ul>
                                                    {okResponseFromUpload ? 
                                                    okResponseFromUpload.map(ok => (
                                                        <li key={ok}>
                                                            {ok}
                                                            <span>OK</span>
                                                        </li>
                                                    )):<></>}
                                                    {errResponseFromUpload ?
                                                    errResponseFromUpload.map(err => (
                                                        <li key={err}>
                                                            {err}
                                                            <span>Error</span>
                                                        </li>
                                                    )):<></>}
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
   
}