import styled from "styled-components";
import img from "../../../../assets/images/main_bg.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Wrapper = styled.div`
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
	flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h2`
	margin: 0;  
  font-size: 3rem;
  font-weight: 500;
`;

const Position = styled.div`
  font-size: 1.25rem;
  margin-top: 8px;
`;

const SocialMedias = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

const SocialMediaItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  width: 16px;
  height: 16px;
  margin: 0 4px;
  color: rgba(0, 0, 0, 0.5);
  background-color: white;
  padding: 8px;
  border-radius: 100%;
`;

const PersonalInfo = () => (
	<Wrapper>
		<Name>Eden Cheng</Name>
		<Position>Fullstack Developer</Position>
		<SocialMedias>
			<SocialMediaItem target="_blank" href="https://www.linkedin.com/in/eden-cheng/"><LinkedInIcon /></SocialMediaItem>
			<SocialMediaItem target="_blank" href="https://github.com/chengeden"><GitHubIcon /></SocialMediaItem>
		</SocialMedias>
	</Wrapper>
);

export default PersonalInfo;