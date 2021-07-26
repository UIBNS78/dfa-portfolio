import React, { useState } from 'react'
import Menu from '@material-ui/icons/Menu'
import Brand from '../brand.png'
import { motion } from 'framer-motion'
import MenuContent from './MenuContent'
import './SmallMenu.css'

const navSmVariants = {
    hidden: {
        y: '-10vw'
    },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 40,
            mass: .2,
            damping: 10,
            when: 'beforeChildren'
        }
    }
}

const brandSmVariants = {
    hidden: {
        scale: 0
    },
    visible: { 
        scale: 1,
        transition: {
            type: 'spring',
        }
    }
}

const SmallMenu = () => {
    
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => setShowMenu(!showMenu)

    return (
        <>
            <motion.nav 
                className="nav-sm"
                variants={navSmVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="dfa-sm">
                    <div className="dfa-logo">
                        <motion.img 
                            src={Brand} 
                            alt="Brand of Dev" 
                            className="brand-sm"
                            variants={brandSmVariants}
                        />
                    </div>
                    <div 
                        className="dfa-burger"
                        onClick={handleShowMenu}
                    >
                        <Menu />
                    </div>
                </div>
            </motion.nav>
            <MenuContent open={showMenu} setOpen={handleShowMenu} />
        </>
    )
}

export default SmallMenu
