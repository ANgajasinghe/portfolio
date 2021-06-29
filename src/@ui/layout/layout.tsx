import React from "react";
import MainHeader from "./main-header";

export default function Layout(props: any) {
  return (
    <>
      <MainHeader />
      <main className="container">{props.children}</main>
    </>
  );
}
