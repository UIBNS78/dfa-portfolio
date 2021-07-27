import React from 'react'
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ArrowBack'
import ArrowForward from '@material-ui/icons/ArrowForward'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Typography } from '@material-ui/core'
import './NextAndPrevious.css'

const NextAndPrevious = ({previous, next}) => {
    
	const history = useHistory()
	const handlePage = page => {
        history.push(page)
    }

    return (
        <motion.div 
            className="nextAndPrevious"
        >
            <div>
                { previous && (
                    <>
                        <Typography variant="caption" className="text-np">Page précédante</Typography>
                        <Button 
                            startIcon={<ArrowBack />}
                            onClick={() => handlePage(previous.pathname)}
                        >{ previous.page }</Button>
                    </>
                )}
            </div>
            <div>
                { next && (
                    <>
                        <Typography variant="caption" className="text-np text-np-next">Page suivante</Typography>
                        <Button 
                            endIcon={<ArrowForward />}
                            onClick={() => handlePage(next.pathname)}
                        >{ next.page }</Button>
                    </>
                )}
            </div>
        </motion.div>
    )
}

export default NextAndPrevious
