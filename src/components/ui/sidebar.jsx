import React from "react";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      {/* Add your sidebar content here */}
      {/* ... other sidebar elements */}
    </div>
  );
};

const styles = {
  sidebar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    width: "250px",
    height: "100vh"
    // ... add other styles here
  }
  // ... define styles for other elements
};

export default Sidebar;
