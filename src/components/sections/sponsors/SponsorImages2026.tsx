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
            path: `https://www.airrosti.com/wp-content/uploads/2023/09/Leidos-logo-horz-uv-mid-rgb-@4x.png`,
        },
        {
            name: "Bristol Myers Squibb",
            width: 450,
            height: 500,
            path: `https://advancing-life-science-construction.com/wp-content/uploads/sites/219/2025/10/BMS-Bristol-Myers-Squibb-Emblem-1024x576.png`,
        },
        {
            name: "RTX",
            width: 450,
            height: 500,
            path: `https://www.mathcounts.org/sites/default/files/2023-08/RTX-01.png`,
        }
    ]
    return (
            <div
                className="my-[60px] mx-[5vw] rounded-xl p-8 bg-teamYellow-500"
                id="2025sponsors"
            >
                <div className="text-left  text-[56px] font-semibold">
                    <h1>2026</h1>
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