import Head from "next/head";
import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - FRC Team 2658</title>
        <meta
          name="description"
          content="Team Σ-Motion is a high school FIRST robotics team at Rancho Bernardo High School dedicated to promoting Science, Technology, Engineering, and Mathematics."
        />
      </Head>
      <PageHeader title="Home" />
    </div>
  );
}
