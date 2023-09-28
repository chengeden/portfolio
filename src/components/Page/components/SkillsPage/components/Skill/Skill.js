import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
	flex-basis: 25%;
`;

const ImgContainer = styled.div`
  width: 125px;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 100%;
`;

const Img = styled.img`
  width: 55px;
`;

const ImgName = styled.h4`
	font-size: 18px;
`;

const Skill = ({ name, imgSrc }) => {
	return (
		<Wrapper>
			<ImgContainer>
				<Img alt={name} src={imgSrc}></Img>
			</ImgContainer>
			<ImgName>{name}</ImgName>
		</Wrapper >
	);
};

export default Skill;