import React from 'react';
import Snowfall from 'react-snowfall';
import { Avatar } from '../components/Avatar';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Pier } from '../components/Pier';

const Home = () => {
	return (
		<div className="App">
			<Pier />
			<div
				className="flex-row w-80 md:w-max border-4 border-rose-300 rounded-3xl p-8 drop-shadow-2xl font-light  justify-center items-center text-xl">
				<Avatar />
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
};

export default Home;

