import AboutUsText from "@/components/sections/about/AboutUs";
import { Metadata } from "next";
import ".//index.css";
import Grid3x2 from "@/components/containers/Grid3x2";
import TextWithIcon from "@/components/TextWithIcon";
import {
    FaLaptopCode,
    FaPencilRuler,
    FaRegNewspaper,
    FaUserTie,
    FaWrench,
} from "react-icons/fa";
import { FiBatteryCharging } from "react-icons/fi";

export const metadata: Metadata = {
    title: "About Us | FRC Team 2658",
    description:
        "Team Σ-Motion is a high school FIRST robotics team at Rancho Bernardo High School dedicated to promoting Science, Technology, Engineering, and Mathematics.",
};

export default function AboutPage() {
    const advisorsAndMentors = [
        {
            name: "Katherine Rumsey",
            title: "Advisor"
        },
        {
            name: "Brian Dunlea",
            title: "Advisor"
        },
        {
            name: "Evengy Korol",
            title: "Mentor"
        },
        {
            name: "Clifford Harrison",
            title: "Mentor"
        },
        {
            name: "Stanly Kudinov",
            title: "Mentor"
        },
        {
            name: "Sherveen Shokoohi",
            title: "Mentor"
        },
        {
            name: "Michael Ballinger",
            title: "Mentor"
        },
        {
            name: "Ronnie Villagran",
            title: "Mentor"
        },
        {
            name: "Veerabhadram Devi",
            title: "Mentor"
        },
        {
            name: "Jason Ballinger",
            title: "Mentor"
        }
    ];
    const Alumni = [
        /*
        {
            name: "Garrett the Carrot",
            roles: [
                {
                    title: "Overlord",
                    year: "2024-2099"
                },
                {
                    title: "Carrot",
                    year: "0000-9999"
                }
            ]
        },
        */
        {
            
            name: "Karan Thakkar",
            roles: [
                {
                    title: "President",
                    year: "2023-2024"
                },
                {
                    title: "Vice President",
                    year: "2022-2023"
                }
            ]
        },
        {
            name: "Meghna Rath",
            roles: [
                {
                    title: "Vice President",
                    year: "2023-2024"
                }
            ]
        },
        {
            name: "John Chang",
            roles: [
                {
                    title: "President",
                    year: "2022-2023"
                },
                {
                    title: "Vice President",
                    year: "2021-2022"
                }
            ]
        },
        {
            name: "Keshav Narasimma",
            roles: [
                {
                    title: "President",
                    year: "2021-2022"
                },
                {
                    title: "Vice President",
                    year: "2020-2021"
                }
            ]
        },
        {
            name: "Toshko Andreev",
            roles: [
                {
                    title: "President",
                    year: "2020-2021"
                },
                {
                    title: "Vice President",
                    year: "2019-2020"
                }
            ]
        },
        {
            name: "Krish Thakkar",
            roles: [
                {
                    title: "President",
                    year: "2020-2021"
                },
                {
                    title: "Vice President",
                    year: "2019-2020"
                }
            ]
        },
        {
            name: "Beni Korol",
            roles: [
                {
                    title: "President",
                    year: "2019-2020"
                },
                {
                    title: "Vice President",
                    year: "2018-2019"
                }
            ]
        },
        {
            name: "Andrew da Cunha",
            roles: [
                {
                    title: "President",
                    year: "2018-2019"
                },
                {
                    title: "Vice President",
                    year: "2017-2018"
                }
            ]
        },
        {
            name: "Anmol Seth",
            roles: [
                {
                    title: "President",
                    year: "2017-2018"
                },
                {
                    title: "Vice President",
                    year: "2016-2017"
                }
            ]
        },
        {
            name: "Nicolas Wiscour-Conter",
            roles: [
                {
                    title: "President",
                    year: "2016-2017"
                },
                {
                    title: "Vice President",
                    year: "2015-2016"
                }
            ]
        },
        {
            name: "Mario Maldonado-Santos",
            roles: [
                {
                    title: "President",
                    year: "2015-2016"
                }
            ]
        },
        {
            name: "Nikhil Shinde",
            roles: [
                {
                    title: "Vice President",
                    year: "2014-2015"
                }
            ]
        },
        {
            name: "Yashes Srinivasan",
            roles: [
                {
                    title: "President",
                    year: "2014-2015"
                },
                {
                    title: "Vice President",
                    year: "2013-2014"
                }
            ]
        },
        {
            name: "Nithin Dharmaraj",
            roles: [
                {
                    title: "President",
                    year: "2023-2014"
                }
            ]
        },
        {
            name: "Aditya Zadgaonkar",
            roles: [
                {
                    title: "President",
                    year: "2012-2013"
                }
            ]
        },
        {
            name: "Eric Hammon",
            roles: [
                {
                    title: "Vice President",
                    year: "2012-2013"
                }
            ]
        },
        {
            name: "Karthik Jayakumar",
            roles: [
                {
                    title: "President",
                    year: "2011-2012"
                }
            ]
        },
        {
            name: "Wassim Alsafi",
            roles: [
                {
                    title: "Vice President",
                    year: "2011-2012"
                }
            ]
        },
        {
            name: "Paul Warren",
            roles: [
                {
                    title: "President",
                    year: "2010-2011"
                }
            ]
        },
        {
            name: "Zachary Forster",
            roles: [
                {
                    title: "President",
                    year: "2009-2010"
                }
            ]
        },
        {
            name: "Sahar Mesri",
            roles: [
                {
                    title: "Vice President",
                    year: "2009-2011"
                }
            ]
        },
        {
            name: "Jay Dey",
            roles: [
                {
                    title: "President",
                    year: "2008-2009"
                }
            ]
        },
        {
            name: "Richard Lin",
            roles: [
                {
                    title: "Vice President",
                    year: "2008-2009"
                },
                {
                    title: "President",
                    year: "2007-2008"
                }
            ]
        }
    ];
    return (
        <main className="min-h-[55vh]">
            <div className="bgAbout table h-[30rem] w-full overflow-hidden">
                <h1 className="table-cell h-full text-center align-middle text-r10xl font-bold backdrop-blur-sm backdrop-brightness-50 text-teamYellow-100">
                    About Us
                </h1>
            </div>
            <section className="bg-teamYellow-400">
                <h2 className="bg-teamYellow-400 text-center font-bold">
                    Team Structure
                </h2>
                <AboutUsText yellow>
                    Team 2658 is built through a simple and effective leadership
                    structure. Our team is split up into 5 different subteams:
                    Build, Design, Software, Electrical, and Marketing/Business.
                    Each subteam provides the training and ability for every
                    single member and allows them to strive based on their
                    participation and commitment to our team. Elected subteam
                    leads manage their respective subteams and plan out their
                    training goals. Above the leads lie the
                    executives-President, Vice President, Secretary, Treasurer,
                    and Advisors- where managerial responsibilities are
                    dispersed. Our mentors play an important role in our
                    upbringing as a team, their assistance and guidance to the
                    team's decisions and current skills.
                </AboutUsText>
            </section>
            <section className="py-8 text-teamYellow-400">
                <h2 className="text-center">Subteams</h2>
                <Grid3x2>
                    <TextWithIcon heading="Software" icon={FaLaptopCode}>
                        <p>
                            Software manages the development and operations of
                            the team app and website, as well as writing,
                            testing, and deploying robot code
                        </p>
                    </TextWithIcon>
                    <TextWithIcon heading="Marketing" icon={FaRegNewspaper}>
                        <p>
                            Marketing handles all business aspects of the team,
                            including grants, organizing outreach events, and
                            desiginng team merchandise
                        </p>
                    </TextWithIcon>
                    <TextWithIcon heading="Design" icon={FaPencilRuler}>
                        <p>
                            Design brainstorms and designs the robot, utilizing
                            CAD and dimensional thinking
                        </p>
                    </TextWithIcon>
                    <TextWithIcon heading="Build" icon={FaWrench}>
                        <p>
                            Build works closely with design to handle the
                            mechanical aspects of the robot and troubleshoot
                            mechanical issues
                        </p>
                    </TextWithIcon>
                    <TextWithIcon heading="Electrical" icon={FiBatteryCharging}>
                        <p>
                            Electrical does the wiring and configuration of the
                            electrical components of the robot, and handles
                            pneumatics
                        </p>
                    </TextWithIcon>
                    <TextWithIcon heading="Execs" icon={FaUserTie}>
                        <p>
                            Student executives help every other subteam and
                            handle all the other aspects of running our team,
                            including finances, communication, coordination, and
                            much more
                        </p>
                    </TextWithIcon>
                </Grid3x2>
            </section>
            <section className="bg-teamYellow-400 py-8">
                <h2 className="text-center">Student Leadership</h2>
                <section className="grid-cols-5 md:grid">
                    <div className="p-4">
                        <h3 className="m-1 text-center text-r2xl font-bold">
                            Design <br /> Lead
                        </h3>
                        <ul className="text-center text-rmd font-semibold">
                            <li>Neev Daga</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h3 className="m-1 text-center text-r2xl font-bold">
                            Build Leads
                        </h3>
                        <ul className="text-center text-rmd font-semibold">
                            <li>Roy Maldonaldo</li>
                            <li>Radhika Patil</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h3 className="m-1 text-center text-r2xl font-bold">
                            Software Leads
                        </h3>
                        <ul className="text-center text-rmd font-semibold">
                            <li>Nathan Gillespie</li>
                            <li>Peyton Slape</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h3 className="m-1 text-center text-r2xl font-bold">
                            Electrical Leads
                        </h3>
                        <ul className="text-center text-rmd font-semibold">
                            <li>Rithik Ohri</li>
                            <li>Robert Morrison</li>
                            <li>Jaden Trinidad</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h3 className="m-1 text-center text-r2xl font-bold">
                            Marketing <br /> Leads
                        </h3>
                        <ul className="text-center text-rmd font-semibold">
                            <li>Evan Lee</li>
                            <li>Shravya Hatathodi</li>
                        </ul>
                    </div>
                    <div className="col-span-5 p-4">
                        <h3 className="m-1 text-center text-r2xl font-bold">
                            Execs
                        </h3>
                        <ul className="my-4 grid-cols-3 gap-y-6 text-center text-rlg font-semibold md:grid">
                            <li>
                                <strong> President: </strong> Garrett Sayson
                            </li>
                            <li>
                                <strong>Vice President: </strong> Arshan Shokoohi
                            </li>
                            <li>
                                <strong>Vice President: </strong> Simeon Kim
                            </li>
                        </ul>
                        <ul className="my-4 grid-cols-2 gap-y-6 text-center text-rlg font-semibold md:grid">
                            <li>
                                <strong>Treasurer: </strong> Vedanth Kuruvadi
                            </li>
                            <li>
                                <strong>Secretary: </strong> Sophia Newton
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
            <section className="width-screen grid grid-cols-2 gap-y-12 bg-black py-8 text-teamYellow-400">
                <h2 className="col-span-2 text-center">Advisors and Mentors</h2>
                {advisorsAndMentors.map((item) => (
                    <div>
                    <h3 className="text-center text-r3xl font-bold">
                        {item.name}
                    </h3>
                    <h4 className="text-center text-rlg">{item.title}</h4>
                </div>
                ))}
            </section>
            <section className="grid grid-cols-2 gap-y-6 bg-teamYellow-400 py-8 text-black xl:grid-cols-3">
                <h2 className="col-span-full m-4 text-center">Alumni</h2>
                {Alumni.map((item) => (
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">{item.name}</h3>
                    {item.roles.map((role) => (
                        <h4 className="text-rlg">{role.title}, {role.year}</h4>                        
                    ))}
                </div>
                ))}
            </section>
        </main>
    );
}
