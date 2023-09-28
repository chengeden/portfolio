import styled from "styled-components";

const Wrapper = styled.div`
	padding: 32px 64px;
`;

const Title = styled.h3`
	margin-top: 0;
	font-size: 1.5rem;
	font-weight: bold;
`;

const Highlight = styled.span`
	color: #377e9a;
`;

const Description = styled.div`
	line-height: 1.75;
`;

const AboutMe = () => (
	<Wrapper>
		<Title>
			About
			{" "}
			<Highlight>Me</Highlight>
		</Title>
		<Description>
			Bright and optimistic, Tifa always cheers up the others when they're down. But don't let her looks fool you, she can decimate almost any enemy with her fists...
		</Description>

	</Wrapper>
);

export default AboutMe;