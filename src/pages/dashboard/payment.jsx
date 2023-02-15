import React from 'react'
import { withAuth } from "@/components/privateRoute";
import Drawer from "@/components/drawer";
function Payment() {
  return (
    <Drawer>
      Payment
    </Drawer>
  )
}

export default withAuth(Payment)
