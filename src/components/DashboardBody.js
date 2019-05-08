import React from 'react';
import ReportsBody from './ReportsBody'

export default () => {
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
                        }}>Dashboard (this is sample data)*
                        </h2>
                        <div style={{
                            marginTop: "0px",
                            marginLeft: "16px",
                            display: "flex",
                            WebkitBoxPack: "start",
                            justifyContent: "flex-start"
                        }}>
                            <span style={{marginRight: "0px"}}>
                                <button style={{
                                    display: "inline-flex",
                                    verticalAlign: "middle",
                                    WebkitBoxAlign: "center",
                                    alignItems: "center",
                                    WebkitBoxPack: "center",
                                    justifyContent: "center",
                                    minWidth: "96px",
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
                                    background: "rgb(200, 200, 200)",
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderColor: "rgb(240, 240, 240)",
                                    borderImage: "initial",
                                    borderRadius: "3px",
                                    padding: "0px 24px",
                                    transition: "border-color 0.25s ease 0s, background 0.25s ease 0s",
                                }}>
                                    <i style={{
                                        marginRight: "8px",
                                        display: "inline-block",
                                        lineHeight: "1",
                                        width: "16px",
                                        height: "16px",
                                    }}>+</i>
                                    <span style={{
                                        display: "inline-block",
                                        verticalAlign: "middle",
                                        lineHeight: "normal",
                                        marginTop: "1px"
                                    }}>
                                    create ops report
                                    </span>
                                </button>
                            </span>
                        </div>
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
                                    justifyContent: "center",
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
                                    <div style={{
                                        width: "50%"
                                    }}>
                                        <span style={{
                                            display: "block",
                                            textTransform: "uppercase",
                                            fontSize: "12px",
                                            letterSpacing: "1px",
                                        }}>
                                        median efficiency (%)
                                        </span>
                                        <strong style={{
                                            color: "rgb(0, 0, 0)",
                                            fontSize: "34px",
                                            fontWeight: "400",
                                            height: "50px",
                                            display: "block",
                                        }}>
                                        25.08
                                        </strong>
                                        <span style={{
                                            color:"green",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400"
                                            }}>
                                            ↑ 0.44%
                                        </span>
                                        <small style={{
                                            opacity: "0.6",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400",
                                        }}>
                                        vs yesterday
                                        </small>
                                    </div>
                                    <div style={{
                                        width: "50%"
                                    }}>
                                        <span style={{
                                            display: "block",
                                            textTransform: "uppercase",
                                            fontSize: "12px",
                                            letterSpacing: "1px",
                                        }}>
                                        Bin Ne (%)
                                        </span>
                                        <strong style={{
                                            color: "rgb(0, 0, 0)",
                                            fontSize: "34px",
                                            fontWeight: "400",
                                            height: "50px",
                                            display: "block",
                                        }}>
                                        65.5
                                        </strong>
                                        <span style={{
                                            color:"green",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400"
                                            }}>
                                            ↑ 2.4% 
                                        </span>
                                        <small style={{
                                            opacity: "0.6",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400",
                                        }}>
                                        vs yesterday
                                        </small>
                                    </div>
                                    <div style={{
                                        width: "50%"
                                    }}>
                                        <span style={{
                                            display: "block",
                                            textTransform: "uppercase",
                                            fontSize: "12px",
                                            letterSpacing: "1px",
                                        }}>
                                        cosmetics (%)
                                        </span>
                                        <strong style={{
                                            color: "rgb(0, 0, 0)",
                                            fontSize: "34px",
                                            fontWeight: "400",
                                            height: "50px",
                                            display: "block",
                                        }}>
                                        92.0
                                        </strong>
                                        <span style={{
                                            color:"green",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400"
                                            }}>
                                            ↑ 1.0 %
                                        </span>
                                        <small style={{
                                            opacity: "0.6",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400",
                                        }}>
                                        vs yesterday
                                        </small>
                                    </div>
                                    <div style={{
                                        width: "50%"
                                    }}>
                                        <span style={{
                                            display: "block",
                                            textTransform: "uppercase",
                                            fontSize: "12px",
                                            letterSpacing: "1px",
                                        }}>
                                        Cycletime (day)
                                        </span>
                                        <strong style={{
                                            color: "rgb(0, 0, 0)",
                                            fontSize: "34px",
                                            fontWeight: "400",
                                            height: "50px",
                                            display: "block",
                                        }}>
                                        1.72
                                        </strong>
                                        <span style={{
                                            color:"red",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400"
                                            }}>
                                            ↑ 0.42 day
                                        </span>
                                        <small style={{
                                            opacity: "0.6",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400",
                                        }}>
                                        vs yesterday
                                        </small>
                                    </div>
                                </div>
                            </div>
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
                                    justifyContent: "center",
                                    WebkitBoxFlex: "1",
                                    flexGrow: "1",
                                    minHeight: "84px",
                                    textAlign: "left",
                                    fontSize: "16px",
                                    color: "rgb(102, 102, 102)",
                                    marginBottom: "20px",
                                    padding: "14px 0px",
                                    borderTop: "1px solid rgb(241, 241, 241)",
                                    borderBottom: "1px solid rgb(241, 241, 241)",
                                }}>
                                    <div style={{
                                        width: "50%"
                                    }}>
                                        <span style={{
                                            display: "block",
                                            textTransform: "uppercase",
                                            fontSize: "12px",
                                            letterSpacing: "1px",
                                        }}>
                                        Financial Yield (%)
                                        </span>
                                        <strong style={{
                                            color: "rgb(0, 0, 0)",
                                            fontSize: "34px",
                                            fontWeight: "400",
                                            height: "50px",
                                            display: "block",
                                        }}>
                                        89.8
                                        </strong>
                                        <span style={{
                                            color:"green",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400"
                                            }}>
                                            ↑ 2.2%
                                        </span>
                                        <small style={{
                                            opacity: "0.6",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400",
                                        }}>
                                        vs last 3 days
                                        </small>
                                    </div>
                                    <div style={{
                                        width: "50%"
                                    }}>
                                        <span style={{
                                            display: "block",
                                            textTransform: "uppercase",
                                            fontSize: "12px",
                                            letterSpacing: "1px",
                                        }}>
                                        Electrical Yield (%)
                                        </span>
                                        <strong style={{
                                            color: "rgb(0, 0, 0)",
                                            fontSize: "34px",
                                            fontWeight: "400",
                                            height: "50px",
                                            display: "block",
                                        }}>
                                        92.3
                                        </strong>
                                        <span style={{
                                            color:"green",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400"
                                            }}>
                                            ↑ 1.2%
                                        </span>
                                        <small style={{
                                            opacity: "0.6",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400",
                                        }}>
                                        vs last 3 days
                                        </small>
                                    </div>
                                    <div style={{
                                        width: "50%"
                                    }}>
                                        <span style={{
                                            display: "block",
                                            textTransform: "uppercase",
                                            fontSize: "12px",
                                            letterSpacing: "1px",
                                        }}>
                                        Mechanical Yield (%)
                                        </span>
                                        <strong style={{
                                            color: "rgb(0, 0, 0)",
                                            fontSize: "34px",
                                            fontWeight: "400",
                                            height: "50px",
                                            display: "block",
                                        }}>
                                        90.2
                                        </strong>
                                        <span style={{
                                            color:"red",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400"
                                            }}>
                                            ↓ 1.4% 
                                        </span>
                                        <small style={{
                                            opacity: "0.6",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400",
                                        }}>
                                        vs last 3 days
                                        </small>
                                    </div>
                                    <div style={{
                                        width: "50%"
                                    }}>
                                        <span style={{
                                            display: "block",
                                            textTransform: "uppercase",
                                            fontSize: "12px",
                                            letterSpacing: "1px",
                                        }}>
                                        Broken Wafers (dppm)
                                        </span>
                                        <strong style={{
                                            color: "rgb(0, 0, 0)",
                                            fontSize: "34px",
                                            fontWeight: "400",
                                            height: "50px",
                                            display: "block",
                                        }}>
                                        12,060
                                        </strong>
                                        <span style={{
                                            color:"red",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400"
                                            }}>
                                            ↑ 209
                                        </span>
                                        <small style={{
                                            opacity: "0.6",
                                            display: "block",
                                            fontSize: "12px",
                                            fontWeight: "400",
                                        }}>
                                        vs yesterday
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <ReportsBody />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}