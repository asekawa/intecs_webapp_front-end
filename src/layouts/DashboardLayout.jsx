import React from "react";
import Navbar from "../components/navbar/Navbar";
import DashboardSidebar from "../components/sidebar/dashboardSidebar/DashboardSidebar";

const DashboardLayout = (ViewComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          {/* <Import the nav bar> */}
          <Navbar />
          <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <DashboardSidebar />

            {/* <div style={{ overflowX: 'scroll' }}> */}
            <ViewComponent />
            {/* </div> */}
          </div>
        </>
      );
    }
  };
};

export default DashboardLayout;
