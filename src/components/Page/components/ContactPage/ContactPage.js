import Wrapper from "../PageWrapper/PageWrapper";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import ContactDetails from "./components/ContactDetails/ContactDetails";

const ContactPage = () => {
	return (
		<Wrapper>
			<PersonalInfo />
			<ContactDetails />
		</Wrapper>
	);
};

export default ContactPage;
