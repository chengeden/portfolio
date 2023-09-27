import styled from "styled-components";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";

const Wrapper = styled.header`
	padding: 15px 0;
	display: flex;
	align-items: center;
`;

const NameLogo = styled.div`
	flex: 1;
`;

const Header = ({ activePage, setActivePage }) => (
	<Wrapper>
		<NameLogo>
			<Logo />
		</NameLogo>
		<div>
			<Navigation activePage={activePage} setActivePage={setActivePage} />
		</div>
	</Wrapper>
);

export default Header;