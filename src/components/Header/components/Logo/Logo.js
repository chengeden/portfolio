import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	font-size: 1.5rem;
	font-weight: 500;
`;

const Highlight = styled.span`
	color: #377e9a;
`;

// memo - re-render Logo component only when props have changed
const Logo = React.memo(() => (
	<Wrapper>
		<Highlight>Eden</Highlight>
		{" "}
		Cheng
	</Wrapper>
));

export default Logo;