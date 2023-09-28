import styled from "styled-components";
import HomePage from "./components/HomePage/HomePage";
import ExperiencePage from "./components/ExperiencePage/ExperiencePage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ContactPage from "./components/ContactPage/ContactPage";

const Wrapper = styled.div`
	padding: 15px 0;
	position: relative;
	flex: 1;
`;

const Page = ({ activePage }) => {
	return (
		<Wrapper>
			{activePage === "HOME_PAGE" && <HomePage />}
			{activePage === "EXPERIENCE_PAGE" && <ExperiencePage />}
			{activePage === "SKILLS_PAGE" && <SkillsPage />}
			{activePage === "CONTACT_PAGE" && <ContactPage />}
		</Wrapper>
	);
};

export default Page;;