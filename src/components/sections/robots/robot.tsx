import "@/styles/globals.css";
import Image from "next/image";

export default function SponsorImages2023() {
	const logoFolder = "https://cdn.team2658.org/web-public/robots"; // last character CANNOT be a '/'
	const robots = [
		{
			name: "Charged Up",
			year: "2022",
			path: `${logoFolder}/ChargedUp.jpeg`, // Doesn't exist
			width: 300,
			height: 300,
			description: `` // Just add the description and it would display below the image
		},
		{
			name: "Rapid React",
			year: "2021",
			path: `${logoFolder}/RapidReact.png`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Infinite Recharge",
			year: "2020",
			path: `${logoFolder}/InfiniteRecharge.jpeg`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Destination: Deep Space",
			year: "2019",
			path: `${logoFolder}/DeepSpace.png`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Power Up",
			year: "2018",
			path: `${logoFolder}/PowerUp.jpeg`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Steamworks",
			year: "2017",
			path: `${logoFolder}/Steamworks.jpeg`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Stronghold",
			year: "2016",
			path: `${logoFolder}/Stronghold.jpeg`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Recycle Rush",
			year: "2015",
			path: `${logoFolder}/RecycleRush.jpeg`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Aerial Assist",
			year: "2014",
			path: `${logoFolder}/AerialAssist.jpeg`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Ultimate Ascent",
			year: "2013",
			path: `${logoFolder}/UltimateAscent.jpeg`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Rebound Rumble",
			year: "2012",
			path: `${logoFolder}/ReboundRumble.jpeg`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Logo Motion",
			year: "2011",
			path: `${logoFolder}/LogoMotion.jpeg`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Breakaway",
			year: "2010",
			path: `${logoFolder}/Breakaway.jpeg`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Lunacy",
			year: "2009",
			path: `${logoFolder}/Lunacy.jpeg`,
			width: 300,
			height: 300,
			description: ``
		},
		{
			name: "Overdrive",
			year: "2008",
			path: `${logoFolder}/Overdrive.png`,
			width: 300,
			height: 300,
			description: ``
		},
	];

	return (
		<div
			className="mx-[5vw] my-[160px] rounded-xl bg-black p-8"
			id="robots"
		>
			{robots.map((item) => (
			<div key={"robot-" + item.name} className="grid grid-cols-1 gap-10 md:grid-cols-1 xl:grid-cols-1 mx-[10vw]">
					<div className=" bg-teamYellow-500 rounded-xl">
						<br></br>
						<div className="text-center  text-[56px] font-semibold p-5">
							<h1>{item.name} - {item.year}</h1>
						</div>
						<br></br>
						<div className="flex items-center justify-center object-cover ">
							<Image
								src={item.path}
								title={item.name}
								alt={item.name + " Logo"}
								width = {item.width}
								height = {item.height}
								quality={100}
								className="object-cover w-[50vw] h-[35vw]"
							/>
						</div>
						<br></br>
						<p className="text-center">
							{item.description} 
						</p>
						<br></br>
					</div>
					
				<br></br>
			</div>
			))}
		</div>
		
		
	);
}