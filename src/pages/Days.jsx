import React from 'react';

import oldMan from '../assets/oldman.gif';

const Days = () => {

	return (
		<div className="App">

			<div
				className="flex-row w-80 md:w-max border-4 border-rose-300 rounded-3xl p-8 drop-shadow-2xl font-light  justify-center items-center text-xl">
				<h1 className="text-2xl font-bold justify-center">Days</h1>
				<hr />

				<div className="text-md rounded-xl p-8 text-center font-light leading-normal  flex-col" >
					<ul className="list-disc">
						<li>init: {((Date.now()- new Date('2020-09-29'))/ (1000 * 3600 * 24)).toFixed()}</li>
						<li>&#127314;: {((Date.now()-new Date('2020-11-07'))/ (1000 * 3600 * 24)).toFixed()}	</li>
					</ul>
           
					<img  className="border-4 border-black rounded-2xl w-40" src={oldMan} alt={'old man'} />
				</div>

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

export default Days;

