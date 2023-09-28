import styled from "styled-components";
import Wrapper from "../PageWrapper/PageWrapper";
import Title from "../PageTitle/PageTitle";
import Skill from "./components/Skill/Skill";
import HTMLImg from "../../../../assets/images/html.png";
import CSSImg from "../../../../assets/images/css.png";
import JSImg from "../../../../assets/images/js.png";
import TSImg from "../../../../assets/images/ts.png";
import SassImg from "../../../../assets/images/sass.png";
import BootstrapImg from "../../../../assets/images/bootstrap.png";
import StyledComponentsImg from "../../../../assets/images/styled-components.png";
import ReactImg from "../../../../assets/images/react.png";
import nextJSImg from "../../../../assets/images/nextJS.png";
import ReduxImg from "../../../../assets/images/redux.png";
import ReactRouterImg from "../../../../assets/images/react-router-dom.png";
import AxiosImg from "../../../../assets/images/axios.png";
import NodeJSImg from "../../../../assets/images/nodejs.png";
import ExpressImg from "../../../../assets/images/express.png";
import JWTImg from "../../../../assets/images/jwt.png";
import MongoDBImg from "../../../../assets/images/mongoDB.png";
import MongooseImg from "../../../../assets/images/mongoose.jpg";
import GitImg from "../../../../assets/images/git.png";

const Skills = styled.div`
	padding: 32px 64px;
	margin: 48px 0;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const SkillsPage = () => {
	return (
		<Wrapper>
			<Title>SKILLS</Title>
			<Skills>
				<Skill name="HTML5" imgSrc={HTMLImg}></Skill>
				<Skill name="CSS3" imgSrc={CSSImg}></Skill>
				<Skill name="JavaScript" imgSrc={JSImg}></Skill>
				<Skill name="TypeScript" imgSrc={TSImg}></Skill>
				<Skill name="Sass" imgSrc={SassImg}></Skill>
				<Skill name="Bootstrap" imgSrc={BootstrapImg}></Skill>
				<Skill name="Styled-Components" imgSrc={StyledComponentsImg}></Skill>
				<Skill name="React" imgSrc={ReactImg}></Skill>
				<Skill name="NextJS" imgSrc={nextJSImg}></Skill>
				<Skill name="Redux" imgSrc={ReduxImg}></Skill>
				<Skill name="React-Router-Dom" imgSrc={ReactRouterImg}></Skill>
				<Skill name="Axios" imgSrc={AxiosImg}></Skill>
				<Skill name="NodeJS" imgSrc={NodeJSImg}></Skill>
				<Skill name="Express" imgSrc={ExpressImg}></Skill>
				<Skill name="JWT" imgSrc={JWTImg}></Skill>
				<Skill name="MongoDB" imgSrc={MongoDBImg}></Skill>
				<Skill name="Mongoose" imgSrc={MongooseImg}></Skill>
				<Skill name="Git" imgSrc={GitImg}></Skill>
			</Skills>
		</Wrapper>
	);
};

export default SkillsPage;
