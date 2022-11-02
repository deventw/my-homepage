import React from 'react';

export const Pier = () => {
	return (
		<div className="flex gap-7 items-center justify-evenly text-lg animate-bounce hover:animate-[spin_5.05s_ease-in-out_infinite]">
			<span className="text-pink-400 animate-[ping_3.14s_ease-in-out_infinite]">&pi;</span>
			<span className="text-pink-500 animate-[ping_12.7s_ease-in-out_infinite]">&pi;</span>
			<span className="text-pink-600 animate-[ping_4.2s_ease-in-out_infinite]">&pi;</span>
		</div>
	);
};
