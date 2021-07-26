import React from 'react'
import Brand from '../brand.png'
import { NavLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { motion } from 'framer-motion'
import './LargeMenu.css'

const navLgVariants = {
    hidden: {
        x: '-10vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 40,
            mass: .2,
            damping: 10,
            when: 'beforeChildren'
        }
    }
}

const brandLgVariants = {
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

const LargeMenu = () => {
    return (
        <motion.nav 
            className="nav-lg"
            variants={navLgVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="dfa-lg">
                <motion.img 
                    src={Brand} 
                    alt="Brand of Dev" 
                    className="brand-lg"
                    variants={brandLgVariants}
                />
            </div>
            <ul>
                <li><NavLink className="navlink" to="/home">Home</NavLink></li>
                <li><NavLink className="navlink" to="/base">Base</NavLink></li>
                <li><NavLink className="navlink" to="/toppings">Toppings</NavLink></li>
                <li><NavLink className="navlink" to="/order">Order</NavLink></li>
            </ul>
            <div className="langs-lg">
                <Typography 
                    variant="caption" 
                    className="lang"
                    onClick={() => console.log('fr')}
                >fr</Typography>
                <Typography 
                    variant="caption" 
                    style={{display: 'block'}}
                >|</Typography>
                <Typography 
                    variant="caption" 
                    className="lang"
                    onClick={() => console.log('en')}
                >en</Typography>
            </div>
        </motion.nav>
    )
}

export default LargeMenu
