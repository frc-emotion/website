"use client";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import { useState } from "react";
import Image from "next/image";

export default function Outreach() {
	// const [calendarExpanded, setCalendarExpanded] = useState(true);
	const [schoolExpanded, setSchoolExpanded] = useState(true);
	const [competitionsExpanded, setCompetitionsExpanded] = useState(true);
	const [fairsExpanded, setFairsExpanded] = useState(true);
	const [workshopsExpanded, setWorksopsExpanded] = useState(true);
	const [FTCExpanded, setFTCExpanded] = useState(true);
	const [FLLExpanded, setFLLExpanded] = useState(true);
	const [miscExpanded, setMiscExpanded] = useState(true);

	const allStates = [
		// calendarExpanded,
		schoolExpanded,
		competitionsExpanded,
		fairsExpanded,
		workshopsExpanded,
		FTCExpanded,
		FLLExpanded,
		miscExpanded,
	];
	const allSets = [
		// setCalendarExpanded,
		setSchoolExpanded,
		setCompetitionsExpanded,
		setFairsExpanded,
		setWorksopsExpanded,
		setFTCExpanded,
		setFLLExpanded,
		setMiscExpanded,
	];
	const expandAll = () => {
		for (let i = 0; i < allSets.length; i++) {
			allSets[i](true);
		}
	};
	const collapseAll = () => {
		for (let i = 0; i < allSets.length; i++) {
			allSets[i](false);
		}
	};
	const allExpanded = () => {
		for (let i = 0; i < allStates.length; i++) {
			if (!allStates[i]) return false;
		}
		return true;
	};
	const allCollapsed = () => {
		for (let i = 0; i < allStates.length; i++) {
			if (allStates[i]) return false;
		}
		return true;
	};

	return (
		<div className="bg-teamYellow-500">
			<Navbar />
			<div
				id="hero"
				className="flex items-center justify-center -xs:h-[35vh] -sm:h-[45vh] h-[70vh] mx-[6vw] mt-[1vh] bg-[url('/outreach/head.jpeg')] bg-bottom bg-cover bg-no-repeat select-none rounded-lg"
			>
				<h1 className="font-bold text-[5rem] -sm:text-[3.5rem] text-white">
					Outreach
				</h1>
			</div>
			<div id="content" className="mx-[6vw] mt-[4vh] mb-[8vh]">
				<div>
					<div className="flex flex-row space-x-[3rem] select-none">
						<button
							className={`font-bold ${
								allExpanded()
									? "opacity-100 cursor-not-allowed"
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
									? "opacity-100 cursor-not-allowed"
									: "opacity-60 hover:opacity-100"
							}`}
							onClick={() => {
								collapseAll();
							}}
						>
							collapse all
						</button>
					</div>
					<div className="mt-[0.4rem] space-y-2">
						{/* TODO: Calendar coming in a later version, will integrate with other functions of the site */}
						{/* <div id="calendarSection">
							<button
								className={`text-[2rem] ${
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
						<div id="schoolSection">
							<button
								className={`text-[2rem] ${
									schoolExpanded
										? "opacity-100 mb-[0.25rem]"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setSchoolExpanded(!schoolExpanded);
								}}
							>
								School Events
							</button>
							{schoolExpanded ? (
								<div
									id="schoolSetionContent"
									className="mb-[1.5rem]"
								>
									<div className="grid grid-rows-auto">
										<div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
											<div className="col-span-1 relative overflow-hidden mt-1 mb-5 md:mr-5 rounded-lg h-[45vh] select-none flex -md:items-center -md:justify-center">
												<Image
													src="/outreach/cte-expo.jpeg"
													alt=""
													fill={true}
													className="object-cover"
												/>
											</div>
											<div className="col-span-1 grid -md:place-items-center h-[45vh] bg-black text-white mb-5 rounded-lg">
												<div className="mx-8 flex flex-col -md:items-center justify-center">
													<h3 className="font-bold -hlg:text-[32px] text-[40px] xl:text-[58px]">
														<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C498] to-[#19AEE7]">
															CTE Expo 2023
														</span>
													</h3>
													<p className="-md:text-center -md:mx-6">
														Team Σ-Motion
														participated in PUSD's
														2023 Career Technical
														Education {"(CTE) "}
														Expo, showcasing our
														robot and talking to
														families about our team
														and FIRST.
													</p>
													<div className="flex flex-row space-x-3 mt-3 font-semibold">
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
										</div>
										{/* set to h-[55vh] if 2nd row is ever used on larger screens */}
										<div className="row-span-auto grid grid-rows-auto grid-cols-1 omd:grid-rows-2 md:grid-cols-2 lg:grid-cols-3">
											<div className="h-[25vh] col-span-1 md:mr-5 bg-white text-rose-600 rounded-lg flex flex-col justify-center items-center">
												<h3 className="mx-8 text-[32px] font-bold text-center">
													8th Grade Info Night
												</h3>
												<div className="flex flex-row space-x-5 font-semibold">
													<h4>3/15/2022</h4>
													<h4>3/16/2021</h4>
												</div>
											</div>
											<div className="h-[25vh] col-span-1 -md:mt-5 lg:mr-5 bg-black text-amber-200 rounded-lg flex flex-col justify-center items-center">
												<h3 className="mx-8 text-[32px] font-bold text-center">
													WWES Science Night
												</h3>
												<div className="flex flex-row space-x-5 font-semibold">
													<h4>2014-2016</h4>
												</div>
											</div>
											{/* removed omd:mr-5 */}
											<div className="h-[25vh] col-span-1 -lg:mt-3 omd:col-span-2 text-sky-600 bg-white rounded-lg flex flex-col justify-center items-center">
												<h3 className="olg:mx-[5.5rem] mx-8 text-[32px] font-bold text-center">
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
							) : null}
						</div>
						<div id="competitionSection">
							<button
								className={`text-[2rem] ${
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
							</button>
						</div>
						<div id="fairsSection">
							<button
								className={`text-[2rem] ${
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
							</button>
						</div>
						<div id="workshopsSection">
							<button
								className={`text-[2rem] ${
									workshopsExpanded
										? "opacity-100"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setWorksopsExpanded(!workshopsExpanded);
								}}
							>
								Workshops
							</button>
						</div>
						<div id="FTCSection">
							<button
								className={`text-[2rem] ${
									FTCExpanded
										? "opacity-100"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setFTCExpanded(!FTCExpanded);
								}}
							>
								FTC Teams
							</button>
						</div>
						<div id="FLLSection">
							<button
								className={`text-[2rem] ${
									FLLExpanded
										? "opacity-100"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setFLLExpanded(!FLLExpanded);
								}}
							>
								FLL Teams
							</button>
						</div>
						<div id="miscSection">
							<button
								className={`text-[2rem] ${
									miscExpanded
										? "opacity-100"
										: "opacity-60 hover:opacity-100"
								} font-bold`}
								onClick={() => {
									setMiscExpanded(!miscExpanded);
								}}
							>
								Miscellaneous
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
