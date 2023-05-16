"use client";

import { Fragment } from "react";
import "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
	BsPeopleFill,
	BsFillPersonBadgeFill,
	BsFillHouseDoorFill,
	BsFillPersonPlusFill,
	BsClipboardFill,
	BsPhoneFill,
	BsFillCalendarWeekFill,
	BsFillDiagram3Fill,
	BsFillKanbanFill,
	BsFiles,
	BsTrophyFill,
} from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { BiDonateHeart } from "react-icons/bi";
import Link from "next/link";

export default function Navbar() {
	const mainMenuItems = [
		{
			title: "About",
			href: "#",
		},
		{
			title: "Sponsors",
			href: "#",
		},
		{
			title: "Outreach",
			href: "#",
		},
		{
			title: "Blog",
			href: "#",
		},
		{
			title: "Contact",
			href: "#",
		},
	];
	const moreMenuOne = [
		{
			title: "Team Resources",
			description: "Information for general members",
			href: "#",
			icon: BsPeopleFill,
		},
		{
			title: "Lead Resources",
			description: "For leads, advisors, and mentors",
			href: "#",
			icon: BsFillPersonBadgeFill,
		},
		{
			title: "Parent Resources",
			description: "Team information for parents",
			href: "#",
			icon: BsFillHouseDoorFill,
		},
		{
			title: "New Members",
			description: "Onboarding and subteam selection",
			href: "#",
			icon: BsFillPersonPlusFill,
		},
		{
			title: "Join our Team",
			description: "Interest form and club rush info",
			href: "#",
			icon: BsClipboardFill,
		},
	];
	const moreMenuTwo = [
		{
			title: "Team App",
			description: "Download for iOS and Android",
			href: "#",
			icon: BsPhoneFill,
		},
		{
			title: "Attendance",
			description: "Hours for our 4.5 period class",
			href: "#",
			icon: BsFillCalendarWeekFill,
		},
		{
			title: "Projects and Tasks",
			description: "See and manage subteam projects",
			href: "#",
			icon: BsFillKanbanFill,
		},
		{
			title: "Directory",
			description: "View profiles and contact info",
			href: "#",
			icon: BsFillDiagram3Fill,
		},
		{
			title: "Documentation",
			description: "Docs for our team's software tools",
			href: "#",
			icon: BsFiles,
		},
	];
	const moreMenuThree = [
		{
			title: "Competitions",
			description: "See where we're headed",
			href: "#",
			icon: FaRobot,
		},
		{
			title: "Awards",
			description: "See what we've accomplished",
			href: "#",
			icon: BsTrophyFill,
		},
		{
			title: "Photos",
			description: "Gallery from past events",
			href: "#",
			icon: IoMdPhotos,
		},
		{
			title: "FIRST",
			description: "Info on FIRST, FRC, FLL, and FTC",
			href: "#",
			icon: RiCheckboxBlankFill,
		},
		{
			title: "Donate",
			description: "Make a tax-deductible contribution",
			href: "#",
			icon: BiDonateHeart,
		},
	];
	return (
		<header className="bg-teamYellow select-none">
			<nav className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8 flex">
				<Link
					href="/"
					className="flex lg:flex-1 font-semibold text-[30px]"
				>
					Σ-Motion
				</Link>
				<div className="flex lg:hidden">
					<Popover>
						<Popover.Button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
							<span className="sr-only">Open main menu</span>
							<Bars3Icon
								className="h-[30px] w-[30px]"
								aria-hidden="true"
							/>
						</Popover.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="bg-white rounded-lg absolute right-3 top-5 md:w-[45vw] sm:w-[50vw] w-[70vw] h-[95vh]">
								<div>
									<Popover.Button className="float-right">
										<span className="sr-only">
											Close main menu
										</span>
										<XMarkIcon
											className="h-[33px] w-[33px] m-4"
											aria-hidden="true"
										/>
									</Popover.Button>
								</div>
								<div>
									Home About Sponsors Outreach Blog Contact
									More
								</div>
								<div>Settings Login</div>
							</Popover.Panel>
						</Transition>
					</Popover>
				</div>
				<div className="hidden lg:flex space-x-8 text-[17px] font-semibold absolute left-1/2 transform -translate-x-1/2">
					{mainMenuItems.map((item) => (
						<Link href={item.href} className="hover:underline">
							{item.title}
						</Link>
					))}
					<Popover>
						<Popover.Button className="lg:flex items-center gap-x-1">
							More{" "}
							<ChevronDownIcon
								className="h-5 w-5 flex-none"
								aria-hidden="true"
							/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute z-10 w-screen max-w-md px-4 mt-7 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-[992px] xl:max-w-[1250px] xl:max-h-[525px] lg:max-h-[550px] rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
								<div className="grid grid-cols-3 grid-rows-5 pt-[30px] px-[25px]">
									<div className="col-span-1 xl:space-y-3 lg:space-y-0">
										{moreMenuOne.map((item) => (
											<div
												key={item.title}
												className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
											>
												<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
													<item.icon
														className="h-6 w-6 text-gray-600 group-hover:text-teamYellow-dark"
														aria-hidden="true"
													/>
												</div>
												<div className="flex-auto">
													<Link
														href={item.href}
														className="block font-semibold text-gray-900"
													>
														{item.title}
														<span className="absolute inset-0" />
													</Link>
													<p className="mt-1 text-gray-600">
														{item.description}
													</p>
												</div>
											</div>
										))}
									</div>
									<div className="col-span-1 xl:space-y-3 lg:space-y-0">
										{moreMenuTwo.map((item) => (
											<div
												key={item.title}
												className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
											>
												<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
													<item.icon
														className="h-6 w-6 text-gray-600 group-hover:text-teamYellow-dark"
														aria-hidden="true"
													/>
												</div>
												<div className="flex-auto">
													<Link
														href={item.href}
														className="block font-semibold text-gray-900"
													>
														{item.title}
														<span className="absolute inset-0" />
													</Link>
													<p className="mt-1 text-gray-600">
														{item.description}
													</p>
												</div>
											</div>
										))}
									</div>
									<div className="col-span-1 xl:space-y-3 lg:space-y-0">
										{moreMenuThree.map((item) => (
											<div
												key={item.title}
												className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
											>
												<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
													<item.icon
														className="h-6 w-6 text-gray-600 group-hover:text-teamYellow-dark"
														aria-hidden="true"
													/>
												</div>
												<div className="flex-auto">
													<Link
														href={item.href}
														className="block font-semibold text-gray-900"
													>
														{item.title}
														<span className="absolute inset-0" />
													</Link>
													<p className="mt-1 text-gray-600">
														{item.description}
													</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>
				</div>
				<div className="hidden lg:flex space-x-8 text-[17px] font-semibold">
					<Link href="#">Settings</Link>
					<Link href="/login" className="hover:underline">
						Login
					</Link>
				</div>
			</nav>
		</header>
	);
}
