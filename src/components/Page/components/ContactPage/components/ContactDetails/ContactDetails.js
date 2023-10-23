import styled from "styled-components";

const Wrapper = styled.div`
	padding: 32px 64px;
`;

const ContactInfo = styled.table`
	border: 0;
`;

const Td = styled.td`
	padding: 4px 0;

	&:first-of-type {
		padding-right: 42px;
		
	}

	&:last-of-type {
		color: #9e9e9e;
	}
`;

const Link = styled.a`
	text-decoration: none;
	color: #9e9e9e;
`;

const ContactDetails = () => (
	<Wrapper>
		<ContactInfo>
			<tbody>
				<tr>
					<Td>Address</Td>
					<Td>Lidcombe, NSW, 2141</Td>
				</tr>
				<tr>
					<Td>Email</Td>
					<Td>
						<Link href="mailto:eden.ljcheng@gmail.com">
							eden.ljcheng@gmail.com
						</Link>
					</Td>
				</tr>
				<tr>
					<Td>Linkedin</Td>
					<Td>
						<Link href="https://www.linkedin.com/in/eden-cheng" target="_blank">
							https://www.linkedin.com/in/eden-cheng
						</Link>
					</Td>
				</tr>
				<tr>
					<Td>Github</Td>
					<Td>
						<Link href="https://github.com/chengeden" target="_blank">
							https://github.com/chengeden
						</Link>
					</Td>
				</tr>
			</tbody>
		</ContactInfo >
	</Wrapper>
);

export default ContactDetails;