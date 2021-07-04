import ProfileImage from "@ui/components/profile-image";
import { CardHeaderText } from "../components/header-text";
import { SecondaryText, NormalText } from "../components/content-text";
import LinearProgress from "@material-ui/core/LinearProgress";
import PerfectScrollbar from "react-perfect-scrollbar";

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

      <div className="overflow-scroll">
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

          <p>
            <div className="d-flex justify-content-between mb-2">
              <NormalText> .NET </NormalText>
              <NormalText> 90% </NormalText>
            </div>
            <LinearProgress variant="determinate" value={90} />
          </p>

          <p>
            <div className="d-flex justify-content-between mb-2">
              <NormalText> Node </NormalText>
              <NormalText> 50% </NormalText>
            </div>
            <LinearProgress variant="determinate" value={50} />
          </p>

          <p>
            <div className="d-flex justify-content-between mb-2">
              <NormalText> Next.js </NormalText>
              <NormalText> 50% </NormalText>
            </div>
            <LinearProgress variant="determinate" value={50} />
          </p>
          <p>
            <div className="d-flex justify-content-between mb-2">
              <NormalText> Angular </NormalText>
              <NormalText> 85% </NormalText>
            </div>
            <LinearProgress variant="determinate" value={85} />
          </p>

          <p>
            <div className="d-flex justify-content-between mb-2">
              <NormalText> React </NormalText>
              <NormalText> 85% </NormalText>
            </div>
            <LinearProgress variant="determinate" value={85} />
          </p>
        </div>
      </div>
    </div>
  );
}
