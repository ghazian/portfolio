import { TaskBar, List, Modal, Frame, TitleBar } from "@react95/core";
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
          titleBarOptions={<TitleBar.Close onClick={closeFirst} />}
          w="300px"
          h="200px"
        >
          <Frame
            w="100%"
            h="100px"
            boxShadow="in"
            backgroundColor="white"
            p="0px 15px"
            style={{ overflowY: "auto" }}
          >
            The world is beautiful
          </Frame>
        </Modal>
      )}

      <TaskBar
        list={
          <List>
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
