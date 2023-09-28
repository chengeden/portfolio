import styled from "styled-components";

const Wrapper = styled.div`
	padding: 32px 64px;
`;

const Title = styled.h3`
	margin-top: 0;
	margin-bottom: 10px;
	font-size: 1.5rem;
	font-weight: bold;
`;

const Highlight = styled.span`
	color: #377e9a;
`;

const Description = styled.ul`
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
			<li>A highly motivated and skilled Full Stack Developer with fully commercial level project experience in developing user-friendly websites, especially experienced in developing front-end features.</li>
			<li>Proficient in HTML, CSS, JavaScript, React and NodeJS.</li>
			<li>Self-managed programmer with a focus on writing readable, reusable, and maintainable code.</li>
			<li>Bachelor and master degree education on Information Technology.</li>
		</Description>

	</Wrapper>
);

export default AboutMe;