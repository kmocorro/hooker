import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default () => {

    const manufacturing = useHidden(true);
    const visualFactory = useHidden(true);
    const uploaders = useHidden(true);

    function useHidden(bool){
        const [ value, setValue ] = useState(bool);

        function handleOnClick(e){
            if(value){
                setValue(false);
            } else {
                setValue(true);
            }
        }

        return {
            value,
            handleOnClick: handleOnClick
        }
        
    }
    
    return (
        <div style={{
            "position": "sticky",
            top: "110px",
        }}>
            <div style={{
                width: "160px",
            }}>
                <nav style={{display: "block"}}>
                    <ul style={{listStyle: "none"}}>
                        <li>
                            <Link to="/" style={{
                                display: "flex",
                                alignItems: "flex-start",
                                cursor: "pointer",
                                color: "rgb(51, 51, 51)",
                                fontSize: "13px",
                                wordBreak: "break-word",
                                paddingTop: "8px",
                                paddingBottom: "8px",
                                textDecoration: "none",
                            }}>
                            Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/" style={{
                                display: "flex",
                                alignItems: "flex-start",
                                cursor: "pointer",
                                color: "rgb(51, 51, 51)",
                                fontSize: "13px",
                                wordBreak: "break-word",
                                paddingTop: "8px",
                                paddingBottom: "8px",
                                textDecoration: "none",
                            }}>
                            Operations
                            </Link>
                        </li>
                        <li>
                            <Link to="/" style={{
                                display: "flex",
                                alignItems: "flex-start",
                                cursor: "pointer",
                                color: "rgb(51, 51, 51)",
                                fontSize: "13px",
                                wordBreak: "break-word",
                                paddingTop: "8px",
                                paddingBottom: "8px",
                                textDecoration: "none",
                            }} onClick={manufacturing.handleOnClick} >
                            Manufacturing
                            </Link>
                            <ul style={{
                                //marginLeft: "calc(26px)",
                                paddingLeft: "20px",
                                maxHeight: "400px",
                                flex: "1 0 100%",
                                overflow: "hidden",
                                transition: "all 0.3s ease-in-out 0s",
                                listStyle: "none"
                            }}  hidden={manufacturing.value}>
                                <li>
                                    <Link to="/" style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        cursor: "pointer",
                                        color: "rgb(51, 51, 51)",
                                        fontSize: "13px",
                                        wordBreak: "break-word",
                                        paddingTop: "8px",
                                        paddingBottom: "8px",
                                        textDecoration: "none"
                                    }}>
                                    Aging Lots
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        cursor: "pointer",
                                        color: "rgb(51, 51, 51)",
                                        fontSize: "13px",
                                        wordBreak: "break-word",
                                        paddingTop: "8px",
                                        paddingBottom: "8px",
                                        textDecoration: "none"
                                    }}>
                                    Cycletime
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        cursor: "pointer",
                                        color: "rgb(51, 51, 51)",
                                        fontSize: "13px",
                                        wordBreak: "break-word",
                                        paddingTop: "8px",
                                        paddingBottom: "8px",
                                        textDecoration: "none"
                                    }}>
                                    Lot Tracker
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        cursor: "pointer",
                                        color: "rgb(51, 51, 51)",
                                        fontSize: "13px",
                                        wordBreak: "break-word",
                                        paddingTop: "8px",
                                        paddingBottom: "8px",
                                        textDecoration: "none"
                                    }}>
                                    OST
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        cursor: "pointer",
                                        color: "rgb(51, 51, 51)",
                                        fontSize: "13px",
                                        wordBreak: "break-word",
                                        paddingTop: "8px",
                                        paddingBottom: "8px",
                                        textDecoration: "none"
                                    }} onClick={visualFactory.handleOnClick} >
                                    Visual Factory
                                    </Link>
                                </li>
                                <ul style={{
                                    //marginLeft: "calc(26px)",
                                    paddingLeft: "20px",
                                    maxHeight: "400px",
                                    flex: "1 0 100%",
                                    overflow: "hidden",
                                    transition: "all 0.3s ease-in-out 0s",
                                    listStyle: "none"
                                }}  hidden={visualFactory.value}>
                                    <li>
                                        <Link to="/" style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            cursor: "pointer",
                                            color: "rgb(51, 51, 51)",
                                            fontSize: "13px",
                                            wordBreak: "break-word",
                                            paddingTop: "8px",
                                            paddingBottom: "8px",
                                            textDecoration: "none"
                                        }}>
                                        Fab4
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            cursor: "pointer",
                                            color: "rgb(51, 51, 51)",
                                            fontSize: "13px",
                                            wordBreak: "break-word",
                                            paddingTop: "8px",
                                            paddingBottom: "8px",
                                            textDecoration: "none"
                                        }}>
                                        Poly Hydra
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            cursor: "pointer",
                                            color: "rgb(51, 51, 51)",
                                            fontSize: "13px",
                                            wordBreak: "break-word",
                                            paddingTop: "8px",
                                            paddingBottom: "8px",
                                            textDecoration: "none"
                                        }}>
                                        Poly LS LP1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            cursor: "pointer",
                                            color: "rgb(51, 51, 51)",
                                            fontSize: "13px",
                                            wordBreak: "break-word",
                                            paddingTop: "8px",
                                            paddingBottom: "8px",
                                            textDecoration: "none"
                                        }}>
                                        Poly LS LP2
                                        </Link>
                                    </li>
                                </ul>
                            </ul>
                        </li>
                        <li>
                            <Link to="/" style={{
                                display: "flex",
                                alignItems: "flex-start",
                                cursor: "pointer",
                                color: "rgb(51, 51, 51)",
                                fontSize: "13px",
                                wordBreak: "break-word",
                                paddingTop: "8px",
                                paddingBottom: "8px",
                                textDecoration: "none",
                            }}>
                            Engineering
                            </Link>
                        </li>
                        <li>
                            <Link style={{
                                display: "flex",
                                alignItems: "flex-start",
                                cursor: "pointer",
                                color: "rgb(51, 51, 51)",
                                fontSize: "13px",
                                wordBreak: "break-word",
                                paddingTop: "8px",
                                paddingBottom: "8px",
                                textDecoration: "none",
                            }} onClick={uploaders.handleOnClick}>
                            Uploader
                            </Link>
                            <ul style={{
                                //marginLeft: "calc(26px)",
                                paddingLeft: "20px",
                                maxHeight: "400px",
                                flex: "1 0 100%",
                                overflow: "hidden",
                                transition: "all 0.3s ease-in-out 0s",
                                listStyle: "none"
                            }}  hidden={uploaders.value}>
                                <li>
                                    <Link to="/uploader/rmp" style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        cursor: "pointer",
                                        color: "rgb(51, 51, 51)",
                                        fontSize: "13px",
                                        wordBreak: "break-word",
                                        paddingTop: "8px",
                                        paddingBottom: "8px",
                                        textDecoration: "none"
                                    }}>
                                    RMP
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}