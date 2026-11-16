import "@/styles/globals.css";
import Iframe from 'react-iframe'

export default function Calendar() {
	return (
		<div className="relative flex justify-center items-center w-full mx-auto transition-opacity duration-500 ease-in-out">
			<Iframe url="https://calendar.google.com/calendar/embed?src=946f0b823d438ba59130a3b860770357e2b4c5019b0eb5004d3c15b13211939b%40group.calendar.google.com&ctz=America%2FLos_Angeles"
				width="100%"
				height="600"
				id="calendar"
				className=""
				display="block"
				position="relative"/>
		</div>
	);
}