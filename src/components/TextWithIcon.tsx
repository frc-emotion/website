import { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";

// simple section of text with header, paragraph, and icon
export default function TextWithIcon({
	heading,
	icon,
	children,
}: TextWithIconProps) {
	return (
		<div className="p-4">
			<div className="flex flex-row items-center">
				<h3 className="text-xl lg:text-2xl">{heading}</h3>
				{icon({className: "mx-2 h-[1.25rem] w-[1.25rem] lg:h-[1.5rem] lg:w-[1.5rem]", size:"100%"})}
			</div>
			{children}
		</div>
	);
}

interface TextWithIconProps {
	heading: string;
	icon: IconType;
	children?: React.ReactNode;
}
