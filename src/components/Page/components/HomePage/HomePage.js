import Wrapper from "../PageWrapper/PageWrapper";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import AboutMe from "./components/AboutMe/AboutMe";

const HomePage = () => {
	return (
		<Wrapper>
			<PersonalInfo />
			<AboutMe />
		</Wrapper>
	);
};

export default HomePage;
