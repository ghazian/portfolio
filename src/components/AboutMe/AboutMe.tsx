import { Modal, Avatar, Frame, TitleBar } from "@react95/core";
import { Drvspace7 } from "@react95/icons";
import ProfilePicture5 from "../../asset/images/ProfilePicture5.jpg";
import { FR, GB, ID, IT } from "country-flag-icons/react/3x2";

interface AboutMeProps {
	isOpen: boolean;
	onClose: () => void;
}

const AboutMe = ({ isOpen, onClose }: AboutMeProps) => {
	return isOpen ? (
		<Modal
			w="500px"
			h="630px"
			icon={<Drvspace7 variant="32x32_4" />}
			title="About Me"
			titleBarOptions={<TitleBar.Close onClick={onClose} />}
			dragOptions={{ defaultPosition: { x: 350, y: 50 } }}
			menu={[
				{ name: "File", list: <></> },
				{ name: "Edit", list: <></> },
			]}
		>
			<Frame
				w="100%"
				h="550px"
				boxShadow="in"
				p="0px 5px"
				style={{
					overflowY: "auto",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div style={{ marginTop: "20px" }}>
					<Avatar src={ProfilePicture5} size="200px" circle />
				</div>
				<h1>Hey, I'm Ghaz!</h1>
				<p>
					I'm a <strong>Software Engineer</strong> who's been writing code for
					14+ years, long before anyone was paying me to!
				</p>
				<p>
					It started at 13 years old, when I broke my first laptop trying to fix
					it. Instead of panic I felt curiosity. Pulled it apart and learned how
					it worked, and never really stopped. By that point I'd founded a
					Computer Club to teach programming to classmates. Notepad++ days.
				</p>
				<p>
					Today I <strong>build production systems at scale</strong>, but the
					mindset hasn't changed. I'm still curious, and learning new things
					every day, amongst that I teach programming as a mentor to several
					students trying to get in the industry!
				</p>

				<p>
					Along with my technical pursuits, I have a diverse range of interests:
				</p>
				<ul>
					<li>
						I love hiking and even conquered Ben Nevis, the highest mountain in
						the British Isles!
					</li>
					<li>
						I am multilingual and can speak 4 languages:
						<ul>
							<li>
								<GB
									style={{
										height: "1em",
										verticalAlign: "middle",
										marginRight: "2px",
									}}
								/>
								English (native)
							</li>
							<li>
								<ID
									style={{
										height: "1em",
										verticalAlign: "middle",
										marginRight: "2px",
									}}
								/>
								Indonesian (native)
							</li>
							<li>
								<IT
									style={{
										height: "1em",
										verticalAlign: "middle",
										marginRight: "2px",
									}}
								/>
								Italian (professional proficiency)
							</li>
							<li>
								<FR
									style={{
										height: "1em",
										verticalAlign: "middle",
										marginRight: "2px",
									}}
								/>
								French (professional proficiency)
							</li>
						</ul>
					</li>
					<li>
						I am an avid cook and enjoy exploring cuisines from around the
						world. I've delved into Asian, British, and Italian dishes, and I'm
						currently venturing into Eastern European flavors!
					</li>
				</ul>
			</Frame>
		</Modal>
	) : null;
};

export default AboutMe;
