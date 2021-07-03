import ProfileImage from "@ui/components/profile-image";
import { CardHeaderText } from "../components/header-text";
import { NormalContentText } from "../components/content-text";

export default function PersonalDetails() {
  return (
    <div className="card vh-100 shadow w-100 primary-bg-color">
      <div className="card secondary-bg-color" style={{ width: "280px" }}>
        <div className="text-center mt-4 mb-4">
          <ProfileImage />
          <CardHeaderText> AG. Nayanajith </CardHeaderText>
          <div className="mt-2">
            <NormalContentText> Full-stack Web Developer </NormalContentText>
            <NormalContentText> Mobile Developer </NormalContentText>
          </div>
        </div>
      </div>
    </div>
  );
}
