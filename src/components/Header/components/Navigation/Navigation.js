import styled from "styled-components";
import { Item } from "./components/Item/Item";

const Navbar = styled.div`
	display: flex;
`;

const ITEMS = [{
	href: "HOME",
	children: "Home",
	active: "HOME_PAGE"
}, {
	href: "EXPERIENCE",
	children: "Experience",
	active: "EXPERIENCE_PAGE"
}, {
	href: "SKILLS",
	children: "Skills",
	active: "SKILLS_PAGE"
}, {
	href: "CONTACT",
	children: "Contact",
	active: "CONTACT_PAGE"
}];

const Navigation = ({ activePage, setActivePage }) => (
	<Navbar>
		{ITEMS.map(({ href, active, children }) => (
			<Item
				key={href}
				href={href}
				active={activePage === `${active}`}
				onClick={(e) => {
					e.preventDefault();
					setActivePage(`${active}`);
				}}
			>
				{children}
			</Item>
		))}
		{/*<Item href="HOME" active={activePage === "HOME_PAGE"} onClick={(e) => { e.preventDefault(); setActivePage("HOME_PAGE"); }}>Home</Item>
		<Item href="EXPERIENCE" active={activePage === "EXPERIENCE_PAGE"} onClick={(e) => { e.preventDefault(); setActivePage("EXPERIENCE_PAGE"); }}> Experience</Item >
		<Item href="SKILLS" active={activePage === "SKILLS_PAGE"} onClick={(e) => { e.preventDefault(); setActivePage("SKILLS_PAGE"); }}>Skills</Item>
		<Item href="CONTACT" active={activePage === "CONTACT_PAGE"} onClick={(e) => { e.preventDefault(); setActivePage("CONTACT_PAGE"); }}>Contact</Item>*/}
	</Navbar>
);

export default Navigation;;;