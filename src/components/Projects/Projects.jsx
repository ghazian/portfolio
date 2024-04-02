import { Modal, Frame } from "@react95/core";
import { Explorer100 } from "@react95/icons";
import { FaReact, FaAws, FaGithub, FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandPowershell } from "react-icons/tb";
import { LuFileJson } from "react-icons/lu";
import {
  SiTypescript,
  SiPostgresql,
  SiPlaywright,
  SiScala,
  SiNumpy,
  SiPandas,
  SiTensorflow,
} from "react-icons/si";
import { GiJesterHat } from "react-icons/gi";

const Projects = ({ isOpen, onClose }) => {
  return isOpen ? (
    <Modal
      width={"500"}
      height={"700"}
      icon={<Explorer100 variant="16x16_4" />}
      title="Projects.txt"
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
        h={600}
        boxShadow="in"
        bg="white"
        padding="0px 10px"
        style={{ overflowY: "auto" }}
      >
        <div>
          <h2>Projects</h2>
          <hr />
          <h3>Data Console</h3>
          <p>
            Data Console is an innovative web-based platform that delivers
            real-time sports data, including football, golf, tennis, volleyball,
            and various other sports, to our customers. This platform requires
            continuous optimization to ensure the timely and accurate delivery
            of data
          </p>
          <p>
            <strong>My role:</strong> As a software engineer, I modernized a
            monolithic application, introduced reusable components, and
            pioneered data visualization packages. I led the rewrite of the
            application into modern frameworks, optimized network performance,
            developed new API's for the application and facilitated team
            onboarding and upskilling. Additionally, I deployed robust logging
            and automated infrastructure, enhanced security frameworks, and
            fostered a culture of continuous learning through internal
            presentations.
          </p>
          <p>
            Tech Stack: <FaReact /> ReactJS, <TbBrandNextjs /> NextJS, ,{" "}
            <FaAws /> AWS, <SiTypescript /> TypeScript, <SiScala /> Scala,{" "}
            <FaGolang /> Go, <SiPostgresql /> PostgreSQL, Redux/Zustand,{" "}
            <GiJesterHat /> Tests, <SiPlaywright /> Playwright
          </p>
          <a href="https://data.console.imgarena.com/">Link</a>
          <hr />
          <h3>Playwright Workflow Report Card</h3>
          <p>
            Playwright, developed by Microsoft, is a web testing and automation
            framework designed to simulate real user interactions within user
            interfaces. Currently, industry practices predominantly uses
            Playwright for conducting tests on every development branch prior to
            merging, or periodically scheduling cron jobs to identify any
            failures in UI components. The existing process lacks of published
            results post-test execution, necessitating a manual review of
            workflow logs to check the cause of a failure. My project addresses
            this gap by introducing a "Report Card" system, which systematically
            documents and provides insights into test failures, including
            detailed reasons for each failure. This enhancement streamlines the
            debugging process and also improves the efficiency and transparency
            of web application testing workflows. This{" "}
            <a href="https://github.com/marketplace/actions/jest-coverage-report">
              Action
            </a>{" "}
            gave inspiration for this work.
          </p>
          <p>
            <strong>My role: </strong>I've made this implementation from
            scratch, every playwright test would give a JSON payload if you
            allow it and this action parses it and forms a Report Card of newest
            commits{" "}
          </p>
          <p>
            Tech Stack: <FaGithub /> Github, <SiTypescript /> TypeScript,{" "}
            <LuFileJson /> OctoKit
          </p>
          <a href="https://github.com/ghazian/playwright-comment-action">
            Link
          </a>
          <hr />
          <h3>Big Data Coreset Construction in K-Means Problem</h3>
          <p>
            Coresets are compact representations of data sets such that models
            trained on a coreset are provably competitive with models trained on
            the full data set. As such, they have been successfully used to
            scale up clustering models to massive data sets. While existing
            approaches generally only allow for multiplicative approximation
            errors, my research propose a theoretical results and to implement
            the techniques of building coresets comparative to lightweight
            coresets which were made by the authors of{" "}
            <a href="https://arxiv.org/abs/1702.08248#:~:text=Download%20a%20PDF%20of%20the,on%20the%20full%20data%20set.">
              [ 1 ].
            </a>
          </p>
          <p>
            <strong>My role: </strong> Created a lightweight coreset
            construction for K-Means problem along with 3 algorithms based on
            the works of{" "}
            <a href="https://arxiv.org/abs/1702.08248#:~:text=Download%20a%20PDF%20of%20the,on%20the%20full%20data%20set.">
              [ 1 ].
            </a>
            <a href="https://www.sciencedirect.com/science/article/pii/0304397585902245">
              [ 2 ]
            </a>
            <a href="https://arxiv.org/abs/1810.12826">[ 3 ]</a>, to reduce the
            amount of space time complexities machines currently use when
            clustering K-Means problem of large data sets.
          </p>
          <p>
            Tech Stack: <FaPython /> Python, <SiNumpy /> Numpy, Matplotlib,{" "}
            <SiPandas /> Pandas, <TbBrandPowershell /> Shell, <SiTensorflow />{" "}
            Tensor Flow
          </p>
          <a href="https://github.com/ghazian/lwcoreset?tab=readme-ov-file">
            Link
          </a>
          <hr />
          <h3>My Portfolio Site</h3>
          <p>
            My personal website in old-school Windows95 design along with
            implementing our loving Spotify (WinAmp).
          </p>
          <p>
            Tech Stack: <FaReact /> React, WebAmp
          </p>
          <hr />
        </div>
      </Frame>
    </Modal>
  ) : null;
};

export default Projects;
