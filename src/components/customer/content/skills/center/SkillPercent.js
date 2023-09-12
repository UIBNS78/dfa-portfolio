import React from 'react'
import Typography from '@material-ui/core/Typography'
import { motion } from 'framer-motion'

const valuePercentVariants = width => {
    return {
        hidden: { width: 0 },
        visible: {
            width: width + '%',
            transition: {
                duration: 1.5,
                delay: .2
            }
        },
    }
}

const textPercentVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            delay: 1.5
        }
    }
}

const SkillPercent = ({skills}) => {
    return (
        <div>
            <div className="title-percent">
                <Typography variant="inherit">{ skills.title }</Typography>
                <motion.div
                    variants={textPercentVariants}
                >
                    <Typography variant="caption">{ skills.percent } %</Typography>
                </motion.div>
            </div>
            <div className="bg-percent">
                <motion.div 
                    className="value-percent" 
                    variants={valuePercentVariants(skills.percent)}
                    style={{
                        width: skills.percent + "%",
                        background: skills.color
                    }}
                />
            </div>
        </div>
    )
}

export default SkillPercent
