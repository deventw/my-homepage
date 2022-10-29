import './App.css';
import React from 'react';
import { Logo } from './components/Logo';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Pier } from './components/Pier';

function App () {
	return (
		<div className="App">
			<Pier/>
			<div
				className="intro flex-row w-80 border-2 border-rose-300 rounded-3xl p-8 drop-shadow-2xl font-light "
			
			>
				<Logo />
				<Main />
				<Footer />
			</div>
			<div className="flex justify-center align-center">
				<span className="with-love">
					<a href="https://instagram.com/yuvkky?igshid=YmMyMTA2M2Y=">
						<i className="fa fa-heart" style={{ color: '#B0C8FA' }} />
					</a>
				</span>
				<span className="with-love" title="有你牽掛 是我一世 最美的浪漫"><i className="fa fa-heart" style={{ color: '#C8A7E0' }} /></span>
				<span className="with-love" title="如初見"><i className="fa fa-heart" style={{ color: '#F6C9D2' }} /></span>

			</div>

		</div>

	);
}

export default App;
