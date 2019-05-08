import React from 'react'

export default () => {

    return (
        <div style={{
            marginBottom: "0px",
            gridTemplateColumns: "1fr 1fr",
            display: "grid",
            gap: "40px 40px",
        }}>
            <div style={{

            }}>
                <div>
                    <h4 style={{
                        marginTop: "0px",
                        fontWeight: "500",
                        textTransform: "capitalize",
                        paddingBottom: "6px",
                        letterSpacing: "0.5px",
                        borderBottom: "1px solid rgb(208, 210, 211)",
                        fontSize: "14px",
                        color: "rgb(33, 33, 33)",
                        lineHeight: "1.3",
                        margin: "1em 0px",
                    }}>
                        Latest Report Feed
                    </h4>
                    <ul style={{
                        marginBottom: "0px",
                        marginTop: "20px",
                        listStyle: "none"
                    }}>
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
                            marginInlineEnd: "0px"
                        }}>
                            There are no reports in your feed yet
                        </p>
                    </ul>
                </div>
            </div>

            <div style={{

            }}>
                <div>
                    <h4 style={{
                        marginTop: "0px",
                        fontWeight: "500",
                        textTransform: "capitalize",
                        paddingBottom: "6px",
                        letterSpacing: "0.5px",
                        borderBottom: "1px solid rgb(208, 210, 211)",
                        fontSize: "14px",
                        color: "rgb(33, 33, 33)",
                        lineHeight: "1.3",
                        margin: "1em 0px",
                    }}>
                        Your Reports History
                    </h4>
                    <ul style={{
                        marginBottom: "0px",
                        marginTop: "20px",
                        listStyle: "none"
                    }}>
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
                            marginInlineEnd: "0px"
                        }}>
                            You don't have any reports yet
                        </p>
                    </ul>
                </div>
            </div>
        </div>
    )

}