import Image from "next/image";
import ".//index.css";

export default function Hero() {
	return (
		<div id="#hero" className="bg-teamYellow-500 grid px-[5vw] z-0">
			<div id="heroHeader">
				<h1 className="2xl:text-[200px] xl:text-[160px] lg:text-[140px] text-[85px] font-semibold w-full text-center slideUp">
					Σ-Motion
				</h1>
				<div className="font-semibold px-[10vw] xl:text-[28px] lg:text-[20px] lg:mt-[-30px] grid md:grid-rows-1 md:grid-cols-4 grid-rows-3 grid-cols-1 slideUp2">
					<p className="md:text-left text-center">FRC Team 2658</p>
					<p className="text-center md:col-span-2">
						Rancho Bernardo High School
					</p>
					<p className="md:text-right text-center">San Diego, CA</p>
				</div>
			</div>
			<div
				id="heroImage"
				className="md:mt-10 mt-7 lg:h-[75vh] h-[45vh] static top-0"
			>
				<div className="w-full h-full relative">
					<Image
						src="/head.jpeg"
						fill={true}
						alt=""
						className="object-cover object-top"
						priority={true}
					/>
				</div>
			</div>
		</div>
	);
}
