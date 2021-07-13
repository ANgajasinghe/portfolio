import React from "react";
import CountUp from "react-countup";
import { NormalText } from "./content-text";
import classes from "../../styles/Home.module.css";

export default function HomeCountUp(props: any) {
  return (
    <div className="p-2 row">
      <div className="col-sm-3">
        <div className="d-flex justify-content-center align-items-center">
          <CountUp className={classes.counterText} end={3} />
          <span className={[classes.counterText, "ms-2 me-4"].join(" ")}>
            <b>+</b>
          </span>
          <span>
            <NormalText> Years Experience </NormalText>
          </span>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="d-flex justify-content-center align-items-center">
          <CountUp className={classes.counterText} end={50} />
          <span className={[classes.counterText, "ms-2 me-4"].join(" ")}>
            <b>+</b>
          </span>
          <span>
            <NormalText> Completed Projects </NormalText>
          </span>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="d-flex justify-content-center align-items-center">
          <CountUp className={classes.counterText} end={30} />
          <span className={[classes.counterText, "ms-2 me-4"].join(" ")}>
            <b>+</b>
          </span>
          <span>
            <NormalText> Happy Customers </NormalText>
          </span>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="d-flex justify-content-center align-items-center">
          <CountUp className={classes.counterText} end={5} />
          <span className={[classes.counterText, "ms-2 me-4"].join(" ")}>
            <b>+</b>
          </span>
          <span>
            <NormalText> Honors and Awards </NormalText>
          </span>
        </div>
      </div>
    </div>
  );
}
