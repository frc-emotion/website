import OutreachEvent from "@/components/sections/outreach/OutreachEvent";
import Image from "next/image";

export const metadata = {
    title: "Outreach | FRC Team 2658",
    description: "Learn about Σ-Motion's outreach efforts",
};

export default function Outreach() {
    // // const [calendarExpanded, setCalendarExpanded] = useState(true);
    // const [schoolExpanded, setSchoolExpanded] = useState(false);
    // const [competitionsExpanded, setCompetitionsExpanded] = useState(false);
    // const [fairsExpanded, setFairsExpanded] = useState(false);
    // const [FTCExpanded, setFTCExpanded] = useState(false);
    // const [FLLExpanded, setFLLExpanded] = useState(false);
    // const [miscExpanded, setMiscExpanded] = useState(false);

    // const allStates = [
    // 	// calendarExpanded,
    // 	schoolExpanded,
    // 	competitionsExpanded,
    // 	fairsExpanded,
    // 	FTCExpanded,
    // 	FLLExpanded,
    // 	miscExpanded,
    // ];
    // const allSets = [
    // 	// setCalendarExpanded,
    // 	setSchoolExpanded,
    // 	setCompetitionsExpanded,
    // 	setFairsExpanded,
    // 	setFTCExpanded,
    // 	setFLLExpanded,
    // 	setMiscExpanded,
    // ];
    // const expandAll = () => {
    // 	for (let i = 0; i < allSets.length; i++) {
    // 		allSets[i](true);
    // 	}
    // };
    // const collapseAll = () => {
    // 	for (let i = 0; i < allSets.length; i++) {
    // 		allSets[i](false);
    // 	}
    // };
    // const allExpanded = () => {
    // 	for (let i = 0; i < allStates.length; i++) {
    // 		if (!allStates[i]) return false;
    // 	}
    // 	return true;
    // };
    // const allCollapsed = () => {
    // 	for (let i = 0; i < allStates.length; i++) {
    // 		if (allStates[i]) return false;
    // 	}
    // 	return true;
    // };

    type LinkDisplay = {
        link: string,
        text: string
    }

    type MainEvent = {
        title: string,
        description: string,
        imageSrc: string,
        imageFillType: string,
        links: LinkDisplay[]
    }

    type Event = {
        title: string,
        times: string[]
    }

    const FeaturedEvents : MainEvent[] = [
        {
            title: "Fairbotics 2024",
            description: `
            On June 12-14 we competed in the event,
            placing 7th overall and captain of the 4th
            alliance. Sadly, we were eliminated in the Semifinals.
            Additionally, we had the largest turnout of volunteers, 
            helping with assembling and disassembling the field, 
            resetting the field between matches, and more.
            `,
            imageSrc: "https://cdn.team2658.org/web-public/outreach/competitions/fairbotics.png",
            imageFillType: "object-contain",
            links: [ 
                {
                    link: "https://www.instagram.com/p/C8WHg6kuwy6/?img_index=4",
                    text: "on instagram"
                }
            ]
        }
    ]

    const MainSchoolEvents : MainEvent[] = [
        {
            title: "CTE Expo 2024",
            description: `Team Σ-Motion participated
            in PUSD's 2024 Career
            Technical Education
            Expo, showcasing our robot, 
            talking to families about our team, 
            and inspiring a new generation 
            of FIRST students.`,
            imageSrc: "https://cdn.team2658.org/web-public/outreach/cte-expo.jpeg",
            imageFillType: "object-cover",
            links: 
            [
                {
                    link: "https://www.sandiegouniontribune.com/pomerado-news/news/story/2024-05-22/poway-unified-students-share-what-they-learned-through-career-technical-education-expo#:~:text=Rancho%20Bernardo%20High%20Robotics%20Team%202658",
                    text: "in the news"
                },
                {
                    link: "https://www.instagram.com/p/C7Ds5cnL2s8/",
                    text: "on instagram"
                }
            ]
        }
    ];

    const SchoolEvents : Event[] = [
        {
            title: "Bobcat 2 Bronco Day",
            times: [
                "5/23/24"
            ]
        },
        {
            title: "8th Grade Info Night",
            times: [
                "3/12/2024",
                "3/15/2022",
                "3/16/2021"
            ]
        },
        {
            title: "WWES Science Night",
            times: [
                "2014-2016"
            ]
        },
        {
            title: "RBHS Robotics Open House",
            times: [
                "6/7/2021"
            ]
        }
    ];

    return (
        // <div className="overflow-hidden bg-teamYellow-500 p-0">
        <main className="bg-teamYellow-500 overflow-hidden relative">
            <div
                id="hero"
                className="relative select-none h-clampLarge overflow-hidden bg-black"
            >
                <Image
                    src="https://cdn.team2658.org/web-public/outreach/head.jpeg"
                    fill={true}
                    alt=""
                    className="object-cover brightness-50 blur-sm absolute"
                    priority={true}
                />
                <h1 className="absolute py-8 text-r8xl font-bold text-teamYellow-100 inset-0 text-center">
                    Outreach
                </h1>
            </div>
            <div id="content" className="mx-[6vw] mb-[8vh] mt-[4vh]">
                <div>
                    {/* <div className="flex select-none flex-row space-x-[3rem]">
						<button
							className={`font-bold ${
								allExpanded()
									? "cursor-not-allowed opacity-30"
									: "opacity-60 hover:opacity-100"
							}`}
							onClick={() => {
								expandAll();
							}}
						>
							expand all
						</button>
						<button
							className={`font-bold ${
								allCollapsed()
									? "cursor-not-allowed opacity-30"
									: "opacity-60 hover:opacity-100"
							}`}
							onClick={() => {
								collapseAll();
							}}
						>
							collapse all
						</button>
					</div> */}
                    <div className="mt-[0.4rem] space-y-2">
                        {/* TODO: Calendar coming in a later version, will integrate with other functions of the site */}
                        {/* <div id="calendarSection">
							<button
								className={`text-r2xl ${
									calendarExpanded
										? "opacity-100"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setCalendarExpanded(!calendarExpanded);
								}}
							>
								Event Calendar
							</button>
						</div> */}
                        
                        {FeaturedEvents.length != 0 ? (
                            <div id="featured">
                                <h2 className="text-r2xl font-bold">
                                {FeaturedEvents.length == 1 ? ("Featured Event") : ("Featured Events")}
                                </h2>
                                {FeaturedEvents.map(
                                    (event) => (
                                        <OutreachEvent 
                                            title={event.title}
                                            description={event.description}
                                            imageSrc={event.imageSrc}
                                            imageFillType={event.imageFillType}
                                            links={event.links}
                                        />
                                    )
                                )}
                            </div>
                            ) :
                            <div id="upcoming"></div>
                        }
                            
        

                        <div id="school">
                            {/* <button
								className={`text-r2xl ${
									schoolExpanded
										? "mb-[0.25rem] opacity-100"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setSchoolExpanded(!schoolExpanded);
								}}
							>
								School Events
							</button> */}
                            <h2 className="text-r2xl font-bold">
                                School Events
                            </h2>
                            {/* {true ? ( */}
                            <div id="schoolSetionContent" className="mb-5">
                                <div className="grid-rows-auto grid">
                                    {MainSchoolEvents.map((event) => (
                                        <OutreachEvent 
                                            title={event.title}
                                            description={event.description}
                                            imageSrc={event.imageSrc}
                                            imageFillType={event.imageFillType}
                                            links={event.links}
                                        />
                                    ))}

                                    {/* set to h-[55vh] if 2nd row is ever used on larger screens */}
                                    <div className="row-span-auto grid-rows-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 omd:grid-rows-2">
                                        {SchoolEvents.map((event) => (
                                            <div className="col-span-1 flex flex-col items-center mt-3 justify-center rounded-lg bg-white py-10 text-black md:mr-5">
                                                <h3 className="mx-8 text-center text-r2xl font-bold">
                                                    {event.title}
                                                </h3>
                                                <div className="flex flex-row space-x-5 font-semibold">
                                                    {event.times.map((time) => (<h4>{time}</h4>))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* ) : null} */}
                        </div>
                        <div id="competitions">
                            {/* <button
								className={`text-r2xl ${
									competitionsExpanded
										? "opacity-100"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setCompetitionsExpanded(
										!competitionsExpanded
									);
								}}
							>
								Competitions
							</button> */}
                            <h2 className="text-r2xl font-bold">
                                Competitions
                            </h2>
                            {/* {true ? ( */}
                            <div id="competitionsContent" className="mb-5 mt-2">
                                <div className="grid-rows-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 omd:grid-rows-2">
                                    <div className="relative col-span-1 h-[25vh] md:mr-5">
                                        <Image
                                            src="https://cdn.team2658.org/web-public/outreach/competitions/sdr.jpeg"
                                            alt=""
                                            fill={true}
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="col-span-1 flex flex-col items-center justify-center rounded-lg bg-black py-10 text-white lg:mr-5 -md:mt-3">
                                        <h3 className="mx-8 text-center text-r2xl font-bold olg:mx-[5.5rem]">
                                            San Diego Regional
                                        </h3>
                                        <div className="flex flex-row space-x-5 font-semibold">
                                            <h4>2008-2019</h4>
                                            <h4>2021-Present</h4>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 h-[25vh] -lg:mt-3 omd:mr-5">
                                        <Image
                                            src="https://cdn.team2658.org/web-public/outreach/competitions/lvr.jpeg"
                                            alt=""
                                            fill={true}
                                            className="rounded-lg object-cover object-bottom"
                                        />
                                    </div>
                                    <div className="col-span-1 mt-3 flex flex-col items-center justify-center rounded-lg bg-white py-10 text-black lg:mr-5">
                                        <h3 className="mx-8 text-center text-r2xl font-bold olg:mx-[5.5rem]">
                                            Las Vegas Regional
                                        </h3>
                                        <div className="flex flex-row space-x-5 font-semibold">
                                            <h4>2012</h4>
                                            <h4>2023</h4>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 mt-3 h-[25vh] md:mr-5">
                                        <Image
                                            src="https://cdn.team2658.org/web-public/outreach/competitions/avr.jpeg"
                                            alt=""
                                            fill={true}
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="col-span-1 mt-3 flex flex-col items-center justify-center rounded-lg bg-white py-10 text-black">
                                        <h3 className="mx-8 text-center text-r2xl font-bold olg:mx-[5.5rem]">
                                            Aerospace Valley Regional
                                        </h3>
                                        <div className="flex flex-row space-x-5 font-semibold">
                                            <h4>2018-2019</h4>
                                            <h4>2022</h4>
                                            <h4>2024</h4>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 mt-3 h-[25vh] md:mr-5">
                                        <Image
                                            src="https://cdn.team2658.org/web-public/outreach/competitions/batb.jpeg"
                                            alt=""
                                            fill={true}
                                            className="rounded-lg object-cover object-bottom"
                                        />
                                    </div>
                                    <div className="col-span-1 mt-3 flex flex-col items-center justify-center rounded-lg bg-black py-10 text-white lg:mr-5">
                                        <h3 className="mx-8 text-center text-r2xl font-bold olg:mx-[5.5rem]">
                                            Battle at the Border
                                        </h3>
                                        <div className="flex flex-row space-x-5 font-semibold">
                                            <h4>2012-Present</h4>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 mt-3 h-[25vh] omd:mr-5">
                                        <Image
                                            src="https://cdn.team2658.org/web-public/outreach/competitions/blitz.jpeg"
                                            alt=""
                                            fill={true}
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="col-span-1 mt-3 flex flex-col items-center justify-center rounded-lg bg-white py-10 text-black lg:mr-5">
                                        <h3 className="mx-8 text-center text-r2xl font-bold olg:mx-[5.5rem]">
                                            Beach Blitz
                                        </h3>
                                        <div className="flex flex-row space-x-5 font-semibold">
                                            <h4>2021-Present</h4>
                                        </div>
                                    </div>
                                    <div className="col-span-1 mt-3 flex flex-col items-center justify-center rounded-lg bg-white py-10 text-black md:col-span-2">
                                        <div className="relative grid w-[85%] grid-cols-1 lg:grid-cols-2 lg:space-x-10">
                                            <ul className="list-disc">
                                            <li>
                                                    <b>Port Hueneme Regional</b>:
                                                    {" 2/29/2024 - 3/3/2024"}
                                                </li>
                                                <li>
                                                    <b>Del Mar Regional</b>:
                                                    {" 3/5/2020 - 3/8/2020"}
                                                </li>
                                                <li>
                                                    <b>Fall Clasic</b>:
                                                    {" 9/28/2019"}
                                                </li>
                                                <li>
                                                    <b>
                                                        LA Fleet Week Battleship
                                                        Blast
                                                    </b>
                                                    :{" 8/31/2019 - 9/2/2019"}
                                                </li>
                                                <li>
                                                    <b>
                                                        World Championship -
                                                        Turing Division
                                                    </b>
                                                    :{" 4/18/2018 - 4/21/2018"}
                                                </li>
                                            </ul>
                                            <ul className="list-disc">
                                                <li>
                                                    <b>
                                                        Inland Empire Regional
                                                    </b>
                                                    :{" 3/28/2013 - 3/30/2013"}
                                                </li>
                                                <li>
                                                    <b>Los Angeles Regional</b>:
                                                    {" 3/12/2009 - 3/14/2009"}
                                                </li>
                                                <li>
                                                    <b>
                                                        Human Powered Submarine
                                                        Competition hosted by
                                                        Northrop Grumman
                                                    </b>
                                                    :{" 7/25/2008"}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ) : null} */}
                        </div>
                        <div id="fairs">
                            {/* <button
								className={`text-r2xl ${
									fairsExpanded
										? "opacity-100"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setFairsExpanded(!fairsExpanded);
								}}
							>
								<div className="-sm:hidden">
									Fairs and Showcases
								</div>
								<div className="sm:hidden">Fairs</div>
							</button> */}
                            <h2 className="text-r2xl font-bold">
                                Fairs and Showcases
                            </h2>
                            {/* {true ? ( */}
                            <div id="fairsContent" className="mb-5 mt-2">
                                <div className="grid-rows-auto grid">
                                    <div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
                                        <div className="relative col-span-1 mb-5 mt-1 flex h-[35vh] select-none overflow-hidden rounded-lg md:mr-2.5 -md:items-center -md:justify-center">
                                            <Image
                                                src="https://cdn.team2658.org/web-public/outreach/escondidofair.jpeg"
                                                alt=""
                                                fill={true}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="col-span-1 mb-5 grid rounded-lg bg-black py-10 text-white md:ml-2.5 -md:place-items-center">
                                            <div className="mx-8 flex flex-col justify-center -md:items-center">
                                                <h3 className="text-center text-r3xl font-bold">
                                                    Escondido Street Fair
                                                    Display
                                                </h3>
                                                <p className="text-center font-bold">
                                                    10/17/2021
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 flex items-center justify-center rounded-lg bg-white py-10 text-black md:col-span-2">
                                            <div className="relative mx-10 grid grid-cols-1 lg:grid-cols-2 lg:space-x-10">
                                                <ul className="list-disc">
                                                    <li>
                                                        <b>
                                                            RB Alive Street Fair
                                                        </b>
                                                        : 2009 - 2019
                                                    </li>
                                                    <li>
                                                        <b>
                                                            San Diego County
                                                            Fair
                                                        </b>
                                                        : 2009, 2011 - 2017,
                                                        2023, 2024
                                                    </li>
                                                    <li>
                                                        <b>
                                                            San Diego STEAM
                                                            Maker Fest
                                                        </b>
                                                        : 12/7/2019
                                                    </li>
                                                </ul>
                                                <ul className="list-disc">
                                                    <li>
                                                        <b>
                                                            San Diego Maker
                                                            Fair
                                                        </b>
                                                        : 10/6/2018 - 10/7/2018
                                                    </li>
                                                    <li>
                                                        <b>
                                                            Viasat Annual STEM
                                                            Fair
                                                        </b>
                                                        : 9/6/2011
                                                    </li>
                                                    <li>
                                                        <b>
                                                            CSUSM Super STEM
                                                            Saturday
                                                        </b>
                                                        : 3/16/2013
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ) : null} */}
                        </div>
                        <div id="ftc">
                            {/* <button
								className={`text-r2xl ${
									FTCExpanded
										? "opacity-100"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setFTCExpanded(!FTCExpanded);
								}}
							>
								FTC Teams
							</button> */}
                            <h2 className="text-r2xl font-bold">FTC Teams</h2>
                            {/* {true ? ( */}
                            <div id="ftc-content" className="mb-5 mt-2">
                                <div className="grid-rows-auto grid">
                                    <div className="row-span-auto grid grid-cols-1 md:grid-cols-3">
                                        <div className="relative col-span-1 mb-5 h-[35vh] md:col-span-3">
                                            <Image
                                                src="https://cdn.team2658.org/web-public/outreach/outreach-19.jpeg"
                                                alt=""
                                                fill={true}
                                                className="rounded-lg object-cover object-[50%_40%]"
                                            />
                                        </div>
                                        <div className="col-span-1 grid rounded-lg bg-black py-10 text-white md:mr-2.5 -md:place-items-center">
                                            <div className="mx-8 flex flex-col justify-center -md:items-center">
                                                <h3 className="text-center text-r3xl font-bold">
                                                        Mech-A-Mind
                                                        <br />
                                                        #23673
                                                </h3>
                                                <div className="mt-3 flex flex-row items-center justify-center space-x-3 font-semibold">
                                                    <p>more:</p>
                                                    <a
                                                        href="https://www.instagram.com/ftc.mech.a.mind/"
                                                        target="_blank"
                                                        className="underline"
                                                    >
                                                        Instagram
                                                    </a>
                                                    <a
                                                        href="https://ftcscout.org/teams/23673"
                                                        target="_blank"
                                                        className="underline"
                                                    >
                                                        Stats
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-1 grid rounded-lg bg-black py-10 text-white md:mr-2.5 -md:place-items-center">
                                            <div className="mx-8 flex flex-col justify-center -md:items-center">
                                                <h3 className="text-center text-r3xl font-bold">
                                                    Dynabots
                                                    <br />
                                                    #18426
                                                </h3>
                                                <div className="mt-3 flex flex-row items-center justify-center space-x-3 font-semibold">
                                                    <p>more:</p>
                                                    <a
                                                        href="https://www.instagram.com/dynabotsftc_18426"
                                                        target="_blank"
                                                        className="underline"
                                                    >
                                                        Instagram
                                                    </a>
                                                    <a
                                                        href="https://ftc-events.firstinspires.org/team/18426"
                                                        target="_blank"
                                                        className="underline"
                                                    >
                                                        Stats
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-1 grid rounded-lg bg-black py-10 text-white md:ml-2.5 -md:mt-3 -md:place-items-center">
                                            <div className="mx-8 flex flex-col justify-center -md:items-center">
                                                <h3 className="text-center text-r3xl font-bold">
                                                    Keep It Simple 2
                                                    <br />
                                                    #20355
                                                </h3>
                                                <div className="mt-3 flex flex-row items-center justify-center space-x-3 font-semibold">
                                                    <p>more:</p>
                                                    <a
                                                        href="https://ftc-events.firstinspires.org/team/20355"
                                                        target="_blank"
                                                        className="underline"
                                                    >
                                                        Stats
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ) : null} */}
                        </div>
                        <div id="fll">
                            {/* <button
								className={`text-r2xl ${
									FLLExpanded
										? "opacity-100"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setFLLExpanded(!FLLExpanded);
								}}
							>
								FLL Teams
							</button> */}
                            <h2 className="text-r2xl font-bold">FLL Teams</h2>
                            {/* {true ? ( */}
                            <div id="FLL-content" className="mb-5 mt-2">
                                <div className="flex items-center justify-center rounded-lg bg-white py-10 text-black md:col-span-2">
                                    <div className="relative mx-10 grid grid-cols-1 lg:grid-cols-2 lg:space-x-10">
                                        <ul className="list-disc">
                                            <li>
                                                <b>
                                                    BHMS FLL Team Kaizen Bobcats
                                                    #53784
                                                </b>
                                                : 2021-2022
                                            </li>
                                            <li>
                                                <b>
                                                    BHMS FLL Team-Binary Bosses
                                                    #31499
                                                </b>
                                                : 2018
                                            </li>
                                            <li>FLL Challenge Tech Turtles</li>
                                            <li>FLL Challenge Team Boltz</li>
                                        </ul>
                                        <ul className="list-disc">
                                            <li>
                                                FLL Challenge Thunderbolts
                                                #56227
                                            </li>
                                            <li>
                                                FLL Curious Collaborators #52846
                                            </li>
                                            <li>
                                                FLL Challenge Toxic BB Bots
                                                #57020
                                            </li>
                                            <li>
                                                FLL Explore Coolbotics #28522 -
                                                Community Team
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ) : null} */}
                        </div>
                        <div id="miscellaneous">
                            {/* <button
								className={`text-r2xl ${
									miscExpanded
										? "opacity-100"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setMiscExpanded(!miscExpanded);
								}}
							>
								Miscellaneous
							</button> */}
                            <h2 className="text-r2xl font-bold">Community</h2>
                            {/* {true ? ( */}
                            <div id="miscContent" className="mb-5 mt-2">
                                <div className="grid-rows-auto grid">
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="col-span-2 flex items-center justify-center rounded-lg bg-white py-10 text-black md:mr-2.5 -md:mb-5">
                                            <div className="relative mx-10">
                                                <ul className="list-disc">
                                                    <li>
                                                        <b>
                                                            Navy Gold Coast
                                                            Virtual Event
                                                        </b>
                                                        : 2020, 2021
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <div className="col-span-1 flex items-center justify-center rounded-lg bg-white py-10 text-black md:ml-2.5">
												<div className="relative mx-10">
													<p>
														We are working to
														organize the first FRC
														team in the country of
														Bulgaria. We are working
														with the Technical
														University of Varna to
														gather resources,
														mentors, and students
														towards building their
														first FRC team and the
														infrastructure to
														support it.
													</p>
												</div>
											</div> */}
                                    </div>
                                </div>
                            </div>
                            {/* ) : null} */}
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </main>
    );
}
