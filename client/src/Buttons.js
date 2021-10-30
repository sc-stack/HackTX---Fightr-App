import React from "react";
import "./Buttons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import SportsKabaddiOutlinedIcon from '@mui/icons-material/SportsKabaddiOutlined';
import IconButton from "@material-ui/core/IconButton";

function Buttons(){
    return <div className = "Buttons">
        <IconButton className = "Buttons_repeat">
            <ReplayIcon fontSize = "large" />
        </IconButton>
        <IconButton className = "Buttons_left">
            <CloseIcon fontSize = "large"/>
        </IconButton>
        <IconButton className = "Buttons_warning">
            <WarningRoundedIcon onClick = {handleClick}fontSize = "large"/>
        </IconButton>
        <IconButton className = "Buttons_right">
            <SportsKabaddiOutlinedIcon fontSize = "large"/>
        </IconButton>
    </div>
}

function handleClick(e) {
    e.preventDefault();
    const className = document.getElementsByName("card");
    console.log(className[0]);
}

export default Buttons;