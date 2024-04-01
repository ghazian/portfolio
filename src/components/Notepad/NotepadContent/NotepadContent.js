const NotepadContent = ({ selectedIcon }) => {
  const renderContent = () => {
    switch (selectedIcon) {
      case "My Resume":
        return (
          <div>
            <h1>My Resume!</h1>This is the content for My Resume.
          </div>
        );
      default:
        return null;
    }
  };

  return renderContent();
};

export default NotepadContent;
