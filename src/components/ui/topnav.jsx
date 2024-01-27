import React from "react";

const TopNav = () => {
  return (
    <div style={styles.TopNav}>
      {/* Add your top bar content here */}
      <div style={styles.logo}>PlanMatrix</div>
      {/* ... other top bar elements */}
    </div>
  );
};

const styles = {
  TopNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    // ... add other styles here
  }
  // ... define styles for other elements
};

export default TopNav;
