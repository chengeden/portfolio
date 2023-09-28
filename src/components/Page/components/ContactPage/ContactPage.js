import Title from "../PageTitle/PageTitle";
import Wrapper from "../PageWrapper/PageWrapper";
import ContactDetails from "./components/ContactDetails/ContactDetails";

const ContactPage = () => {
	return (
		<Wrapper>
			<Title>CONTACT</Title>
			<ContactDetails />
		</Wrapper>
	);
};

export default ContactPage;
