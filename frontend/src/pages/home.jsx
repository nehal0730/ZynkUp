import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';


function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const {addToUserHistory} = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }


    return (
        <div className="homePageWrapper">
            <nav className="navBar">
                <div className="navBrand">
                    <h3>ZynkUp</h3>
                </div>
                <div className="navActions">
                    <div className="historyGroup">
                        <IconButton onClick={() => { navigate("/history") }}>
                            <RestoreIcon />
                        </IconButton>
                        <span className="historyText">History</span>
                    </div>
                    <Button onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/auth")
                    }}>
                        Logout
                    </Button>
                </div>
            </nav>
            <main className="meetContainer">
                <section className="leftPanel">
                    <div className="leftPanelContent">
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>
                        <p className="subtitle">Connect, collaborate, and learn seamlessly with ZynkUp.</p>
                        <div className="meetingInputGroup">
                            <TextField 
                                onChange={e => setMeetingCode(e.target.value)} 
                                id="outlined-basic" 
                                label="Meeting Code" 
                                variant="outlined" 
                                className="meetingCodeInput"
                                // helperText="Enter your meeting code or room name"
                            />
                            <Button onClick={handleJoinVideoCall} variant='contained' className="joinButton">Join</Button>
                        </div>
                    </div>
                </section>
                <section className='rightPanel'>
                    <div className="rightPanelImageWrapper">
                        <img srcSet='/logo3.png' alt="ZynkUp Logo" className="rightPanelImage" />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default withAuth(HomeComponent)
