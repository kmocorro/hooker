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
                                        <p style={{
                                            display: "block",
                                            textTransform: "uppercase",
                                            fontSize: "12px",
                                            letterSpacing: "1px",
                                        }}>Please wait...</p>
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
                                                    <div style={{
                                                        display: "block",
                                                        margin:"10px 0 "
                                                    }}>
                                                        <input style={{
                                                            display: "inline-flex",
                                                            verticalAlign: "middle",
                                                            WebkitBoxAlign: "center",
                                                            alignItems: "center",
                                                            WebkitBoxPack: "center",
                                                            justifyContent: "center",
                                                            minWidth: "200px",
                                                            minHeight: "48px",
                                                            lineHeight: "48px",
                                                            marginTop: "0px",
                                                            marginLeft: "0px",
                                                            textTransform: "uppercase",
                                                            whiteSpace: "nowrap",
                                                            letterSpacing: "1px",
                                                            fontSize: "12px",
                                                            fontWeight: "500",
                                                            color: "rgb(250, 250, 250)",
                                                            opacity: "1",
                                                            cursor: "pointer",
                                                            background: "rgb(235, 84, 36)",
                                                            borderWidth: "1px",
                                                            borderStyle: "solid",
                                                            borderColor: "rgb(235, 84, 36)",
                                                            borderImage: "initial",
                                                            borderRadius: "3px",
                                                            padding: "0px 24px",
                                                            transition: "border-color 0.25s ease 0s, background 0.25s ease 0s",
                                                        }} type="submit" id="rmp_submit_button" defaultValue="Upload" />
                                                    </div>

                                                    <p style={{
                                                        lineHeight: "1.6",
                                                        color: "rgb(33, 33, 33)",
                                                        fontSize: "14px",
                                                        fontWeight: "400",
                                                        margin: "1em 0px",
                                                        display: "block",
                                                        marginBlockStart: "1em",
                                                        marginBlockEnd: "1em",
                                                        marginInlineStart: "0px",
                                                        marginInlineEnd: "0px",
                                                        opacity: "0.5"
                                                    }}>
                                                        Upload using the standard format
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>{responseFromUpload}</p>
                                                <ul style={{
                                                    paddingLeft: "20px",
                                                    flex: "1 0 100%",
                                                    overflow: "hidden",
                                                    transition: "all 0.3s ease-in-out 0s",
                                                    listStyle: "none"
                                                }}>
                                                    {okResponseFromUpload ? 
                                                    okResponseFromUpload.map(ok => (
                                                        <li key={ok}>
                                                            {ok}
                                                            <span>...OK</span>
                                                        </li>
                                                    )):<></>}
                                                    {errResponseFromUpload ?
                                                    errResponseFromUpload.map(err => (
                                                        <li key={err}>
                                                            {err}
                                                            <span>...Error</span>
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