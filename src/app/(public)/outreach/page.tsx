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
                            {/* {true ? ( */}
                            <h2 className="text-r2xl font-bold">
                                Recent Events
                            </h2>
                            <div id="recentEventsContent" className='mb-5'>
                                <div className="grid-rows-auto grid">
                                    <div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
                                        <div className="relative col-span-1 mb-5 mt-1 flex h-[45vh] select-none overflow-hidden rounded-lg md:mr-5">
                                            <Image
                                                src="https://cdn.team2658.org/web-public/outreach/competitions/celebratingBATB24.JPG"
                                                alt="Battle At The Border 2024"
                                                fill={true}
                                                className='object-cover'
                                            />
                                        </div>
                                        <div className="col-span-1 mb-5 grid rounded-lg bg-black py-10 text-white -md:place-items-center">
                                        <div className="mx-8 flex flex-col justify-center -md:items-center">
                                                <h3 className="text-r3xl font-bold text-white">
                                                        BATB 2024
                                                </h3>
                                                <p className="-md:mx-6 -md:text-center">
                                                Our team, featuring many new members and a newly formed drive team, faced several challenges but persevered to reach the semifinals in a competition of 34 teams. Despite the setbacks we faced at Battle at the Border, we performed well and showcased our resilience and teamwork.
                                                </p>
                                                <div className="mt-3 flex flex-row space-x-3 font-semibold">
                                                    <p>more:</p>
                                                    <a
                                                        className="underline"
                                                        href="https://www.thebluealliance.com/event/2024cabb"
                                                        aria-label="Battle at the Border qualification matches and standings."
                                                        target="_blank"
                                                    >
                                                        standings
                                                    </a>
                                                    <a
                                                        className="underline"
                                                        href="https://www.instagram.com/p/DBF5MvPRD5H/"
                                                        aria-label="Battle at the Border overview video."
                                                        target="_blank"
                                                    >
                                                        insta
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
        
                                        <div className="col-span-1 mb-5 grid rounded-lg bg-white py-10 text-white -md:place-items-center md:mr-5">
                                        <div className="mx-8 flex flex-col justify-center -md:items-center text-black">
                                                <h3 className="text-r3xl font-bold text-black">
                                                        Fairbotics 2024
                                                </h3>
                                                <p className="-md:mx-6 -md:text-center">
                                                The Pacific Showdown was a smaller off-season FRC competition held at the Del Mar Fair, where our team competed alongside 14 other teams under new leadership. We secured 7th place and advanced to the semi-finals. With a team of around 30 members, we helped construct the majority of the competition field and provided substantial assistance during teardown. Additionally, a few of our mentors volunteered in various roles, including as referees.
                                                </p>
                                                <div className="mt-3 flex flex-row space-x-3 font-semibold">
                                                    <p>more:</p>
                                                    <a
                                                        className="underline"
                                                        href="https://www.thebluealliance.com/event/2024cafb"
                                                        aria-label="Scores for Fairbotics 2024."
                                                        target="_blank"
                                                    >
                                                        standings
                                                    </a>
                                                    <a
                                                        className="underline"
                                                        href="https://www.instagram.com/p/C8SlhxqS5JP/"
                                                        aria-label="Fairbotics"
                                                        target="_blank"
                                                    >
                                                        insta
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative col-span-1 mb-5 mt-1 flex h-[45vh] select-none overflow-hidden rounded-lg">
                                            <Image
                                                src="https://cdn.team2658.org/web-public/outreach/robotFairbotics.JPG"
                                                alt="Fairbotics 2024"
                                                fill={true}
                                                className='object-cover'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-r2xl font-bold">
                                School Events
                            </h2>
                            <div id="schoolSetionContent" className="mb-5">
                                <div className="grid-rows-auto grid">
                                <div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
                                        <div className="relative col-span-1 mb-5 mt-1 flex h-[45vh] select-none overflow-hidden rounded-lg md:mr-5">
                                            <Image
                                                src="https://cdn.team2658.org/web-public/outreach/bobcatDay.jpg"
                                                alt="Battle At The Border 2024"
                                                fill={true}
                                                className='object-cover'
                                            />
                                        </div>
                                        <div className="col-span-1 mb-5 grid rounded-lg bg-black py-10 text-white -md:place-items-center">
                                        <div className="mx-8 flex flex-col justify-center -md:items-center">
                                                <h3 className="text-r3xl font-bold text-white">
                                                        Bobcat Day 2024
                                                </h3>
                                                <p className="-md:mx-6 -md:text-center">
                                                Bobcat Day hosted 8th graders from Bernardo Heights Middle School, with RB clubs showcasing their activities. Our robot was the main attraction, and we proudly represented our club, performing high-level demonstrations for the students.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
                                        <div className="relative col-span-1 mb-5 mt-1 flex h-[45vh] select-none overflow-hidden rounded-lg md:mr-5 -md:items-center -md:justify-center">
                                            <Image
                                                src="https://cdn.team2658.org/web-public/outreach/cte-expo.jpeg"
                                                alt=""
                                                fill={true}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="col-span-1 mb-5 grid rounded-lg bg-black py-10 text-white -md:place-items-center">
                                            <div className="mx-8 flex flex-col justify-center -md:items-center">
                                                <h3 className="text-r3xl font-bold">
                                                    <span className="bg-gradient-to-r from-[#00C498] to-[#19AEE7] bg-clip-text text-transparent">
                                                        CTE Expo 2023
                                                    </span>
                                                </h3>
                                                <p className="-md:mx-6 -md:text-center">
                                                    Team Σ-Motion participated
                                                    in PUSD's 2023 Career
                                                    Technical Education{" "}
                                                    {"(CTE) "}
                                                    Expo, showcasing our robot
                                                    and talking to families
                                                    about our team and FIRST.
                                                </p>
                                                <div className="mt-3 flex flex-row space-x-3 font-semibold">
                                                    <p>more:</p>
                                                    <a
                                                        className="underline"
                                                        href="https://www.sandiegouniontribune.com/pomerado-news/news/story/2023-05-31/poway-unifieds-sixth-annual-cte-expo-showcases-student-projects-and-exhibits#:~:text=Robotics%20at%20Rancho%20Bernardo%20High"
                                                        aria-label="San Diego Union Tribune article about the 2023 PUSD CTE Expo, featuring Team 2658."
                                                        target="_blank"
                                                    >
                                                        in the news
                                                    </a>
                                                    <a
                                                        className="underline"
                                                        href="https://www.instagram.com/p/CsnKCyarjjS/"
                                                        aria-label="Instagram/frcteam2658: 2023 CTE Expo"
                                                        target="_blank"
                                                    >
                                                        on instagram
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>*/}
                                    {/* set to h-[55vh] if 2nd row is ever used on larger screens */}
                                    <div className="row-span-auto grid-rows-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 omd:grid-rows-2 mb-2">
                                            <div className="relative col-span-1 h-[25vh] md:mr-5 rounded-lg">
                                                <Image
                                                    src="https://cdn.team2658.org/web-public/outreach/cte-expo.jpeg"
                                                    alt=""
                                                    fill={true}
                                                    className="object-cover"
                                                />
                                            </div>   
                                            <div className="col-span-1 flex flex-col items-center justify-center rounded-lg bg-white py-10 text-black lg:mr-5 -md:mt-3">
                                                <h3 className="mx-8 text-center text-r2xl font-bold olg:mx-[5.5rem]">
                                                    CTE Expo
                                                </h3>
                                                <div className="flex flex-row space-x-5 font-semibold">
                                                    <h4>2023-2024</h4>
                                                </div>

                                            </div>
                                            <div className="relative col-span-1 h-[25vh] md:mr-5 rounded-lg">
                                                <Image
                                                    src="https://cdn.team2658.org/web-public/outreach/posterCTE24.jpg"
                                                    alt=""
                                                    fill={true}
                                                    className="object-cover"
                                                />
                                            </div>
                                    </div>
                                    <div className="row-span-auto grid-rows-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 omd:grid-rows-2">
                                        <div className="col-span-1 flex flex-col items-center justify-center rounded-lg bg-white py-10 text-black md:mr-5">
                                            <h3 className="mx-8 text-center text-r2xl font-bold">
                                                8th Grade Info Night
                                            </h3>
                                            <div className="flex flex-row space-x-5 font-semibold">
                                                <h4>3/12/2024</h4>
                                                <h4>3/15/2022</h4>
                                                <h4>3/16/2021</h4>
                                            </div>
                                        </div>
                                        <div className="col-span-1 flex flex-col items-center justify-center rounded-lg bg-black py-10 text-white lg:mr-5 -md:mt-5">
                                            <h3 className="mx-8 text-center text-r2xl font-bold">
                                                WWES Science Night
                                            </h3>
                                            <div className="flex flex-row space-x-5 font-semibold">
                                                <h4>2014-2016</h4>
                                            </div>
                                        </div>
                                        {/* removed omd:mr-5 */}
                                        <div className="col-span-1 flex flex-col items-center justify-center rounded-lg bg-white py-10 text-black -lg:mt-3 omd:col-span-2">
                                            <h3 className="mx-8 text-center text-r2xl font-bold olg:mx-[5.5rem]">
                                                RBHS Robotics Open House
                                            </h3>
                                            <div className="flex flex-row space-x-5 font-semibold">
                                                <h4>6/7/2021</h4>
                                            </div>
                                        </div>
                                        {/* use view all when there is more to view. remember to change omd:grid-rows-2 to md:grid-rows-2 if this is re-eneabled */}
                                        {/* <div className="lg:col-span-3 mt-5 bg-white rounded-lg">
												view all
											</div> */}
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
                                                        2023
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
                                                            Faire
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
                                    <div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
                                        <div className="relative col-span-1 mb-5 h-[35vh] md:col-span-2">
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
