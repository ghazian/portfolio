import { Modal, Frame } from "@react95/core";
import { Notepad1 } from "@react95/icons";

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
        padding="0px 5px"
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
              Improved the design of the monolithic application by introducing
              design principals to create reusable components that are easy to
              compose and extend for those of all skill levels. This ensured
              consistent UI/UX design standards across 2 product lines.
            </li>
            <li>
              Developed and pioneered the company’s first data and table
              visualization package, used throughout the organization and
              externally, along with a suite of customisable widgets and themes.{" "}
            </li>
            <li>
              Lead the team to rewrite the 10 year old monolithic Angular
              application into modern frameworks and extract out many standalone
              npm packages into small microservices running on AWS.
            </li>
            <li>
              Facilitated onboarding of graduates into the team and up-skilling
              through mentor buddy program.
            </li>
            <li>
              Directed the implementation of Zustand state management to
              streamline network performance, resulting in a 40% decrease in
              latency across WebSocket and REST API integrations, ensuring a
              seamless user experience.
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
        </div>
      </Frame>
    </Modal>
  ) : null;
};

export default Notepad;
