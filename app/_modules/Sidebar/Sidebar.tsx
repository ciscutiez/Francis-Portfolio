import React from "react";
import DesktopView from "./View/DesktopView";
import MobileView from "./View/MobileView";

export default async function Sidebar() {
  return (
    <>
      <DesktopView />
      <MobileView />
    </>
  );
}
