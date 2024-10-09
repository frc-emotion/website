import { global } from "styled-jsx/css"
import Image from "next/image";

export default function Calendar() {
    return(
        <main className="overflow-hidden relative">
            <div className="relative inset-x-0 top-0 h-clampLarge w-full overflow-hidden object-cover">
				{/* Set to new image */}
                <Image
                    src="https://cdn.team2658.org/web-public/lvr-stands.jpg"
                    alt="Σ-Motion at the Las Vegas Regional"
                    fill={true}
                    className="absolute overflow-hidden object-cover blur-sm brightness-50"
                />
                <h1 className="absolute inset-0 my-8 text-center text-r8xl font-bold text-teamYellow-100">
                        Calendar
                </h1>
            </div>
            <div className="bg-teamYellow-500 flex flex-col items-center content-center">
                {/* REPLACE WITH ACTUAL TEAM CALENDAR */}
                <iframe 
                    className="p-5 m-10 rounded-lg bg-white"
                    src="https://calendar.google.com/calendar/embed?src=c_dee5e860860da8c03dbc378d500f8e87b1c31c35599e2b7396f7f68108746a2b%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
                    width="50%" 
                    height="600">
                </iframe>
            </div>

        </main>
    )
}