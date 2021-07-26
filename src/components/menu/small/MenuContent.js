import React from 'react'
import { Facebook, HomeOutlined, StarOutline, EmailOutlined, LinkedIn, Twitter, Home, Email, Star } from '@material-ui/icons'
import { NavLink, useLocation } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { motion, AnimatePresence } from 'framer-motion'

const bgVariants = {
    hidden: { opacity: 0, transition: { delay: .3 } },
    visible: { opacity: 1 }
}

const menuSmVariants = {
    hidden: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 40,
            mass: .2,
            damping: 10,
        }
    },
    visible: {
        y: '70vh',
        transition: {
            type: 'spring',
            stiffness: 40,
            mass: .2,
            damping: 10,
        }
    }
}

const MenuContent = ({open, setOpen}) => {

    const location = useLocation()
    const icons = [
        { 
            pathname: '/home', 
            iconContained: <Home style={{fontSize: 20}} />, 
            iconOutlined: <HomeOutlined style={{fontSize: 20}} />
        },
        { 
            pathname: '/base', 
            iconContained: <Star style={{fontSize: 20}} />, 
            iconOutlined: <StarOutline style={{fontSize: 20}} />
        },
        { 
            pathname: '/toppings', 
            iconContained: <Home style={{fontSize: 20}} />, 
            iconOutlined: <HomeOutlined style={{fontSize: 20}} />
        },
        { 
            pathname: '/order', 
            iconContained: <Email style={{fontSize: 20}} />, 
            iconOutlined: <EmailOutlined style={{fontSize: 20}} />
        }
    ]

    const handleIcons = pathname => {
        const recent = icons.find(i => i.pathname === pathname)
        return recent.pathname === location.pathname ? recent.iconContained : recent.iconOutlined
    }
    
    return (
        <AnimatePresence exitBeforeEnter>
            { open && (
                <motion.div
                    className="background-menu"
                    variants={bgVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={setOpen}
                >
                    <motion.div className="menu-content-sm"
                        variants={menuSmVariants}
                    >
                        <ul>
                            <li onClick={setOpen}>
                                <NavLink className="navlink" to="/home">
                                    <Typography variant="caption">Home</Typography>
                                    { handleIcons('/home') }
                                </NavLink>
                            </li>
                            <li onClick={setOpen}>
                                <NavLink className="navlink" to="/base">
                                    <Typography variant="caption">Base</Typography>
                                    { handleIcons('/base') }
                                </NavLink>
                            </li>
                            <li onClick={setOpen}>
                                <NavLink className="navlink" to="/toppings">
                                    <Typography variant="caption">Toppings</Typography>
                                    { handleIcons('/toppings') }
                                </NavLink>
                            </li>
                            <li onClick={setOpen}>
                                <NavLink className="navlink" to="/order">
                                    <Typography variant="caption">Order</Typography>
                                    { handleIcons('/order') }
                                </NavLink>
                            </li>
                        </ul>
                        <div className="dfa-socialIcons-sm">
                            <Facebook />
                            <Twitter />
                            <LinkedIn />
                        </div>
                        <div className="langs-sm">
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
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}

export default MenuContent
