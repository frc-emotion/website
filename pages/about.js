import Head from "next/head";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  FaWrench,
  FaPen,
  FaLightbulb,
  FaCode,
  FaPeopleCarry,
} from "react-icons/fa";

import PageHeader from "../components/PageHeader";

import styles from "../styles/aboutPage.module.css";
import rowStyles from "../styles/rows.module.css";

const buildLeads = ["Dhruv Patel", "Maan Patel", "Pratham Rao"];
const designLeads = ["Ahil Chitrarasu", "Magor Pocsveiler"];
const electricalLeads = ["Bart Backer", "Sarika Patil", "Ila Gowda"];
const softwareLeads = [
  "Shreya Singh",
  "Andre Barga",
  "Shravan Ramakrishna",
  "Preena Maruthavelu",
];
const marketingLeads = ["Angeli Sundar", "Meghna Rath"];
const execs = [
  { name: "John Chang", role: "President" },
  { name: "Karan Thakkar", role: "Vice President" },
  { name: "John Smithers", role: "Secretary" },
  { name: "Yuta Harsh", role: "Treasurer" },
  { name: "Karan Pothula", role: "Treasurer" },
  { name: "Ryan Fadiian", role: "Treasurer" },
];
const mentors = [
  { name: "Evengy Korol", subteam: "" },
  { name: "Clifford Harrison", subteam: "" },
];
const advisors = ["Brian Dunlea", "Katherine Rumsey"];
const presidentsLeague = [
  { name: "Keshav Narasimma", year: "2021-2022" },
  { name: "Toshko Andreev", year: "2020-2021" },
  { name: "Krish Thakkar", year: "2020-2021" },
  { name: "Beni Korol", year: "2019-2020" },
  { name: "Andrew da Cunha", year: "2018-2019" },
  { name: "Anmol Seth", year: "2017-2018" },
  { name: "Nicolas Wiscour-Conter", year: "2016-2017" },
  { name: "Mario Maldonado-Santos", year: "2015-2016" },
  { name: "Yashes Srinivasan", year: "2014-2015" },
  { name: "Nithin Dharmaraj", year: "2013-2014" },
  { name: "Aditya Zadgaonkar", year: "2012-2013" },
  { name: "Karthik Jayakumar", year: "2011-2012" },
  { name: "Paul Warren", year: "2010-2011" },
  { name: "Zachary Forster", year: "2009-2010" },
  { name: "Jay Dey", year: "2008-2009" },
  { name: "Richard Lin", year: "2007-2008" },
];
const vicePresidentsCircle = [
  { name: "John Chang", year: "2021-2022" },
  { name: "Keshav Narasimma", year: "2020-2021" },
  { name: "Toshko Andreev", year: "2019-2020" },
  { name: "Krish Thakkar", year: "2019-2020" },
  { name: "Beni Korol", year: "2018-2019" },
  { name: "Andrew da Cunha", year: "2017-2018" },
  { name: "Anmol Seth", year: "2016-2017" },
  { name: "Nicolas Wiscour-Conter", year: "2015-2016" },
  { name: "Nikhil Shinde", year: "2014-2015" },
  { name: "Yashes Srinivasan", year: "2013-2014" },
  { name: "Eric Hammon", year: "2012-2013" },
  { name: "Wassim Alsafi", year: "2011-2012" },
  { name: "Sahar Mesri", year: "2009-2011" },
  { name: "Richard Lin", year: "2008-2009" },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - FRC Team 2658</title>
      </Head>
      <PageHeader title="About Us" image="url(header-img/about.jpg)" />
      <Container fluid>
        <Row className={styles.missionStatement}>
          <Col
            sm={1}
            md={7}
            style={{ margin: "auto", width: "75%", padding: "10px" }}
          >
            <h2>By Students, For Students</h2>
            <p>
              We are an FRC Robotics team founded in 2008, by and for high
              school students. We are dedicated to giving students an experience
              that will help them in our ever-eveolving world. We are a 100%
              student-run team, so students get the amazing opportunity to learn
              from their older peers and teammates. We show students what
              it&apos;s like to work on a project as a team, and how fun it is
              when the robot you built is the one that wins. Since its
              establishment in 2007 by Jeff Bush and Richard Lin, the Σ-Motion
              team has designed and built over 10 robots which it used in the
              FIRST Competitions around the country.
            </p>
          </Col>
        </Row>
        <Row className={rowStyles.primaryRow} xs={1} lg={2} xl={4}>
          <Col>
            <h2>Leads</h2>
            <p>
              We have 5 different subgroups in our club: Design, Build,
              Software, Electrical, and Marketing. Each of those groups are lead
              by one or two students, who are the Leads.
            </p>
          </Col>
          <Col>
            <h2>Execs</h2>
            <p>
              We have 4 Executive positions in our club: President, Vice
              President, Treasurer, and Secretary. These are students who help
              make sure that the whole team runs smoothly.
            </p>
          </Col>
          <Col>
            <h2>Advisors</h2>
            <p>
              Advisors are teachers who work at RBHS, who dedicate a lot of
              their free time to support our team.
            </p>
          </Col>
          <Col>
            <h2>Mentors</h2>
            <p>
              Mentors are parents, friends, and alumni who dedicate their free
              time to our team. They come in every meeting to help each subgroup
              with their tasks.
            </p>
          </Col>
        </Row>
        <Row
          className={rowStyles.secondaryRow}
          xs={1}
          sm={2}
          md={3}
          lg={4}
          xxl={5}
        >
          <h2 className={rowStyles.rowHeader}>Our Leads</h2>
          <Col>
            <FaWrench className={styles.leadIcon} />
            <h3>Build Leads</h3>
            {buildLeads.map((lead) => (
              <p key={lead.id}>{lead}</p>
            ))}
          </Col>
          <Col>
            <FaPen className={styles.leadIcon} />
            <h3>Design Leads</h3>
            {designLeads.map((lead) => (
              <p key={lead.id}>{lead}</p>
            ))}
          </Col>
          <Col>
            <FaLightbulb className={styles.leadIcon} />
            <h3>Electrical Leads</h3>
            {electricalLeads.map((lead) => (
              <p key={lead.id}>{lead}</p>
            ))}
          </Col>
          <Col>
            <FaCode className={styles.leadIcon} />
            <h3>Software Leads</h3>
            {softwareLeads.map((lead) => (
              <p key={lead.id}>{lead}</p>
            ))}
          </Col>
          <Col>
            <FaPeopleCarry className={styles.leadIcon} />
            <h3>Marketing Leads</h3>
            {marketingLeads.map((lead) => (
              <p key={lead.id}>{lead}</p>
            ))}
          </Col>
        </Row>
        <Row className={rowStyles.primaryRow} xs={1} sm={1} md={2} xl={3}>
          <h2 className={rowStyles.rowHeader}>Our Execs</h2>
          {execs.map((exec) => (
            <Col key={exec.id}>
              <h3>{exec.name}</h3>
              <p>{exec.role}</p>
            </Col>
          ))}
        </Row>
        <Row className={rowStyles.secondaryRow}>
          <h2 className={rowStyles.rowHeader}>Our Mentors</h2>
          {mentors.map((mentor) => (
            <Col key={mentor.id}>
              <h3>{mentor.name}</h3>
              {mentor.subteam ? <p>{mentor.subteam}</p> : <p>Mentor</p>}
            </Col>
          ))}
        </Row>
        <Row className={rowStyles.primaryRow}>
          <h2 className={rowStyles.rowHeader}>Our Advisors</h2>
          {advisors.map((advisor) => (
            <Col key={advisor.id}>
              <h3>{advisor}</h3>
              <p>Advisor</p>
            </Col>
          ))}
        </Row>
        <Row className={rowStyles.secondaryRow} xs={1} sm={1} md={2} xl={3}>
          <h2 className={rowStyles.rowHeader}>The President&apos;s League</h2>
          {presidentsLeague.map((president) => (
            <Col key={president.id}>
              <h3 style={{ color: "#F3EA1B" }}>{president.name}</h3>
              <p>{president.year}</p>
            </Col>
          ))}
        </Row>
        <Row className={rowStyles.secondaryRow} xs={1} sm={1} md={2} xl={3}>
          <h2 className={rowStyles.rowHeader}>The Vice President&apos;s Circle</h2>
          {vicePresidentsCircle.map((vicePresident) => (
            <Col key={vicePresident.id}>
              <h3 style={{ color: "#F3EA1B" }}>{vicePresident.name}</h3>
              <p>{vicePresident.year}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
