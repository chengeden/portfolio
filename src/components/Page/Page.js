import styled from "styled-components";
import SkillsPage from "./components/SkillsPage/SkillsPage";

const Wrapper = styled.div`
	padding: 15px 0;
	position: relative;
	flex: 1;
`;

const Page = ({ activePage }) => {
	return (
		<Wrapper>
			{activePage === "HOME_PAGE" && <div>Home Page</div>}
			{activePage === "EXPERIENCE_PAGE" && <div>Experience Page</div>}
			{/*{activePage === "SKILLS_PAGE" && <div>Skills Page</div>}*/}
			{activePage === "SKILLS_PAGE" && <SkillsPage />}
			{activePage === "CONTACT_PAGE" && <div>Contact Page</div>}
		</Wrapper>
	);
};

export default Page;