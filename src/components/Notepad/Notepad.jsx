import { Modal, Frame, Button } from "@react95/core";
import { Notepad1 } from "@react95/icons";
import CV from "../../asset/CV/Ghazian_Azfar_CV.pdf";

const Notepad = ({ isOpen, onClose }) => {
	return isOpen ? (
		<Modal
			width={"700"}
			height={"500"}
			icon={<Notepad1 variant="16x16_4" />}
			title="My Resume"
			defaultPosition={{ x: 250, y: 20 }}
			closeModal={onClose}
			buttons={[
				{ value: "Ok", onClick: onClose },
				{ value: "Cancel", onClick: onClose },
			]}
			menu={[
				{ name: "File", list: [] },
				{ name: "Edit", list: [] },
			]}
		>
			<Frame
				w={"100%"}
				h={400}
				boxShadow="in"
				bg="white"
				padding="0px 15px"
				style={{ overflowY: "auto" }}
			>
				<div>
					<h2>Work Experience</h2>
					<p>
						<strong>Mid Software Engineer</strong> | IMG Arena | London - UK
					</p>
					<p>JULY 2022 - PRESENT</p>
					<ul>
						<li>
							Developed and maintained a real-time, data-driven web platform
							showcasing over 1000+ live sports events globally. Designed
							scalable solutions utilizing WebSockets for low-latency updates
							and REST APIs for data retrieval.
						</li>
						<li>
							Introduced design principles to create reusable components,
							ensuring consistent UI/UX design standards across 2 product lines.
							This improved the overall design and made it easy for team members
							of all skill levels to compose and extend components.
						</li>
						<li>
							Developed the company’s first data and table visualization
							package, which includes a suite of customisable widgets and
							themes. This package is now used throughout the organization and
							externally.
						</li>
						<li>
							Facilitated onboarding of graduates into the team and up-skilling
							through mentor buddy program.
						</li>
						<li>
							Successfully implemented and deployed Redis as an in-memory
							caching solution for heavy API calls and PostgreSQL for static
							data reducing response times by up to 200%.
						</li>
					</ul>
					<br />
					<p>
						<strong>Consulting Intern</strong> | Deloitte | Jakarta - IDN
					</p>
					<p>SEPT 2018 - DEC 2018</p>
					<ul>
						<li>
							Developed a python script to review work flow documents and
							documenting key metrics and numbers. This script helped reduce the
							amount of work by saving 2 hours of systematic manual work.
						</li>
						<li>
							Facilitating workshops with key client stakeholders VP/Manager
							level to uncover pain points and potential use-cases/requirements
							of the transformation programme.
						</li>
					</ul>
					<br />
					<p>
						<strong>Software Engineer Intern</strong> | Bank Mandiri | Jakarta -
						IDN
					</p>
					<p>FEB 2018 - JUL 2018</p>
					<ul>
						<li>
							Developed and implemented Python scripts to automate data
							pre-processing with features engineering, selection, andextraction
							options. This development improved productivity to 80%.
						</li>
						<li>
							Built Tableau dashboard to visualize core business KPI’s (project
							status, recurring revenue streams), saving 8 hours per week
							ofmanual reporting work.
						</li>
					</ul>
					<hr />
					<h2>Education</h2>
					<h4>Master of Science in Computer Science</h4>
					<p>University of Glasgow | 2:1 Merit | Jan 2021 - Jan 2022</p>
					<h4>Bachelor of Science in Computer Science</h4>
					<p>University of Binus | 2:1 Merit | Sept 2015 - Jan 2020</p>
					<h4>High School</h4>
					<p>
						SMAN 68 | A Levels: A*A*A*AA (Math, Bio, Chem, Eng, Physics) | Sept
						2015 - Jan 2020
					</p>
					<div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
						<Button>
							<a href={CV} download="Ghazian_Azfar_CV.pdf">
								Download Resume
							</a>
						</Button>
					</div>
				</div>
			</Frame>
		</Modal>
	) : null;
};

export default Notepad;
