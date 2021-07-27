import React from 'react'
import Facebook from '@material-ui/icons/Facebook'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Twitter from '@material-ui/icons/Twitter'
import { IconButton } from '@material-ui/core'
import './SocialMediaIcons.css'

const SocialMediaIcons = () => {
    return (
        <div className="socialIcons-lg">
            <IconButton>
                <Facebook />
            </IconButton>
            <IconButton>
                <LinkedIn />
            </IconButton>
            <IconButton>
                <Twitter />
            </IconButton>
        </div>
    )
}

export default SocialMediaIcons
