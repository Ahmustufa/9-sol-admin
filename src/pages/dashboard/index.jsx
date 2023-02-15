import React from "react";
import { withAuth } from "@/components/privateRoute";
import Drawer from "@/components/drawer";

const Dashboard = () => {
  return (
    <Drawer>

    </Drawer>
  );
};

export default withAuth(Dashboard);
