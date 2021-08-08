import CheckIcon from "@material-ui/icons/Check";
import {SecondaryText} from "./text";

export default function CheckIconContent(props: any) {
    return (
        <small className="d-flex">
            <small>
                <CheckIcon
    className="text-yellow-400"
    style={{fontSize: "14px"}}
    fontSize="small"
    />
            </small>
            <div className="ms-2">
                <SecondaryText>
          <span
              style={{fontSize: "13px", fontFamily: "Poppins , sans-serif"}}
          >
            {props.text}
          </span>
                </SecondaryText>
            </div>
        </small>
    );
}
