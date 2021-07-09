import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeSection from "../sections/home-section";
import ProjectSection from "sections/project-section";
import TestimonialSection from "sections/testimonial-section";
import backgroundImage from "../../public/assets/img/background-img-01.jpeg";
import React from "react";
import Typist from "react-text-typist";
import { Button } from "@material-ui/core";
import CountUp from "react-countup";
import classes from "../styles/Home.module.css";
import { NormalText } from "@ui/components/content-text";

export default function Home() {
  const backgroundImage = {
    backgroundImage: "url('./assets/img/background-img-02.jpg')",
    width: "100%",
    height: "300px",
  };

  return (
    <div className="m-4">
      <div className="card secondary-bg-color">
        <div className="card-body m-5">
          <div></div>
          <h1>
            <b>
              Discover my Amazing <br /> Art Space!
            </b>
          </h1>

          <div
            className="mt-3 d-flex"
            style={{ fontFamily: "Roboto Mono, monospace", fontSize: "14px" }}
          >
            &lt;<span className="yellow">code</span>&gt;&nbsp;
            <Typist
              sentences={[
                "I build web systems",
                "I do process automation tasks",
                "I do IT consulting",
                "I build cross-platform applications",
              ]}
              deletingSpeed={80}
              loop={true}
            />
            &nbsp;&lt;/<span className="yellow">code</span>&gt;
          </div>

          <Button
            variant="contained"
            size="large"
            className="mt-4"
            color="primary"
          >
            <small>EXPLORE NOW</small>
          </Button>
        </div>
      </div>

      <div className="mt-3 ms-1">
        <div className="row">
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
      </div>
    </div>
  );
}
