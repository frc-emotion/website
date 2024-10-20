import Image from "next/image";
import ".//index.scss";

export default function Hero() {
    return (
        <div id="#hero" className="z-0 mt-[2%] grid bg-teamYellow-500 px-[5vw]">
            <div id="heroHeader">
                <h1 className="slideUp w-full text-center text-r12xl font-semibold">
                    Σ-Motion
                </h1>
                <div className="slideUp2 clamp grid grid-cols-1 grid-rows-3 px-[10vw] font-semibold md:grid-cols-4 md:grid-rows-1 lg:mt-[-30px]">
                    <p className="text-center md:text-left">FRC Team 2658</p>
                    <p className="text-center md:col-span-2">
                        Rancho Bernardo High School
                    </p>
                    <p className="text-center md:text-right">San Diego, CA</p>
                </div>
            </div>
            <div
                id="heroImage"
                className="static top-0 mt-7 h-[45vh] md:mt-10 lg:h-[75vh]"
            >
                <div className="relative h-full w-full">
                    <Image
                        src="https://cdn.team2658.org/web-public/head.jpeg"
                        //src='https://cdn.team2658.org/web-public/outreach/competitions/pitTestingBATB24.jpg'
                        fill={true}
                        alt=""
                        className="rounded-lg object-cover object-top"
                        priority={true}
                    />
                </div>
            </div>
        </div>
    );
}
