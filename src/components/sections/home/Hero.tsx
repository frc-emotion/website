export default function Hero() {
	return (
		<div className="bg-[#eafa33] grid px-[5vw] z-0">
			<div id="heroHeader">
				<h1 className="2xl:text-[155px] xl:text-[145px] lg:text-[115px] sm:text-[85px] text-[72px] font-semibold w-full text-center">
					We are <br className="md:hidden" />
					Σ-Motion
				</h1>
				<div className="font-semibold px-[10vw] xl:text-[28px] lg:text-[20px] lg:mt-[-30px] grid md:grid-rows-1 md:grid-cols-4 grid-rows-3 grid-cols-1">
					<p className="md:text-left text-center">FRC Team 2658</p>
					<p className="text-center md:col-span-2">
						Rancho Bernardo High School
					</p>
					<p className="md:text-right text-center">San Diego, CA</p>
				</div>
			</div>
			<div
				id="heroImage"
				className="md:mt-10 mt-7 lg:h-[75vh] h-[50vh] static top-0 bg-fixed bg-cover bg-top bg-no-repeat"
				style={{ backgroundImage: "url(/hero.jpeg)" }}
			>
			</div>
		</div>
	);
}
