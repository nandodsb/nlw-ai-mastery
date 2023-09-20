import { SiOpenai } from 'react-icons/si';
import { Progress } from './ui/progress';
import { useState, useEffect } from 'react';

export function Intro() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => setProgress(95), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div className="min-h-screen flex flex-col gap-4 justify-center items-center ">
				<SiOpenai size={120} />

				<p className="text-4xl text-bold text-mono bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent ">
					upload.ai
				</p>

				<Progress
					value={progress}
					className="w-[30%]"
				/>
			</div>
		</>
	);
}
