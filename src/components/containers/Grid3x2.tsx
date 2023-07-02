import '../containers/index.css'


//responsive container that has a vertical col for mobile / narrow screens, and automatically switches to a 3x2 grid for larger screens
export default function Grid3x2({ children }: { children?: React.ReactNode }) {
	return <div className="grid3x2">
        {children}
    </div>;
}
