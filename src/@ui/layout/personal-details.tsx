import ProfileImage from "@ui/components/profile-image";
import { CardHeaderText } from "../components/header-text";
import { SecondaryText, NormalText } from "../components/content-text";
import LinearProgress from "@material-ui/core/LinearProgress";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useState, useEffect } from "react";
import ProgressBar from "@ui/components/progress-bar";
import CheckIconContent from "@ui/components/check-icon-content";

export default function PersonalDetails() {
  return (
    <div className="card vh-100 shadow w-100 primary-bg-color">
      <div className="card secondary-bg-color" style={{ width: "280px" }}>
        <div className="text-center mt-4 mb-4">
          <ProfileImage />
          <CardHeaderText> AG. Nayanajith </CardHeaderText>
          <div className="mt-2">
            <SecondaryText> Full-stack Web Developer </SecondaryText>
            <SecondaryText> Mobile Developer </SecondaryText>
          </div>
        </div>
      </div>

      <div className="scroll-container hide-scrollbar mb-5">
        <div className="mt-3 ms-4 me-4 mb-5">
          <div>
            <div className="d-flex justify-content-between mb-2">
              <NormalText> Residence: </NormalText>{" "}
              <SecondaryText> Sri Lanka </SecondaryText>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <NormalText> City: </NormalText>{" "}
              <SecondaryText> Colombo </SecondaryText>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <NormalText> Age: </NormalText>{" "}
              <SecondaryText> 23 </SecondaryText>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <NormalText> Languages: </NormalText>{" "}
              <SecondaryText> English/Sinhala </SecondaryText>
            </div>
          </div>

          <hr />

          <CardHeaderText> Cording </CardHeaderText>

          <ProgressBar name=".NET" value={90} />
          <ProgressBar name="Node" value={50} />
          <ProgressBar name="Next.js" value={50} />
          <ProgressBar name="Angular" value={80} />
          <ProgressBar name="React" value={80} />

          <hr className="mt-5 mb-4" />

          <CardHeaderText> Knowledge </CardHeaderText>
          <CheckIconContent text=" Bootstrap, Tailwind CSS "></CheckIconContent>
          <CheckIconContent text=" Angular Material, Material UI "></CheckIconContent>
          <CheckIconContent text=" Azure, AWS, Heroku "></CheckIconContent>
          <CheckIconContent text=" Azure Devops, GIT "></CheckIconContent>
          <CheckIconContent text=" Docker "></CheckIconContent>
        </div>
      </div>
    </div>
  );
}
