import styled from "styled-components";
import img from "../../../../assets/images/main_bg.png";
import MySkills from "./components/MySkills/MySkills";

const Wrapper = styled.div`
	background: #fff;
	border-radius: 16px;
	box-shadow: 0px 15px 25px 0px rgb(0 0 0 / 10%);
`;

const Title = styled.h2`
	margin: 0;
  text-align: center;
  font-size: 44px;
	color: white;
  padding: 32px 64px;
  background-color: #377e9a;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Content = styled.div`
	padding: 32px 64px;
`;

const SkillsPage = () => {
	return (
		<Wrapper>
			<Title>Skills</Title>
			<Content>
				<MySkills />
			</Content>
		</Wrapper>
	);
};

export default SkillsPage;
