import styled from "styled-components";
import Header from "./components/Header/Header";
import Page from "./components/Page/Page";
import { useState } from "react";

const Wrapper = styled.div`
	background-color: #f5f5f5;
`;

const Container = styled.div`
	max-width: 1000px;
	margin: auto;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

function App() {
	const [activePage, setActivePage] = useState("HOME_PAGE");

	return (
		<Wrapper>
			<Container>
				<Header activePage={activePage} setActivePage={setActivePage} />
				<Page activePage={activePage} />
			</Container>
		</Wrapper>
	);
}

export default App;
