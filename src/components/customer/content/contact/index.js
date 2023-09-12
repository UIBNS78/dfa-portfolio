import React, { Component } from 'react'
import NextAndPrevious from '../../common/np-page/NextAndPrevious'
import SocialMediaIcons from '../../common/sm-icons/SocialMediaIcons'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';
import { motion } from 'framer-motion'
import { Formik } from 'formik'
import { ContactSchema } from '../../../../schema/InputSchema'
import './Contact.css'

class Contact extends Component {
    render() {
        const { transitionPageVariants, rightContentVariants } = this.props
        return (
            <>
                <motion.div 
                    className="center-content"
                    variants={transitionPageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <Typography variant="h3">Contact</Typography>                
                    <div className="center-body">
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates alias, sed quas obcaecati quasi quaerat, debitis nulla 
                            temporibus, minima sint nihil vero quis saepe a! Aliquid culpa asperiores nemo? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptates alias, sed quas obcaecati quasi quaerat, debitis nulla 
                            temporibus, minima sint nihil vero quis saepe a! Aliquid culpa asperiores nemo?
                        </Typography>
                        <div className="form-block">
                            <Formik
                                initialValues={{name: '', email: '', subject: '', message: ''}}
                                validationSchema={ContactSchema}
                                onSubmit={(values, action) => {
                                    console.log(values)
                                }}
                            >
                                {formikProps => (
                                    <div className="input-group">
                                        <div className="input-flex">
                                            <TextField
                                                label="Nom"
                                                size="small"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Face style={{color: '#717171'}} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            <TextField
                                                label="Email"
                                                size="small"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Email style={{color: '#717171'}} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <TextField
                                            label="Sujet"
                                            size="small"
                                            className="input"
                                        />
                                        <TextField
                                          label="Messages"
                                          multiline
                                          rows="4"
                                          className="input"
                                        />
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <NextAndPrevious previous={{ page: 'Projets', pathname: '/works' }} />
                </motion.div>
                <div className="right-content">
                    <motion.div
                        className="right-body"
                        variants={rightContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Typography vairant="h4">
                            I'm the right content for contact
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed iusto sint, 
                            doloremque distinctio asperiores eos. Voluptates laudantium ab consectetur beatae. 
                            Alias quos est omnis libero pariatur quo autem odit voluptatibus!
                        </Typography>
                    </motion.div>
                    <SocialMediaIcons />
                </div>
            </>
        )
    }
}

export default Contact
