import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
//makes person icon clickable - iconbutton
import IconButton from "@material-ui/core/IconButton";
//"chat" icon
import PanToolRoundedIcon from '@mui/icons-material/PanToolRounded';
//the logo
import FIGHTR from './images/FIGHTR.png'

function Header() {
    return( 
        <div className = "header">
            <IconButton>
            <PersonIcon fontSize ="large" className = "header_icon"/> 
            </IconButton>

            <img className = "header_logo"
            src = {FIGHTR}
            />

            <IconButton>
                <PanToolRoundedIcon fontSize = "large" className = "header_icon" />
            </IconButton>
        </div>
    )
}

export default Header