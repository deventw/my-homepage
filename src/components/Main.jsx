import React from 'react';

export const Main = () => {
	return (
		<div className="my-4 leading-relaxed ">
			<p>Heyo! I&apos;m DevenTW.</p>
			{/* <p>I live in Hong Kong and just graduated 🎓.</p> */}
			<p>I live in Hong Kong and work as a Developer 👨‍💻. </p>

			<p> I am also a <a href="https://blog.deven.tw">Blogger</a>📝, <a href="https://instagram.com/wt.neved">Photographer</a>📸.
				{/* <a href="https://pho.deven.tw">Photographer</a> 📸. and <a href="https://blog.deven.tw/travel/">Traveler</a> 🌍.  */}
			</p>
			<div className="flex flex-row justify-center items-center text-sm gap-2  font-semibold text-blue-600 animate-pulse">
				<hr width="100" />#000402<hr width="100"/>
			</div>

			<p>
				<a href="/lib.html">Here</a> are some projects I have made.
			</p>
		</div>
	);
};
