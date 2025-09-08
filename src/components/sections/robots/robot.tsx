import "@/styles/globals.css";
import Image from "next/image";
import path from "path";

export default function RobotImages() {
	// const logoFolder = "https://cdn.team2658.org/web-public/robots"; // last character CANNOT be a '/'
	const logoFolder = "https://cdn.jsdelivr.net/gh/frc-emotion/images@main/robots"; // last character CANNOT be a '/'
	const robots = [
		{
			name: "Leviathan",
			year: "2025",
			path: `${logoFolder}/leviathan.jpg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'top'
		},
		{
			name: "Crescendo",
			year: "2024",
			path: `${logoFolder}/Crescendo.jpg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'top'
		},
		{
			name: "Charged Up",
			year: "2023",
			path: `${logoFolder}/ChargedUp.jpg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		
		{
			name: "Rapid React",
			year: "2022",
			path: `${logoFolder}/RapidReact.png`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		{
			name: "Infinite Recharge",
			year: "2020/2021",
			path: `${logoFolder}/InfiniteRecharge.jpeg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		{
			name: "Destination: Deep Space",
			year: "2019",
			path: `${logoFolder}/DeepSpace.png`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		{
			name: "Power Up",
			year: "2018",
			path: `${logoFolder}/PowerUp.jpeg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		{
			name: "Steamworks",
			year: "2017",
			path: `${logoFolder}/Steamworks.jpeg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		{
			name: "Stronghold",
			year: "2016",
			path: `${logoFolder}/Stronghold.jpeg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		{
			name: "Recycle Rush",
			year: "2015",
			path: `${logoFolder}/RecycleRush.jpeg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'bottom'
		},
		{
			name: "Aerial Assist",
			year: "2014",
			path: `${logoFolder}/AerialAssist.jpeg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		{
			name: "Ultimate Ascent",
			year: "2013",
			path: `${logoFolder}/UltimateAscent.jpeg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		{
			name: "Rebound Rumble",
			year: "2012",
			path: `${logoFolder}/ReboundRumble.jpeg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		{
			name: "Logo Motion",
			year: "2011",
			path: `${logoFolder}/LogoMotion.jpeg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'bottom'
		},
		{
			name: "Breakaway",
			year: "2010",
			path: `${logoFolder}/Breakaway.jpeg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		{
			name: "Lunacy",
			year: "2009",
			path: `${logoFolder}/Lunacy.jpeg`,
			width: 300,
			height: 300,
			description: '',
			pos: 'center'
		},
		{
			name: "Overdrive",
			year: "2008",
			path: `${logoFolder}/Overdrive.png`,
			width: 300,
			height: 300,
			description: '',
			pos: 'bottom'
		},
	];

	return (
		<div
			className="mt-[0px] grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 rounded-xl justify-center align-middle bg-black p-8"
			id="robots"
		>
			{robots.map((item) => (
			<div key={"robot-" + item.name.split(" ").join("")} className="flex relative flex-col items-center justify-center justify-self-center gap-10 mx-2">
					<div className="bg-teamYellow-500 rounded-xl text-center px-5 py-3">
						<div className="text-center text-rxl font-semibold inline">
							<h1 className="inline">{item.name} - {item.year}</h1>
						</div>
						<div className="flex items-center justify-center object-cover mt-2">
							<Image
								src={item.path}
								title={item.name}
								alt={item.name + " Logo"}
								width = {item.width}
								height = {item.height}
								quality={100}
								className={"object-cover lg:w-[50vw] lg:h-[35vw] rounded-lg object-" + item.pos}
							/>
						</div>
						<p className="text-center">
							{item.description}
						</p>
					</div>
					
				<br></br>
			</div>
			))}
		</div>
		
		
	);
}