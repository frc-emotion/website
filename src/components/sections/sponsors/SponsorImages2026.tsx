import "@/styles/globals.css";
import Image from "next/image";

export default function SponsorImages2026() {
    const logoFolder = "https://cdn.jsdelivr.net/gh/frc-emotion/images@main";   // folder containing sponsor logos
    // batteriesplus is imported above, no need to redeclare
    const sponsors = [
        {
            name: "Leidose",
            width: 450,
            height: 500,
            path: `${logoFolder}/sponsors/2026/leidos.png`,
        },
        {
            name: "Bristol Myers Squibb",
            width: 450,
            height: 500,
            path: `${logoFolder}/sponsors/2026/bristolmyerssquibb.png`,
        },
        {
            name: "RTX",
            width: 450,
            height: 500,
            path: `${logoFolder}/sponsors/2026/rtx.png`,
        },
        {
            name: "Blackland",
            width: 350,
            height: 400,
            path: `${logoFolder}/sponsors/2026/blackland.avif`,
        },
        {
            name: "Fleet Reserve Assn",
            width: 450,
            height: 500,
            path: `${logoFolder}/sponsors/2026/fra.png`,
        },
        {
            name: "Kiwanis International",
            width: 375,
            height: 375,
            path: `${logoFolder}/sponsors/2026/kiwanis.png`,
        },
        {
            name: "RB Community Foundation",
            width: 400,
            height: 400,
            path: `${logoFolder}/sponsors/2026/rbcommunityfoundation.png`,
        },
        {
            name: "Bailey Foundation",
            width: 450,
            height: 500,
            path: `${logoFolder}/sponsors/2026/baileyfoundation.png`,
        }
    ]
    return (
            <div
                className="my-[60px] mx-[5vw] rounded-xl p-8 bg-teamYellow-500"
                id="2025sponsors"
            >
                <div className="text-left  text-[56px] font-semibold">
                    <h1>{2026}</h1>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"> {/* Reduced gap from 10 to 6 */}
                    {
                    sponsors.map((item) => (
                        <div
                            className={`flex w-full select-none items-center justify-center ${
                                item.name === "Kinetic CNC" ? "h-48" : "" // Fixed height container for Kinetic CNC
                            }`}
                            key={"sponsor-" + item.name}
                        >
                            <Image
                                src={item.path}
                                title={item.name}
                                alt={item.name + " Logo"}
                                width={item.width}
                                height={item.height}
                                quality={10} //dont need high quality for logos and this makes it load faster
                                className={"object-contain"} // Apply special styling if available
                            />
                        </div>
                    ))}
                    <div
                            className={`flex w-full select-none items-center justify-center`}
                            key={"sponsor-" + "North County Waterjet"}
                        >
                            <h1 className="text-6xl">North County Waterjet</h1>
                        </div>
                        <div
                            className={`flex w-full select-none items-center justify-center`}
                            key={"sponsor-" + "Charles and Ruth Billingsley Foundation"}
                        >
                            <h1 className="text-6xl">Charles and Ruth Billingsley Foundation</h1>
                        </div>
                </div>
            </div>
        );
    }