import Image from "next/image";

interface OutreachProps {
    title : string, 
    description : string, 
    imageSrc : string,
    imageFillType : string,
    links: {link : string, text : string}[]
}

export default function OutreachEvent(props : OutreachProps) {
    return (
        <div className="row-span-auto grid grid-cols-1 md:grid-cols-2">
            <div className="relative col-span-1 mb-5 mt-1 flex h-[45vh] select-none overflow-hidden rounded-lg md:mr-5 -md:items-center -md:justify-center">
                <Image
                    src={props.imageSrc}
                    alt=""
                    fill={true}
                    className={`${props.imageFillType}`}
                />
            </div>
            <div className="mb-5 mt-1 flex flex-col justify-center -md:items-center bg-black rounded-lg mr-0">
                <h3 className=" ml-4 text-r3xl font-bold">
                    <span className="bg-gradient-to-r from-[#00C498] to-[#19AEE7] bg-clip-text text-transparent ">
                        {props.title}
                    </span>
                </h3>
                <p className="mx-5 text-left text-white">
                    {props.description}
                </p>
                <div className="mt-3 mx-5 flex flex-row space-x-3 font-semibold text-white">
                    <p>more:</p>
                    {props.links.map(
                        (obj) => (
                            <a
                                className="underline"
                                href={obj.link}
                                aria-label={obj.text}
                                target="_blank"
                            >
                                {obj.text}
                            </a>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}