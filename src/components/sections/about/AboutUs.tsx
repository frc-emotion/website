export default function AboutUsText({
    children,
    yellow,
}: {
    children?: React.ReactNode;
    yellow?: boolean;
}) {
    return (
        <p className={`p-4 text-rlg ${yellow ? "bg-teamYellow-400" : ""}`}>
            {children}
        </p>
    );
}
