const NotepadContent = ({ selectedIcon }) => {
  const renderContent = () => {
    switch (selectedIcon) {
      case "My Resume":
        return <div>This is the content for My Resume.</div>;
      case "Media":
        return <div>This is the content for Media.</div>;
      case "About Me":
        return <div>This is the content for About Me.</div>;
      case "Contact Me":
        return <div>This is the content for Contact Me.</div>;
      default:
        return null;
    }
  };

  return renderContent();
};

export default NotepadContent;
