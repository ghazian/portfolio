import { Modal, Avatar, Frame } from "@react95/core";
import { Drvspace7 } from "@react95/icons";
import ProfilePicture4 from "../../asset/images/ProfilePicture4.jpg";

const AboutMe = ({ isOpen, onClose }) => {
	return isOpen ? (
		<Modal
			width={"500"}
			height={"630"}
			icon={<Drvspace7 variant="32x32_4" />}
			title="About Me"
			closeModal={onClose}
			defaultPosition={{ x: 350, y: 50 }}
			menu={[
				{ name: "File", list: [] },
				{ name: "Edit", list: [] },
			]}
		>
			<Frame
				w={"100%"}
				h={550}
				boxShadow="in"
				padding="0px 5px"
				style={{
					overflowY: "auto",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div style={{ marginTop: "20px" }}>
					<Avatar src={ProfilePicture4} size={200} circle />
				</div>
				<h1>Hey, I'm Ghaz!</h1>
				<p>
					I'm a <strong>Software Engineer</strong> with over 2 years of
					professional experience and 14+ years as a hobbyist. My love for
					technology started in middle school when I accidentally broke my first
					laptop. I delved into its components, I discovered a fascination for
					hardware. However, I later found my true passion in software
					development and fell in love with it!
				</p>
				<p>
					Back in secondary school (at the age of 13), I founded a Computer Club
					and introduced programming to my friends and classmates. It was an
					exciting opportunity to share my enthusiasm for technology with
					others.
				</p>
				<p>
					Apart from my technical pursuits, I have a diverse range of interests:
				</p>
				<ul>
					<li>
						I love hiking and even conquered Ben Nevis, the highest mountain in
						the British Isles!
					</li>
					<li>
						I am multilingual and can speak 4 languages:
						<ul>
							<li>🇬🇧 English (native)</li> <li>🇮🇩 Indonesian (native)</li>
							<li>🇮🇹 Italian (professional proficiency)</li>
							<li>🇫🇷 French (professional proficiency)</li>
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
