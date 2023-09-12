import { Typography } from '@material-ui/core'
import React from 'react'
import { motion } from 'framer-motion'

const boxVariants = {
    hidden: { scale: 0 },
    visible: { 
        scale: 1,
        transition: {
            type: 'spring',
        }
    }
}

const TechnoList = ({ webTech }) => {
    return (
        <div>
            <div>
                <Typography variant="subtitle1">Téchnologies web</Typography>
                <div className="boxes">
                    {webTech && webTech.map(wt => (
                        <motion.div 
                            key={wt.id}
                            variants={boxVariants}
                        >{ wt.name }</motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechnoList
