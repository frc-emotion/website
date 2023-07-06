import "@/styles/globals.css";
import Image from "next/image";

export default function SponsorImages2022() {
	const logoFolder = "https://cdn.team2658.org/web-public/sponsors/2022"; // last character CANNOT be a '/'

	type Sponsor = {
		name: string;
		path: string;
		width: number;
		height: number;
	};

	const sponsors: Sponsor[] = [
		// width and height both in pixels
		{
			name: "Google",
			path: `${logoFolder}/google.png`,
			width: 300,
			height: 300,
		},
		{
			name: "Nasa",
			path: `${logoFolder}/nasa.png`,
			width: 300,
			height: 300,
		},
		{
			name: "RBHS",
			path: `${logoFolder}/bronco.png`,
			width: 300,
			height: 300,
		},
		{
			name: "Raytheon",
			path: `${logoFolder}/raytheon.png`,
			width: 300,
			height: 300,
		},
		{
			name: "Abbott",
			path: `${logoFolder}/abbott.png`,
			width: 300,
			height: 300,
		},
		{
			name: "Qualcomm",
			path: `${logoFolder}/qualcomm.png`,
			width: 300,
			height: 300,
		},
		{
			name: "Intuitive",
			path: `${logoFolder}/intuitive.png`,
			width: 300,
			height: 300,
		},
		{
			name: "USE Credit Union",
			path: `${logoFolder}/use.png`,
			width: 300,
			height: 300,
		},
		{
			name: "Masimo",
			path: `${logoFolder}/masimo.png`,
			width: 300,
			height: 300,
		},
		{
			name: "Northrop Grumman",
			path: `${logoFolder}/northrop.svg`,
			width: 300,
			height: 300,
		},
	];

	return (
		<div className="mx-[5vw] my-[60px] bg-teamYellow-500 p-8 rounded-xl" id="2023sponsors">
			<div className="text-left text-[56px] font-semibold">
				<h1>2022</h1>
			</div>
			<div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
				{sponsors.map((item) => (
					<div
						className="flex w-full select-none items-center justify-center"
						key={"sponsor-" + item.name}
					>
						<Image
							src={item.path}
							title={item.name}
							alt={item.name + " Logo"}
							width={item.width}
							height={item.height}
							quality={10}
						/>
					</div>
				))}
			</div>
		</div>
	);
} //
