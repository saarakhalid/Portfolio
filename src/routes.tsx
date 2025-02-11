// import LandingLayout from "@layouts/landing";
import { useRoutes } from "react-router-dom";
import LandingLayout from "./landing/layout";
import Home from "./home";

// import HeroSection from "./Home";
// import AboutPage from "./pages/about-us";
// import ProgramPage from "./pages/our-programs";
// import ContactPage from "./pages/contact-us";
// import GalleryPage from "./pages/gallery";
// import ViewPage from "./pages/herosection/view";

// import MissionVision from "./pages/mission";

// import AboutPage from "./pages/About";
// import GeneralInquiry from "./pages/contact";



// import Home from "@pages/home";

const Router = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <LandingLayout />,
			children: [
				 { index: true, element: <Home /> },
				// { path: "about-us", element: <AboutPage /> },
				// { path: "our-programs", element: < ProgramPage/> },
				// { path: "contact-us", element: < ContactPage/> },
				// { path: "gallery", element: < GalleryPage/> },


				

				
			],
		},
		// Wildcard route for 404 Not Found
		// { path: "*", element: <NotFoundPage /> },
	]);

	return routes;
};

export default Router;
