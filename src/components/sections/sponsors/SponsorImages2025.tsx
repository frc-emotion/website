import "@/styles/globals.css";
import Image from "next/image";

export default function SponsorImages2025() {
    const logoFolder = "https://cdn.jsdelivr.net/gh/frc-emotion/images@main";   // folder containing sponsor logos
    // batteriesplus is imported above, no need to redeclare
    const sponsors = [
        {
            name: "Incose",
            width: 450,
            height: 500,
            path: `${logoFolder}/sponsors/2025/INCOSE.png`,
        },
        {
            name: "RBHS Community Foundation",
            width: 400,
            height: 500,
            path: `${logoFolder}/RB.png`,
        },
        {
            name: "Xometry",
            width: 450,
            height: 500,
            path: `${logoFolder}/sponsors/2025/Xometry.png`,
        },
        {
            name: "Bailey Foundation",
            width: 450,
            height: 500,
            path: `${logoFolder}/sponsors/2025/baileyfoundation.png`,
        },
        {
            name: "Batteries Plus",
            width: 350,
            height: 500,
            path: `${logoFolder}/sponsors/2025/battery.png`,
        },
         {
            name: "RBHS ",
            path: `${logoFolder}/sponsors/2023/rbhs.png`,
            width: 250,
            height: 200,
        },
            {
            name: "Qualcomm",
            path: `${logoFolder}/sponsors/2023/qualcomm-updated.png`,
            width: 250,
            height: 100,
        },
            {
            name: "Kinetic CNC",
            path: `${logoFolder}/sponsors/2024/kinetic.png`,
            width: 400,
            height: 300,
        },
            {
            name: "Instant Imprints",
            path: `${logoFolder}/sponsors/2024/imprints.png`,
            width: 250,
            height: 100,
        },
        {
            name: "Solidworks",
            path: `${logoFolder}/sponsors/2024/solidworks.png`,
            width: 300,
            height: 300,
        },

    ]
    return (
            <div
                className="my-[60px] mx-[5vw] rounded-xl p-8 bg-teamYellow-500"
                id="2025sponsors"
            >
                <div className="text-left  text-[56px] font-semibold">
                    <h1>2025</h1>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"> {/* Reduced gap from 10 to 6 */}
                    {sponsors.map((item) => (
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
                </div>
            </div>
        );
    }