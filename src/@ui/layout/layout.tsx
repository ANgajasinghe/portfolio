import { Card } from "@material-ui/core";
import React from "react";
import MainHeader from "./main-header";
import MobileHeader from "./mobile-header";
import PersonalDetails from "./personal-details";

export default function Layout(props: any) {
  return (
    <>
      {/* <MainHeader /> */}
      <main className="container-fluid">
        <Card className="mt-3 mb-3" style={{ height: "95vh" }}>
          <div className="row g-0 p-0 m-0">
            <MobileHeader />

            <div className="col-md-4 col-lg-3 d-none d-md-block">
              <PersonalDetails />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8">{props.children}</div>
            <div className="d-none d-md-flex col-md-1 col-lg-1 d-flex justify-content-end">
              <MainHeader />
            </div>
          </div>
        </Card>
      </main>
    </>
  );
}
