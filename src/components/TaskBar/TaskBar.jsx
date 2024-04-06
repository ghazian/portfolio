import { TaskBar, List, Modal, Frame } from "@react95/core";
import { WindowsExplorer } from "@react95/icons";
import { useState } from "react";

const Taskbar = () => {
  const [first, toggleFirst] = useState(false);

  const closeFirst = () => toggleFirst(false);

  return (
    <>
      {first && (
        <Modal
          icon={<WindowsExplorer variant="16x16_4" />}
          title="Windows Explorer"
          closeModal={closeFirst}
          width="300"
          height="200"
        >
          <Frame
            w={"100%"}
            h={100}
            boxShadow="in"
            bg="white"
            padding="0px 15px"
            style={{ overflowY: "auto" }}
          >
            The world is beautiful
          </Frame>
        </Modal>
      )}

      <TaskBar
        list={
          <List>
            {/* <List.Item
              icon={<ReaderClosed variant="32x32_4" />}
              onClick={() => toggleSecond(true)}
            >
              About Me (C:)
            </List.Item> */}
            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={() => {
                toggleFirst(true);
              }}
            >
              Windows Explorer
            </List.Item>
          </List>
        }
      />
    </>
  );
};

export default Taskbar;
