import React from 'react'
import LargeMenu from './large/LargeMenu'
import MediumMenu from './medium/MediumMenu'
import SmallMenu from './small/SmallMenu'
import './menu.css'

const Menu = () => {    
    return (
        <div id="back-to-top-anchor">
            <div className="lg">
                <LargeMenu />
            </div>
            <div className="md">
                <MediumMenu />
            </div>
            <div className="sm">
                <SmallMenu />
            </div>
        </div>
    )
}

export default Menu
