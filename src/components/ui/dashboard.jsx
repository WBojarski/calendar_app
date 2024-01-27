import React from "react";
import TopNav from "/src/components/ui/topnav";
import Sidebar from "/src/components/ui/sidebar";

const Dashboard = () => {
  return (
    <div style={styles.dashboard}>
      <Sidebar />
      <div style={styles.dashboardMain}>
        <TopNav />
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    display: "flex",
    height: "100vh"
  },
  dashboardMain: {
    flexGrow: 1,
    backgroundColor: "#E5E5E5"
    // ... add other styles here
  }
  // ... define styles for other elements
};

export default Dashboard;
