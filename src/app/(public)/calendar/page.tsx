import { global } from "styled-jsx/css"


export default function Calendar() {
    return(
        <main className="bg-teamYellow-500 overflow-hidden relative">
            <div className="relative inset-x-0 top-0 h-clampLarge w-full overflow-hidden object-cover">
                <h1 className="absolute inset-0 my-8 text-center text-r8xl font-bold">
                        Calendar
                </h1>
            </div>
            <div className="bg-teamYellow-500 flex flex-col items-center content-center">
                <div className="bg-black w-full">
                    <h1 className="font-bold my-10 text-teamYellow-400 text-center text-2xl">Public Calendar</h1>
                </div>

                {/* REPLACE WITH ACTUAL TEAM CALENDAR */}
                <iframe 
                    className="py-5"
                    src="https://calendar.google.com/calendar/embed?src=c_dee5e860860da8c03dbc378d500f8e87b1c31c35599e2b7396f7f68108746a2b%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
                    width="50%" 
                    height="600">
                </iframe>
                
            </div>
            
        </main>
    )
}