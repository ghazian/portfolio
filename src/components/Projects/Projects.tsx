import { Modal, Frame, TitleBar } from "@react95/core";
import { Explorer100 } from "@react95/icons";
import { FaReact, FaAws, FaGithub, FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandPowershell } from "react-icons/tb";
import { LuFileJson } from "react-icons/lu";
import {
	SiTypescript,
	SiPostgresql,
	SiVitest,
	SiScala,
	SiNumpy,
	SiPandas,
	SiTensorflow,
	SiNodedotjs,
	SiNestjs,
	SiRedis,
	SiKubernetes,
	SiGraphql,
	SiDatadog,
	SiVite,
} from "react-icons/si";
import { GiJesterHat } from "react-icons/gi";

interface ProjectsProps {
	isOpen: boolean;
	onClose: () => void;
}

const Projects = ({ isOpen, onClose }: ProjectsProps) => {
	return isOpen ? (
		<Modal
			w="500px"
			h="700px"
			icon={<Explorer100 variant="16x16_4" />}
			title="Projects.txt"
			dragOptions={{ defaultPosition: { x: 250, y: 20 } }}
			titleBarOptions={<TitleBar.Close onClick={onClose} />}
			buttons={[
				{ value: "Ok", onClick: onClose },
				{ value: "Cancel", onClick: onClose },
			]}
			menu={[
				{ name: "File", list: <></> },
				{ name: "Edit", list: <></> },
			]}
		>
			<Frame
				w="100%"
				h="600px"
				boxShadow="in"
				backgroundColor="white"
				p="0px 10px"
				style={{ overflowY: "auto" }}
			>
				<div>
					<h2>Projects</h2>
					<p>Amongst many, here are my highlighted projects:</p>
					<hr />
					<h3>Alpha FX — Client Portal</h3>
					<p>
						The Alpha FX Client Portal is a secure, high-throughput financial
						platform enabling clients to manage daily operations including
						payments, fund transfers, entity management, and user
						administration. The platform processes over $130b in annual
						transaction volume, demanding rigorous attention to performance,
						security, and reliability.
					</p>
					<p>
						<strong>My role:</strong> Full-stack engineer responsible for
						developing new features and maintaining existing ones across the
						entire stack. On the backend, I designed and implemented
						high-throughput payment APIs, introduced a centralised context-aware
						logging architecture using Pino and AsyncLocalStorage for end-to-end
						request tracing, and reduced cloud caching costs through a local
						caching layer within the payment processing engine. On the frontend,
						I built and iterated on user-facing features across payments,
						transfers, and account management flows, ensuring a consistent and
						secure user experience.
					</p>
					<p>
						Tech Stack: <SiNodedotjs /> Node.js, <SiNestjs /> NestJS,{" "}
						<FaReact /> React, <SiVite /> Vite, <SiTypescript /> TypeScript,{" "}
						<SiPostgresql /> PostgreSQL, <SiRedis /> Redis, <FaAws /> AWS
					</p>
					<hr />
					<h3>Data Console</h3>
					<p>
						Data Console is a real-time, data-driven web platform delivering
						live sports data across football, golf, tennis, volleyball, and more
						to customers globally. The platform serves over 65,000+ live events
						simultaneously and demands continuous full-stack optimisation for
						low-latency data delivery and a seamless user experience.
					</p>
					<p>
						<strong>My role:</strong> Full-stack engineer across both the
						frontend and backend. Scaled the platform from 1 million to 170
						million users during peak time through architectural improvements
						and infrastructure optimisation. On the frontend, I led the
						modernisation of a monolithic application into a component-driven
						architecture, introduced a reusable design system across two product
						lines, and pioneered the company's first data and table
						visualisation package — now used organisation-wide and by external
						clients. On the backend, I designed and implemented high-performance
						Node.js APIs achieving a 50% increase in data retrieval speeds,
						integrated Redis caching reducing response times by 200%, and
						leveraged Kubernetes health checks with Datadog monitoring for
						microservice resiliency. I also built the application's CI/CD
						pipeline and optimised WebSocket and GraphQL state management,
						reducing network latency by 40%.
					</p>
					<p>
						Tech Stack: <FaReact /> React, <TbBrandNextjs /> Next.js,{" "}
						<SiNodedotjs /> Node.js, <SiTypescript /> TypeScript, <SiScala />{" "}
						Scala, <FaGolang /> Go, <SiPostgresql /> PostgreSQL, <SiRedis />{" "}
						Redis, <SiGraphql /> GraphQL, <SiKubernetes /> Kubernetes,{" "}
						<SiDatadog /> Datadog, <FaAws /> AWS, <GiJesterHat /> Jest,{" "}
						<SiVitest /> Playwright
					</p>
					<a href="https://data.console.imgarena.com/">Link</a>
					<hr />
					<h3>Ops Console</h3>
					<p>
						Ops Console is an internal full-stack operational tooling platform
						built to support the entire data pipeline at IMG Arena. It provides
						support and operations teams with the ability to maintain data
						integrity, manage player and entity records, and edit live in-play
						data in real time — directly impacting the accuracy of sports data
						delivered to customers worldwide.
					</p>
					<p>
						<strong>My role:</strong> Full-stack engineer on both the backend
						services and the frontend interface. Built and maintained RESTful
						APIs and backend services powering the operational workflows,
						including live data mutation endpoints with strict validation and
						audit logging. On the frontend, I developed the user interface for
						player management, data integrity tooling, and live event editing —
						ensuring operators could act quickly and safely on live data without
						risk to downstream consumers.
					</p>
					<p>
						Tech Stack: <FaReact /> React, <TbBrandNextjs /> Next.js,{" "}
						<SiNodedotjs /> Node.js, <SiTypescript /> TypeScript,{" "}
						<SiPostgresql /> PostgreSQL, <SiRedis /> Redis, <SiKubernetes />{" "}
						Kubernetes, <SiDatadog /> Datadog
					</p>
					<hr />
					<h3>Playwright Workflow Report Card</h3>
					<p>
						A GitHub Action that fills a gap in standard Playwright CI
						workflows: rather than requiring engineers to manually inspect
						workflow logs after a test run failure, it automatically produces a
						structured "Report Card" posted directly to the pull request —
						showing the failing test names, failure reasons, and relevant
						context at a glance.
					</p>
					<p>
						<strong>My role:</strong> Designed and built the action from
						scratch. It consumes Playwright XML results, parses failure data,
						and posts a formatted summary comment to the PR via the GitHub API
						(OctoKit). Inspired by the{" "}
						<a href="https://github.com/marketplace/actions/jest-coverage-report">
							Jest Coverage Report
						</a>{" "}
						action.
					</p>
					<p>
						Tech Stack: <FaGithub /> GitHub Actions, <SiTypescript />{" "}
						TypeScript, <LuFileJson /> OctoKit
					</p>
					<a href="https://github.com/ghazian/playwright-comment-action">
						Link
					</a>
					<hr />
					<h3>Big Data Coreset Construction in K-Means Problem</h3>
					<p>
						MSc research project implementing lightweight coreset construction
						for the K-Means clustering problem — a technique for compressing
						large datasets into compact representations that are provably
						competitive with models trained on the full data, dramatically
						reducing space and time complexity for large-scale clustering tasks.
					</p>
					<p>
						<strong>My role:</strong> Implemented three coreset construction
						algorithms based on the works of{" "}
						<a href="https://arxiv.org/abs/1702.08248#:~:text=Download%20a%20PDF%20of%20the,on%20the%20full%20data%20set.">
							[1]
						</a>{" "}
						<a href="https://www.sciencedirect.com/science/article/pii/0304397585902245">
							[2]
						</a>{" "}
						<a href="https://arxiv.org/abs/1810.12826">[3]</a>, and benchmarked
						them against full-dataset training across multiple clustering
						configurations.
					</p>
					<p>
						Tech Stack: <FaPython /> Python, <SiNumpy /> NumPy, Matplotlib,{" "}
						<SiPandas /> Pandas, <TbBrandPowershell /> Shell, <SiTensorflow />{" "}
						TensorFlow
					</p>
					<a href="https://github.com/ghazian/lwcoreset?tab=readme-ov-file">
						Link
					</a>
					<hr />
					<h3>This Portfolio Site</h3>
					<p>
						My personal website built in old-school Windows 95 style — now fully
						migrated to TypeScript and Vite, with React 19 and the latest
						React95 component library.
					</p>
					<p>
						Tech Stack: <FaReact /> React, <SiTypescript /> TypeScript, WebAmp
					</p>
					<a href="https://github.com/ghazian/portfolio">Link</a>
					<hr />
				</div>
			</Frame>
		</Modal>
	) : null;
};

export default Projects;
