import "@/styles/globals.css";
import Image from "next/image";

export default function SponsorImages2025() {
    const logoFolder = "https://cdn.team2658.org/web-public/sponsors"; // last character CANNOT be a '/'
    const sponsors = [
        // width and height both in pixels
        {
            name: "Glenn W. Bailey Foundation",
            path: `${logoFolder}/2025/baileyfoundation.png`,
            width: 350,
            height: 0,
        },
        {
            name: "Qualcomm",
            path: `${logoFolder}/2023/qualcomm-updated.png`,
            width: 350,
            height: 0,
        },
        {
            name: "Kinetic CNC",
            path: `${logoFolder}/2024/kinetic.png`,
            width: 400,
            height: 0
        },
        {
            name: "Batteries Plus",
            path: `https://raw.githubusercontent.com/CrookedTwig4/Pictures/refs/heads/main/batteries.png`,
            width: 500,
            height: 0,
        },
        {
            name: "Solidworks",
            path: `${logoFolder}/2024/solidworks.png`,
            width: 300,
            height: 0,
        },
        {
            name: "INCOSE",
            path: `https://raw.githubusercontent.com/CrookedTwig4/Pictures/refs/heads/main/INCOSE.png`,
            width: 300,
            height: 0,
        },
        {
            name: "Xometry",
            path: `https://raw.githubusercontent.com/CrookedTwig4/Pictures/refs/heads/main/Xometry.png`,
            width: 300,
            height: 300,
        },
        {
            name: "Instant Imprints",
            path: `${logoFolder}/2024/imprints.png`,
            width: 300,
            height: 300,
        },
        {
            name: "Rancho Bernardo Community Foundation",
            path: `https://raw.githubusercontent.com/CrookedTwig4/Pictures/refs/heads/main/RBCommunityFoundation.png`,
            width: 200,
            height: 200,
        }
    ];

    return (
        <div
            className="my-[60px] mx-[5vw] rounded-xl p-8 bg-teamYellow-500"
            id="2025sponsors"
        >
            <div className="text-left  text-[56px] font-semibold">
                <h1>2025</h1>
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
            <div className="pt-10">
                <h2 className="text-[42px] font-semibold">
                    Additional Sponsors
                </h2>
                <ul className="grid grid-cols-1 gap-x-10 md:grid-cols-2 xl:grid-cols-3">
                    <li>North County Waterjet</li>
                </ul>
            </div>
        </div>
    );
}
