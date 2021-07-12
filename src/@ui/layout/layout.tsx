import { Card } from "@material-ui/core";
import React from "react";
import MainHeader from "./main-header";
import MobileHeader from "./mobile-header";
import PersonalDetails from "./personal-details";

export default function Layout(props: any) {
  return (
    <>
      {/* <MainHeader /> */}
      <main className="container-fluid container-xxl">
        <Card className="mt-3 mb-3" style={{ height: "95vh" }}>
          <div className="row g-0 p-0 m-0">
            <MobileHeader />
            <div className="col-sm-12">
              <div className="d-flex">
                <div className="d-none d-lg-flex">
                  <PersonalDetails />
                </div>

                <div className="w-100 pb-5 vh-100 scroll-container hide-scrollbar">
                  {props.children}
                </div>

                <div className="d-none d-lg-flex">
                  <MainHeader />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
}
