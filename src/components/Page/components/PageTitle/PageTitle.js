import styled from "styled-components";
import img from "../../../../assets/images/main_bg.png";

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

export default Title;
