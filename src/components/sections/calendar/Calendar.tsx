import "@/styles/globals.css";
import Iframe from 'react-iframe'

export default function Calendar() {
	return (
		<div className="relative flex justify-center items-center w-full mx-auto transition-opacity duration-500 ease-in-out">
			<Iframe url="https://calendar.google.com/calendar/embed?src=29548b39a2080a27d9c67d2efdeecacc633c5bb46583b51b742918b22a50fab4%40group.calendar.google.com&ctz=America%2FLos_Angeles"
				width="100%"
				height="600"
				id="calendar"
				className=""
				display="block"
				position="relative"/>
		</div>
	);
}