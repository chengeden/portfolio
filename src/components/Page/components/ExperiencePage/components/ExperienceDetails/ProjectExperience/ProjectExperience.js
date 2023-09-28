import styled from "styled-components";
import Timeline from "../ExperienceTimeline/ExperienceTimeline";

const Wrapper = styled.div`
	margin-top: 20px;
`;

const Title = styled.h3`
	margin-top: 0;
`;

const TitleHighlight = styled.span`
	color: #377e98;
`;

const Timelines = styled.div`
  border-left: 2px solid #dadada;
  padding: 8px 0 8px 48px;

	& > div {
		margin-top: 16px;
		margin-bottom: 16px;
	}
`;

const Project = () => (
	<Wrapper>
		<div>
			<Title>
				<TitleHighlight>Project</TitleHighlight>
				{" "}
				Experience
			</Title>
			<Timelines>
				<Timeline
					title={`Jungle Meet`}
					time={`Sep 2022 ~ Dec 2022`}
					company={`Team Jungle Meet`}
					description={
						<>
							<li>Work as a Frontend developer in an Agile team. Developed a online movie forum website to provide customers to look through movies and make discussion. Website -- https://www.junglemeetforum.com</li>
							<li>Tech stacks: Typescript, React, NextJS, redux, Styled-component, customize Chakra UI, following web UI requirements provided by Figma and Agile Methodologies. Main task:</li>
							<li>Participated in and contributed daily stand-up meetings and sprint planning meetings.</li>
							<li>Fetched movie data from third-party API(TMDB) and display to user-friendly design.</li>
							<li>Created a user friendly interface in the front-end using Nextjs, Typescript, Styled- component and Chakra UI, including hero banner, nowplaying and upcoming section in home page</li>
							<li>Created Nowplaying and All movies page with list movies feature and sort by different conditions using React Hooks and Axios, and Infinite Scroll.</li>
							<li>Responsive design using Media Query</li>
							<li>Used React useMemo hook to get better performance when rendering.</li>
							<li>Managed application states with Redux Toolkit in order to avoid props drilling.</li>
							<li>Utilized Swagger to visualize and interact with our API, making it easy for back-end implementation.</li>
							<li>Worked with Agile workflow on JIRA, managed codes with Git version control, and collaborated coding using Github.</li>
							<li>Performed code review for peers and provided recommendations for improvements.</li>
							<li>Documented new tech skills on Notion and shared the knowledge with team members.</li>
						</>
					}
				/>
				<Timeline
					title={`Yabber`}
					time={`May 2022 ~ Aug 2022`}
					company={`The Debugger Team`}
					description={
						<>
							<li>Working as frontend developer in an Agile team to build a online chat app that aiming to facilitate communication within companies or organizations. Website -- https://www.yabbertech.com</li>
							<li>Build features using javascript ES6, react, context, styled components, formik, customize MUI components, font awesome and media query, including:</li>
							<li>Setting page for user profile display and update, and password change with React Hooks, Axios, context</li>
							<li>Team member information card components in about page for display team members with styled components and MUI components</li>
							<li>Responsive design for setting page using media query</li>
						</>
					}
				/>
				<Timeline
					title={`Connect Tree`}
					time={`May 2022 ~ Jul 2022`}
					company={`Neo Team`}
					description={
						<>
							<li>Worked as full stack developer to build a website that share your personal links, including:</li>
							<li>Helped page for user search keywords in articles and get articles form backend</li>
							<li>Redesigned home page and make responsive design</li>
							<li>Used JavaScript, React, styled components, Ant design</li>
						</>
					}
				/>
			</Timelines>
		</div>
		<div>
			<Title>
				<TitleHighlight>Individual</TitleHighlight>
				{" "}
				Project
			</Title>
			<Timelines>
				<Timeline
					title={`Weather App`}
					time={`May 2022 ~ Jun 2022`}
					description={
						<>
							<li>Build a weather website using React, styled components, axios, JavaScript.</li>
							<li>Showing local city's weather and forecast, other cities weather, and click city name to display detailed weather and forecast.</li>
						</>
					}
				/>
				<Timeline
					title={`Personal Website`}
					time={`Mar 2022 ~ Apr 2022`}
					description={
						<>
							<li>Build a website for a professional IT person using HTML, CSS and JavaScript.</li>
							<li>Simple Page Application</li>
							<li>Responsive design</li>
						</>
					}
				/>
				<Timeline
					title={`School Project`}
					time={`Mar 2010 ~ Nov 2012`}
					description={
						<>
							<li>Participate a project course which to work in a team on a software development project and interact with a real client Shaker Consulting, Mar 2012 - Jun 2012
								<dd>The project is aim to design a website to propagate their software products and provide a sales channel to customers. My responsibility was to design and implement the layout of the website, implement the website for introduction of the product and test all functions running smoothly.</dd>
								<dd>The key programming used is HTML, CSS and JavaScript</dd>
							</li>
							<li>To implement a "Academic Management System", Mar 2011 - May 2011
								<dd>The general functions is to include: Create a new university, program, and student; Add/delete a course to/from a program; Enroll/Withdraw a student into/from course; Add/get a result for a completed course; Display a grid-based view for a program showing all the existing courses.</dd>
								<dd>The programming used is Java</dd>
							</li>
							<li>To develop an e-Commerce website to sell innovative products, Aug 2010 - Oct 2010
								<dd>- The general features is to include: Home page, Registration page for new user, Shopping cart and related pages, Product pages, Privacy Policy page, Site map.</dd>
								<dd>The key programming used is to include: HTML, CSS, JavaScript, PHP, SQL.</dd>
							</li>
						</>
					}
				/>
			</Timelines>
		</div>
	</Wrapper>
);

export default Project;