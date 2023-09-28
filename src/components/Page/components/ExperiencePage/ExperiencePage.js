import styled from "styled-components";
import Wrapper from "../PageWrapper/PageWrapper";
import Title from "../PageTitle/PageTitle";

const Content = styled.div`
	padding: 32px 64px;
`;

const ExperiencePage = () => {
	return (
		<Wrapper>
			<Title>EXPERIENCES</Title>
			<Content>
				experience
			</Content>
		</Wrapper>
	);
};

export default ExperiencePage;
