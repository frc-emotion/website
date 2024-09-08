"use client";

import { Fragment, useState } from "react";
import "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	XMarkIcon,
	ArrowRightIcon,
	ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
	BsPeopleFill,
	BsFillPersonBadgeFill,
	BsClipboardFill,
	BsPhoneFill,
	BsFillCalendarWeekFill,
	BsTrophyFill,
} from "react-icons/bs";
import { FaRobot, FaHammer } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { RiCheckboxBlankFill, RiSteering2Fill } from "react-icons/ri";
import { BiDonateHeart } from "react-icons/bi";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { MdElectricalServices, MdDesignServices } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cookies } from "next/dist/client/components/headers";
import { User } from "@/app/(auth)/login/page";

export default function Navbar({
	auth,
	user,
}: {
	auth: boolean;
	user: User | null;
}) {
	const router = useRouter();
	const mainMenuItems = [
		{
			title: "About",
			href: "/about",
		},
		{
			title: "Sponsors",
			href: "/sponsors",
		},
		{
			title: "Outreach",
			href: "/outreach",
		},
        {
            title: "Robots",
            href: "/robots",
        },
		{
			title: "Donate",
			href: "/donate",
		},
		{
			title: "Contact",
			href: "/contact",
		}
		
	];
	const moreMenuOne = [
		{
			title: "Member Home",
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
			title: "Attendance",
			description: "Hours for our 4.5 period class",
			href: "#",
			icon: BsFillCalendarWeekFill,
		},
		{
			title: "Join our Team",
			description: "Interest form and club rush info",
			href: "#",
			icon: BsClipboardFill,
		},
		{
			title: "Team App",
			description: "Download for iOS and Android",
			href: "#",
			icon: BsPhoneFill,
		},
	];
	const moreMenuTwo = [
		{
			title: "Software Team",
			description: "Documentation and resources",
			href: "#",
			icon: HiCodeBracketSquare,
		},
		{
			title: "Build Team",
			description: "Safety training and build timelines",
			href: "#",
			icon: FaHammer,
		},
		{
			title: "Electrical Team",
			description: "Training and project management",
			href: "#",
			icon: MdElectricalServices,
		},
		{
			title: "Drive Team",
			description: "Information for drive team",
			href: "#",
			icon: RiSteering2Fill,
		},
		{
			title: "Design Team",
			description: "CAD and design resources",
			href: "#",
			icon: MdDesignServices,
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

	const [mobileActiveItem, setMobileActiveItem] = useState(0);

	return (
		<div id="header" className="select-none bg-black text-teamYellow-400">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<Link href="/" className="text-r2xl font-semibold">
					Σ-Motion
				</Link>
				<Popover className="flex lg:hidden">
					<Popover.Button
						onClick={() => setMobileActiveItem(0)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon
							className="h-[30px] w-[30px]"
							aria-hidden="true"
						/>
					</Popover.Button>
					<Popover.Panel className="fixed inset-0 z-10 h-[100%] w-[100vw] bg-black">
						{/* close button */}
						<div className="relative z-30 float-right">
							<Popover.Button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
								<span className="sr-only">Close main menu</span>
								<XMarkIcon
									className="my-[30px] mr-[20px] h-[35px] w-[35px]"
									aria-hidden="true"
								/>
							</Popover.Button>
						</div>
						{/* main content */}
						<div className="absolute z-10 flex h-full w-full flex-col justify-center">
							{mobileActiveItem === 0 ? (
								<div className="flex flex-col items-center space-y-5">
									<Link
										href="/"
										className="text-r2xl font-semibold hover:underline"
									>
										Home
									</Link>

									{mainMenuItems.map((item) => (
										<Popover.Button
											className="text-r2xl font-semibold hover:underline"
											key={item.title}
											onClick={() =>
												window.location.replace(
													item.href
												)
											}
										>
											{item.title}
										</Popover.Button>
									))}

									{/* <div>
                                        <button
                                            onClick={() =>
                                                setMobileActiveItem(
                                                    mobileActiveItem + 1
                                                )
                                            }
                                            className="text-r2xl font-semibold hover:underline"
                                        >
                                            More
                                            <ArrowRightIcon className="ml-[10px] inline h-[30px] w-[30px] -translate-y-[0.10rem] no-underline" />
                                        </button>
                                    </div> */}
								</div>
							) : mobileActiveItem === 1 ? (
								<div className="flex flex-col items-center justify-center space-y-5">
									<div>
										<button
											onClick={() =>
												setMobileActiveItem(
													mobileActiveItem - 1
												)
											}
											className="text-r2xl font-semibold hover:underline"
										>
											<ArrowLeftIcon className="mr-[10px] inline h-[30px] w-[30px] -translate-y-[0.10rem] no-underline" />
											Back
										</button>
									</div>
									{moreMenuOne.map((item) => (
										<Link
											key={item.title}
											href={item.href}
											className="text-r2xl font-semibold hover:underline"
										>
											{item.title}
										</Link>
									))}
									<div>
										<button
											onClick={() =>
												setMobileActiveItem(
													mobileActiveItem + 1
												)
											}
											className="text-r2xl font-semibold hover:underline"
										>
											More
											<ArrowRightIcon className="ml-[10px] inline h-[30px] w-[30px] -translate-y-[0.10rem] no-underline" />
										</button>
									</div>
								</div>
							) : mobileActiveItem === 2 ? (
								<div className="flex flex-col items-center justify-center space-y-5">
									<div>
										<button
											onClick={() =>
												setMobileActiveItem(
													mobileActiveItem - 1
												)
											}
											className="text-r2xl font-semibold hover:underline"
										>
											<ArrowLeftIcon className="mr-[10px] inline h-[30px] w-[30px] -translate-y-[0.10rem] no-underline" />
											Back
										</button>
									</div>
									{moreMenuTwo.map((item) => (
										<Link
											key={item.title}
											href={item.href}
											className="text-r2xl font-semibold hover:underline"
										>
											{item.title}
										</Link>
									))}
									<div>
										<button
											onClick={() =>
												setMobileActiveItem(
													mobileActiveItem + 1
												)
											}
											className="text-r2xl font-semibold hover:underline"
										>
											More
											<ArrowRightIcon className="ml-[10px] inline h-[30px] w-[30px] -translate-y-[0.10rem] no-underline" />
										</button>
									</div>
								</div>
							) : mobileActiveItem === 3 ? (
								<div className="flex flex-col items-center justify-center space-y-5">
									<div>
										<button
											onClick={() =>
												setMobileActiveItem(
													mobileActiveItem - 1
												)
											}
											className="text-r2xl font-semibold hover:underline"
										>
											<ArrowLeftIcon className="mr-[10px] inline h-[30px] w-[30px] -translate-y-[0.10rem] no-underline" />
											Back
										</button>
									</div>
									{moreMenuThree.map((item) => (
										<Link
											key={item.title}
											href={item.href}
											className="text-r2xl font-semibold hover:underline"
										>
											{item.title}
										</Link>
									))}
								</div>
							) : null}
							<div className="mt-[3.5rem] flex flex-col items-center justify-center space-y-5">
								<Link
									href="/login"
									className="text-r2xl font-semibold hover:underline"
								>
									{user?.firstname ?? "Login"}
								</Link>
							</div>
						</div>
					</Popover.Panel>
				</Popover>
				<div className="absolute left-1/2 hidden -translate-x-1/2 transform space-x-8 text-rmd font-semibold lg:flex">
					{mainMenuItems.map((item) => (
						<Link
							key={item.title}
							href={item.href}
							className="hover:underline"
						>
							{item.title}
						</Link>
					))}
					<Popover className="hidden">
						<Popover.Button className="items-center gap-x-1 lg:flex">
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
							<Popover.Panel className="absolute left-1/2 z-10 mt-7 w-screen max-w-md -translate-x-1/2 transform rounded-3xl bg-white px-4 shadow-lg ring-1 ring-gray-900/5 sm:px-0 lg:max-h-[550px] lg:max-w-[992px] xl:max-h-[525px] xl:max-w-[1250px]">
								<div className="grid grid-cols-3 grid-rows-5 px-[25px] pt-[30px]">
									<div className="col-span-1 lg:space-y-0 xl:space-y-3">
										{moreMenuOne.map((item) => (
											<div
												key={item.title}
												className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
											>
												<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
													<item.icon
														className="h-6 w-6 text-gray-600 group-hover:text-teamYellow-600"
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
									<div className="col-span-1 lg:space-y-0 xl:space-y-3">
										{moreMenuTwo.map((item) => (
											<div
												key={item.title}
												className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
											>
												<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
													<item.icon
														className="h-6 w-6 text-gray-600 group-hover:text-teamYellow-600"
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
									<div className="col-span-1 lg:space-y-0 xl:space-y-3">
										{moreMenuThree.map((item) => (
											<div
												key={item.title}
												className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
											>
												<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
													<item.icon
														className="h-6 w-6 text-gray-600 group-hover:text-teamYellow-600"
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
				{/* lg:flex space-x-8 text-rmd font-semibold */}
				<div className="hidden space-x-8 text-rmd font-semibold lg:flex">
					<Link href="/login" className="hover:underline">
						{user?.firstname ?? "Login"}
					</Link>
				</div>
			</nav>
		</div>
	);
}
