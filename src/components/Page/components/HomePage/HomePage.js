import Wrapper from "../PageWrapper/PageWrapper";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
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
