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
			path: `${logoFolder}/generalAtomics.png`,
			width: 500,
			height: 500,
		},
		{
			name: "Batteries Plus",
			path: `${logoFolder}/batteries.png`,
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
		<div className="mx-[5vw] my-[60px]" id="2023sponsors">
			<div className="text-[56px] text-left font-semibold">
				<h1>2023</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
				{sponsors.map((item) => (
					<div
						className="w-full flex justify-center items-center select-none"
						key={"sponsor-" + item.name}
					>
						<Image
							src={item.path}
							title={item.name}
							alt={item.name + " Logo"}
							width={item.width}
							height={item.height}
						/>
					</div>
				))}
			</div>
		</div>
	);
} //
