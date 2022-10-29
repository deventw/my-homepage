import React from 'react';

export const Footer = () => {
	return (
		<div className="flex justify-between items-center" >

			<div className="card">
				<div className="text">505</div>
				<div className="text">0</div>
			</div>

			<div className="social flex  ">
				<a href="https://github.com/deventw" target="_blank" rel="noreferrer">
					<img
						className="icon animate-bounce"
						src="https://raw.githubusercontent.com/feathericons/feather/master/icons/github.svg"
						alt="github icon"
					/>
   
				</a>
				<div className="animate-[bounce_0.7s_ease-in-out_infinite] text-pink-500">     &#127314;</div>
				{/*    
				<a href="https://www.instagram.com/deven.tw/" target="_blank" rel="noreferrer">
					<img className="icon" src="https://raw.githubusercontent.com/feathericons/feather/master/icons/instagram.svg"
						alt="instagram icon" />
				</a>
				<a href="https://twitter.com/deven_tw" target="_blank" rel="noreferrer">
					<img className="icon" src="https://raw.githubusercontent.com/feathericons/feather/master/icons/twitter.svg"
						alt="twitter icon" />
				</a>  */}
			</div>

		</div>
	);
};
