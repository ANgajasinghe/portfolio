import CheckIcon from "@material-ui/icons/Check";
import { SecondaryText } from "../components/content-text";

export default function CheckIconContent(props: any) {
  return (
    <small className="d-flex">
      <small>
        <CheckIcon
          className="yellow"
          style={{ fontSize: "14px" }}
          fontSize="small"
        ></CheckIcon>
      </small>
      <div className="ms-2">
        <SecondaryText>
          <span
            style={{ fontSize: "13px", fontFamily: "Poppins , sans-serif" }}
          >
            {props.text}
          </span>
        </SecondaryText>
      </div>
    </small>
  );
}
