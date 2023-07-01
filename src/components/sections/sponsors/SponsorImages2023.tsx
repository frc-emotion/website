import "@/styles/globals.css";
import Image from "next/image";

export default function SponsorImages2023() {
	const logoFolder = "/sponsors/2023"; // last character CANNOT be a '/'
	const sponsors = [
		// width and height both in pixels
		{
			name: "US Department of Defense",
			path: `${logoFolder}/dod.png`,
			width: 500,
			height: 500,
		},
		{
			name: "Qualcomm",
			path: `${logoFolder}/qualcomm-updated.png`,
			width: 500,
			height: 500,
		},
		{
			name: "Northrop Grumman",
			path: `${logoFolder}/northrop.png`,
			width: 500,
			height: 500,
		},
		{
			name: "General Atomics",
			path: `${logoFolder}/general-atomics.png`,
			width: 500,
			height: 500,
		},
		{
			name: "Batteries Plus",
			path: `${logoFolder}/batteries-bulbs.png`,
			width: 500,
			height: 500,
		},
		{
			name: "RBHS Foundation",
			path: `${logoFolder}/rbhs.png`,
			width: 150,
			height: 100,
		},
	];

	return (
		<div
			className="my-[60px] mx-[5vw] rounded-xl p-8 bg-teamYellow-500"
			id="2023sponsors"
		>
			<div className="text-left  text-[56px] font-semibold">
				<h1>2023</h1>
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
							quality={10} //dont need high quality for logos and this makes it load faster
						/>
					</div>
				))}
			</div>
		</div>
	);
} //
