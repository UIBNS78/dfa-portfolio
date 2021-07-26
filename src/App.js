import React from 'react'
import Menu from './components/menu'
import BackToTop from './components/menu/BackToTop'

function App() {

	return (
		<div className="app">
			<Menu />
			<div className="content">
				{/* ROUTES HERE */}
				<BackToTop />
			</div>
		</div>
	);
}

export default App;
