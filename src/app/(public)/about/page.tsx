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
import Leadership from "./Leadership.json";
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
            <section className="bg-teamYellow-400 py-8">
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

  {/* ---- Leads Section ---- */}
  <section className="flex justify-center gap-x-10 overflow-x-auto px-6">
    {Object.entries(Leadership.Leads).map(([key, value]) => (
      <div key={key} className="p-4 min-w-[150px]">
        <h3 className="m-1 text-center text-r2xl font-bold">
          {key} {value.length > 1 ? "Leads" : "Lead"}
        </h3>
        <ul className="text-center text-rmd font-semibold">
          {value.map((lead) => (
            <li key={lead}>{lead}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>

  {/* ---- Execs Section ---- */}
  <section className="max-w-6xl mx-auto px-6 mt-16">
    <h3 className="text-center text-r2xl font-bold mb-12">Execs</h3>

    {/* Row 1: Presidents + VPs evenly spaced */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 justify-items-center mb-16">
      {Leadership.Executive.President.map((president) => (
        <div key={president} className="text-center text-rlg font-semibold">
          <strong>President:</strong> {president}
        </div>
      ))}

      {Leadership.Executive["Vice President"].map((vp) => (
        <div key={vp} className="text-center text-rlg font-semibold">
          <strong>Vice President:</strong> {vp}
        </div>
      ))}
    </div>

    {/* Row 2: Treasurers, centered with spacing */}
    <div className="flex justify-center gap-x-24 mb-16">
      {Leadership.Executive.Treasurer.map((treasurer) => (
        <div key={treasurer} className="text-center text-rlg font-semibold">
          <strong>Treasurer:</strong> {treasurer}
        </div>
      ))}
    </div>

    {/* Row 3: Secretary centered */}
    <div className="flex justify-center">
      {Leadership.Executive.Secretary.map((secretary) => (
        <div key={secretary} className="text-center text-rlg font-semibold">
          <strong>Secretary:</strong> {secretary}
        </div>
      ))}
    </div>
  </section>
</section>

            <h2 className="bg-teamYellow-400 text-center font-bold">
                Advisors, Mentors, and Alumni
            </h2>

            <section className="width-screen grid grid-cols-2 gap-y-12 bg-black py-8 text-teamYellow-400">
                <h2 className="col-span-2 text-center">Advisors and Mentors</h2>
                {Leadership.Advisors.map((advisor) => (
                    <div key={advisor}>
                        <h3 className="text-center text-r3xl font-bold">
                            {advisor}
                        </h3>
                        <h4 className="text-center text-rlg">Advisor</h4>
                    </div>
                ))}
                {Leadership.Mentors.map((mentor) => (
                    <div key={mentor}>
                        <h3 className="text-center text-r3xl font-bold">
                            {mentor}
                        </h3>
                        <h4 className="text-center text-rlg">Mentor</h4>
                    </div>
                ))}

            </section>
            <section className="grid grid-cols-2 gap-y-6 bg-teamYellow-400 py-8 text-black xl:grid-cols-3">
                <h2 className="col-span-full m-4 text-center">Alumni</h2>
                {Object.entries(Leadership.Alumni).map(([person, roles]) => (
                    <div key={person} className="text-center">
                        <h3 className="text-r3xl font-semibold">{person}</h3>
                        {roles.map((role) => (
                            <h4 key={role[0]} className="text-rlg">{role[0]}, {role[1]}</h4>
                        ))}
                    </div>
                ))}
            </section>
        </main>
    );
}
