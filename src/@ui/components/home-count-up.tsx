import React from "react";
import CountUp from "react-countup";
import {Text} from "./text";
import classes from "../../styles/Home.module.css";

export default function HomeCountUp() {
    return (
        <div className="p-2 row">
            <div className="col-sm-3">
                <div className="d-flex justify-content-center align-items-center">
                    <CountUp className={classes.counterText} end={3}/>
                    <span className={[classes.counterText, "ms-2 me-4"].join(" ")}>
            <b>+</b>
          </span>
                    <span>
            <Text> Years Experience </Text>
          </span>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="d-flex justify-content-center align-items-center">
                    <CountUp className={classes.counterText} end={50}/>
                    <span className={[classes.counterText, "ms-2 me-4"].join(" ")}>
            <b>+</b>
          </span>
                    <span>
            <Text> Completed Projects </Text>
          </span>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="d-flex justify-content-center align-items-center">
                    <CountUp className={classes.counterText} end={30}/>
                    <span className={[classes.counterText, "ms-2 me-4"].join(" ")}>
            <b>+</b>
          </span>
                    <span>
            <Text> Happy Customers </Text>
          </span>
                </div>
            </div>

            <div className="col-sm-3">
                <div className="d-flex justify-content-center align-items-center">
                    <CountUp className={classes.counterText} end={5}/>
                    <span className={[classes.counterText, "ms-2 me-4"].join(" ")}>
            <b>+</b>
          </span>
                    <span>
            <Text> Honors and Awards </Text>
          </span>
                </div>
            </div>
        </div>
    );
}
