

export const metadata = {
    title: "Link Hub | FRC Team 2658",
    description: "Important links for FRC Team 2658",
};

const links = [
    {
        name: "Team App (IOS/Apple)",
        link: "https://apps.apple.com/app/6446333310",
        emoji: "📱",
        description: "Our new team app for managing attendance and scouting at competitions!"
    },
    {
        name: "Team App (Android)",
        link: "https://play.google.com/store/apps/details?id=org.team2658.nautilus",
        emoji: "📱",
        description: "Our new team app for managing attendance and scouting at competitions!"
    },
    {
        name: "Club Application Forms",
        link: "https://docs.google.com/document/d/1QXXVcJwAnVjUmRR4Vpz7R9o9IhBTbwL76rZT19EVULg/edit?usp=sharing",
        emoji: "📝",
        description: ""
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/frcteam2658/",
        emoji: "📷",
        description: ''
    },
    {
        name: "GitHub",
        link: "https://github.com/frc-emotion",
        emoji: "💻",
        description: ''
    },
    {
        name: "YouTube",
        link: "https://www.youtube.com/@team2658",
        emoji: "📹",
        description: ''
    },
    {
        name: "Email",
        link: "mailto:frcteam2658@gmail.com",
        emoji: "📧",
        description: ''
    }

];

export default function Links() {
    return (
        <main>

            <div className="flex items-center justify-center">
                <div className="w-full max-w-md text-center px-6 py-8 h-auto bg-teamYellow-500 rounded-lg">

                    {/* Profile Section */}
                    <div className="flex flex-col items-center mb-2">
                        <img
                            src="/icon.png"
                            alt="Profile Logo"
                            className="w-24 h-24 mb-4 rounded-full hover:scale-110"
                        />
                        <h1 className="text-3xl font-bold">Team Σ-Motion (#2658)</h1>
                        <p className="text-sm text-center pt-2">Empowering students through hands-on robotics experiences, fostering teamwork, innovation, and STEM education since 2007.</p>
                    </div>

                    {/* Links Section */}
                    <div className="space-y-4 pt-2">
                        {links.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block shadow-lg rounded-lg p-4 bg-teamYellow-300 transform hover:scale-105 transition-transform duration-200"
                            >
                                <div className="flex items-center">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teamYellow-100">
                                        <span className="text-3xl">{item.emoji}</span>
                                    </div>
                                    <div className="flex flex-col justify-center text-center w-3/4">
                                        <p className="text-lg font-semibold">{item.name}</p>
                                        {item.description && (
                                            <p className="text-sm">{item.description}</p>
                                        )}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
