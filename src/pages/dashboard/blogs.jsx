import React from "react";
import Drawer from "@/components/drawer/index";
import { withAuth } from "@/components/privateRoute";

function Blogs() {
  return <Drawer>Blogs</Drawer>;
}

export default withAuth(Blogs);
