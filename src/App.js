import React from 'react'
import Menu from './components/customer/menu'
import BackToTop from './components/customer/menu/BackToTop'
import About from './components/customer/content/about'
import Skills from './components/customer/content/skills'
import Works from './components/customer/content/works'
import Contact from './components/customer/content/contact'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const transitionPageVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
			bounce: 0,
            when: 'beforeChildren',
        }
    },
    exit: {
        scale: .9,
        opacity: 0,
        transition: {
            duration: .2
        }
    }
}

const rightContentVariants = {
	hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
			delay: .5,
            duration: .5,
            when: 'beforeChildren',
            staggerChildren: .1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .3
        }
    }
}

function App() {

	const location = useLocation()

	return (
		<div className="app">
			<Menu />
			<div className="content">
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.key}>
						<Route path="/home">
							<About transitionPageVariants={transitionPageVariants} rightContentVariants={rightContentVariants} />
						</Route>
						<Route path="/skills">
							<Skills transitionPageVariants={transitionPageVariants} rightContentVariants={rightContentVariants} />
						</Route>
						<Route path="/works">
							<Works transitionPageVariants={transitionPageVariants} rightContentVariants={rightContentVariants} />
						</Route>
						<Route path="/contact">
							<Contact transitionPageVariants={transitionPageVariants} rightContentVariants={rightContentVariants} />
						</Route>
						<Route exact path="/">
							<Redirect to="/home" />
						</Route>
						<Route path="*">
							<Redirect to="/home" />
						</Route>
					</Switch>
				</AnimatePresence>
				<BackToTop />
			</div>
		</div>
	);
}

export default App;
