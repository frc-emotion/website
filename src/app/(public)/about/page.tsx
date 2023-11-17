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
                            Design <br /> Leads
                        </h3>
                        <ul className="text-center text-rmd font-semibold">
                            <li>Simeon Kim</li>
                            <li>Kaiden Simon</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h3 className="m-1 text-center text-r2xl font-bold">
                            Build Leads
                        </h3>
                        <ul className="text-center text-rmd font-semibold">
                            <li>Drhuv Patel</li>
                            <li>Bella Pineda</li>
                            <li>Katie Schmitz</li>
                            <li>Kaitlyn Nguy (Safety Lead)</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h3 className="m-1 text-center text-r2xl font-bold">
                            Software Leads
                        </h3>
                        <ul className="text-center text-rmd font-semibold">
                            <li>Nova Mondal</li>
                            <li>Jason Ballinger</li>
                            <li>Preena Maruthavelu</li>
                            <li>Shravan Ramakrishna</li>
                            <li>Arshan Shokoohi</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h3 className="m-1 text-center text-r2xl font-bold">
                            Electrical Leads
                        </h3>
                        <ul className="text-center text-rmd font-semibold">
                            <li>Ila Gowda</li>
                            <li>Sarika Patil</li>
                            <li>Robert Morrison</li>
                            <li>Jaden Trinidad</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h3 className="m-1 text-center text-r2xl font-bold">
                            Marketing <br /> Leads
                        </h3>
                        <ul className="text-center text-rmd font-semibold">
                            <li>Sachin Nayak</li>
                            <li>Shravya Hotathodi</li>
                        </ul>
                    </div>
                    <div className="col-span-5 p-4">
                        <h3 className="m-1 text-center text-r2xl font-bold">
                            Execs
                        </h3>
                        <ul className="my-4 grid-cols-3 gap-y-6 text-center text-rlg font-semibold md:grid">
                            <li>
                                <strong> President: </strong> Karan Thakkar
                            </li>
                            <li>
                                <strong>Vice President: </strong> Meghna Rath
                            </li>
                            <li>
                                <strong>Vice President: </strong> Garrett Sayson
                            </li>
                            <li>
                                <strong>Treasurer: </strong> Karan Pothula
                            </li>
                            <li>
                                <strong>Treasurer: </strong>Ryan Fadaiian
                            </li>
                            <li>
                                <strong>Secretary: </strong> Ashley Applegate
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
            <section className="width-screen grid grid-cols-2 gap-y-12 bg-black py-8 text-teamYellow-400">
                <h2 className="col-span-2 text-center">Advisors and Mentors</h2>
                <div>
                    <h3 className="text-center text-r3xl font-bold">
                        Katherine Rumsey
                    </h3>
                    <h4 className="text-center text-rlg">Advisor</h4>
                </div>
                <div>
                    <h3 className="text-center text-r3xl font-bold">
                        Brian Dunlea
                    </h3>
                    <h4 className="text-center text-rlg">Advisor</h4>
                </div>
                <div>
                    <h3 className="text-center text-r3xl font-bold">
                        Evengy Korol
                    </h3>
                    <h4 className="text-center text-rlg">Mentor</h4>
                </div>
                <div>
                    <h3 className="text-center text-r3xl font-bold">
                        Clifford Harrison
                    </h3>
                    <h4 className="text-center text-rlg">Mentor</h4>
                </div>
                <div>
                    <h3 className="text-center text-r3xl font-bold">
                        Stanly Kudinov
                    </h3>
                    <h4 className="text-center text-rlg">Mentor</h4>
                </div>
                <div>
                    <h3 className="text-center text-r3xl font-bold">
                        Sherveen Shokoohi
                    </h3>
                    <h4 className="text-center text-rlg">Mentor</h4>
                </div>
                <div>
                    <h3 className="text-center text-r3xl font-bold">
                        Michael Ballinger
                    </h3>
                    <h4 className="text-center text-rlg">Mentor</h4>
                </div>
                <div>
                    <h3 className="text-center text-r3xl font-bold">
                        Ronnie Villagran
                    </h3>
                    <h4 className="text-center text-rlg">Mentor</h4>
                </div>
            </section>
            <section className="grid grid-cols-2 gap-y-6 bg-teamYellow-400 py-8 text-black xl:grid-cols-3">
                <h2 className="col-span-full m-4 text-center">Alumni</h2>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">John Chang</h3>
                    <h4 className="text-rlg">President, 2022-2023</h4>
                    <h4 className="text-rlg">Vice President, 2021-2022</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">
                        Keshav Narasimma
                    </h3>
                    <h4 className="text-rlg">President, 2021-2022</h4>
                    <h4 className="text-rlg">Vice President, 2020-2021</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Toshko Andreev</h3>
                    <h4 className="text-rlg">President, 2020-2021</h4>
                    <h4 className="text-rlg">Vice President, 2019-2020</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Krish Thakkar</h3>
                    <h4 className="text-rlg">President, 2020-2021</h4>
                    <h4 className="text-rlg">Vice President, 2019-2020</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Beni Korol</h3>
                    <h4 className="text-rlg">President, 2019-2020</h4>
                    <h4 className="text-rlg">Vice President, 2018-2019</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Andrew da Cunha</h3>
                    <h4 className="text-rlg">President, 2018-2019</h4>
                    <h4 className="text-rlg">Vice President, 2017-2018</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Anmol Seth</h3>
                    <h4 className="text-rlg">President, 2017-2018</h4>
                    <h4 className="text-rlg">Vice President, 2016-2017</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">
                        Nicolas Wiscour-Conter
                    </h3>
                    <h4 className="text-rlg">President, 2016-2017</h4>
                    <h4 className="text-rlg">Vice President, 2015-2016</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">
                        Mario Maldonado-Santos
                    </h3>
                    <h4 className="text-rlg">President, 2015-2016</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Nikhil Shinde</h3>
                    <h4 className="text-rlg">Vice President, 2014-2015</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">
                        Yashes Srinivasan
                    </h3>
                    <h4 className="text-rlg">President, 2014-2015</h4>
                    <h4 className="text-rlg">Vice President, 2013-2014</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">
                        Nithin Dharmaraj
                    </h3>
                    <h4 className="text-rlg">President, 2013-2014</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">
                        Aditya Zadgaonkar
                    </h3>
                    <h4 className="text-rlg">President, 2012-2013</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Eric Hammon</h3>
                    <h4 className="text-rlg">Vice President, 2012-2013</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">
                        Karthik Jayakumar
                    </h3>
                    <h4 className="text-rlg">President, 2011-2012</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Wassim Alsafi</h3>
                    <h4 className="text-rlg">Vice President, 2011-2012</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Paul Warren</h3>
                    <h4 className="text-rlg">President, 2010-2011</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Zachary Forster</h3>
                    <h4 className="text-rlg">President, 2009-2010</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Sahar Mesri</h3>
                    <h4 className="text-rlg">Vice President, 2009-2011</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Jay Dey</h3>
                    <h4 className="text-rlg">President, 2008-2009</h4>
                </div>
                <div className="text-center">
                    <h3 className="text-r3xl font-semibold">Richard Lin</h3>
                    <h4 className="text-rlg">Vice President, 2008-2009</h4>
                    <h4 className="text-rlg">President, 2007-2008</h4>
                </div>
            </section>
        </main>
    );
}
