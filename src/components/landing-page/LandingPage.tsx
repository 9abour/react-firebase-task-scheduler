import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className="bg-gradient-to-t from-primary-lavenderBlue/20 to-primary-hawkesBlue/20 z-20">
			<div className="mx-auto md:w-4/5 pt-12">
				<div className="text-center pt-4 md:mt-8 mx-auto w-[90%] md:w-4/5">
					<h1 className="font-bold leading-[50px] md:leading-[60px] lg:leading-[80px] tracking-[-1.4px] text-4xl md:text-6xl lg:text-7xl">
						Simplify your life with our
						<span className="font-bold text-primary-ceruleanBlue">
							{" "}
							Task Scheduler
						</span>
					</h1>
					<p className="text-grey-monsoon w-4/5 text-lg md:text-xl pt-2 mt-4 font-normal text-center tracking-loose mx-auto">
						A simple task scheduler application built with React. Organize your
						tasks efficiently and never miss a deadline again!
					</p>
					<div className="flex flex-row mx-auto justify-center pt-7 mt-4">
						<Link
							to="/register"
							type="button"
							className="text-white bg-[#000C1A] hover:drop-shadow-lg focus:ring-4  focus:ring-blue-300 font-normal rounded-full text-base md:text-lg px-8 md:px-10 py-3 md:py-5 mr-4 mb-2 focus:outline-none"
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
			<div className="mt-7 pt-9 mx-auto rounded-2xl lg:w-4/5">
				<img
					alt="CalendarPlan dashboard with loading elements"
					loading="lazy"
					width="1600"
					height="800"
					decoding="async"
					data-nimg="1"
					className="rounded-2xl mx-auto object-cover h-full"
					src="https://isotope-startup-webtemplate.netlify.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdnzjbmzag%2Fimage%2Fupload%2Fv1694679379%2FCalendarPlanDashboard.png&w=3840&q=75"
				/>
			</div>
		</div>
	);
};

export default LandingPage;
