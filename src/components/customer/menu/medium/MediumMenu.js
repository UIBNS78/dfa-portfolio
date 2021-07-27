import React from 'react'
import Brand from '../../../../brand.png'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'
import Facebook from '@material-ui/icons/Facebook'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Twitter from '@material-ui/icons/Twitter'
import { motion } from 'framer-motion'
import './MediumMenu.css'

const dfaMdVariants = {
    hidden: {
        y: '-50vh'
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

const navMdVariants = {
    hidden: {
        y: '-100vh'
    },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 40,
            mass: .2,
            damping: 10,
        }
    }
}

const MediumMenu = () => {
    return (
        <>
            <motion.nav 
                className="nav-md"
                variants={dfaMdVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="dfa-md">
                    <div className="dfa-left">
                        <img 
                            src={Brand} 
                            alt="Brand of Dev" 
                            className="brand-md"
                        />
                        <div className="dfa-texts">
                            <Typography variant="subtitle1">Dev Andriamihaja</Typography>
                            <Typography variant="caption">Développeur <span className="dfa-text-blue">WEB</span> et <span className="dfa-text-blue">MOBILE</span></Typography>
                        </div>
                    </div>
                    <div className="dfa-right">
                        <div className="dfa-socialIcons-tablette">
                            <Facebook />
                            <Twitter />
                            <LinkedIn />
                        </div>
                        <div className="langs-md">
                            <Typography 
                                variant="caption" 
                                className="lang"
                                onClick={() => console.log('fr')}
                            >Français</Typography>
                            <Typography 
                                variant="caption" 
                                className="lang"
                                onClick={() => console.log('en')}
                            >Anglais</Typography>
                        </div>
                    </div>
                </div>
            </motion.nav>
            <motion.div 
                className="menu-content-md"
                variants={navMdVariants}
                initial="hidden"
                animate="visible"
            >
                <ul>
                    <li><NavLink className="navlink" to="/home">A propos</NavLink></li>
                    <li><NavLink className="navlink" to="/skills">Compétences</NavLink></li>
                    <li><NavLink className="navlink" to="/works">Projets</NavLink></li>
                    <li><NavLink className="navlink" to="/contact">Contact</NavLink></li>
                </ul>
            </motion.div>
        </>
    )
}

export default MediumMenu
