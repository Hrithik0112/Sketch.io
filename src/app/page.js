"use client";
//redux won't work on server components

import Body from "@/components/Canvas";
import Menu from "@/components/Menu";
import ToolBar from "@/components/ToolBar";

export default function Home() {
  return (
    <>
      <Menu />
      <ToolBar />
      <Body />
    </>
  );
}
