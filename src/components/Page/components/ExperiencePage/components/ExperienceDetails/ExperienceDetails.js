import styled from "styled-components";
import Timeline from "./ExperienceTimeline/ExperienceTimeline";
import Project from "./ProjectExperience/ProjectExperience";

const Wrapper = styled.div`
	padding: 32px 64px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

	& > div {
		flex-basis: calc(50% - 32px);
	}

	& + & {
    margin-top: 32px;
  }
`;

const Title = styled.h3`
	margin-top: 0;
`;

const Timelines = styled.div`
  border-left: 2px solid #dadada;
  padding: 8px 0 8px 48px;

	& > div {
		margin-top: 16px;
		margin-bottom: 16px;
	}
`;

const ExperienceDetails = () => (
	<Wrapper>
		<Container>
			<div>
				<Title>Education</Title>
				<Timelines>
					<Timeline
						title={`Full-stack Program`}
						time={`Mar 2022 ~ Nov 2022`}
						company={`JR Academy`}
						description={`Full-stack Bootcamp`}
					/>
					<Timeline
						title={`Master of Information Technology`}
						time={`Mar 2013 ~ Dec 2013`}
						company={`University of Sydney`}
						description={`Major in Software Engineering`}
					/>
					<Timeline
						title={`Bachelor of Information Technology`}
						time={`Mar 2010 ~ Dec 2012`}
						company={`RMIT University`}
						description={`Major in Application Programming, Minor in Multimedia Design`}
					/>
				</Timelines>
			</div>
			<div>
				<Title>Experience</Title>
				<Timelines>
					<Timeline
						title={`Full Stack Developer`}
						time={`Sep 2022 ~ Dec 2022 (3 months Internship)`}
						company={`JR Academy`}
						description={`Developed and rewrote the resume section in JR Academy website with React, Redux, Typescript, CSS, LESS, keystone, and web UI followed with project requirements by Zeplin. Utilized Jira and Bitbucket for task development and code review. Experienced on working with BA, UI designers, Devops engineers and other developers in an agile environment.`}
					/>
					<Timeline
						title={`Junior Web Developer`}
						time={`May 2018 ~ Jul 2018 (3 months Internship)`}
						company={`Digital Dock`}
						description={`Developed websites using WordPress, JavaScript, HTML, CSS. Responsible for new website development and maintenance existed website on the Wordpress CMS.`}
					/>
					<Timeline
						title={`Administrator`}
						time={`Mar 2014 ~ May 2018`}
						company={`Ausworld Trading`}
						description={`Customer service. Managed and dealt with queries for new and existing clients. Used of Excel spreadsheet to manage data, and data entry into the company's system. Assisted manger working. Maintained permissions/access to system and software for new/current staff and leavers. Edited and updated content on website in accordance with company policy changing. Provided general administration support to the team member and complete other tasks as needed.`}
					/>
				</Timelines>
			</div>
		</Container>
		<Project />
	</Wrapper>
);

export default ExperienceDetails;