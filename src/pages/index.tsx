import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeSection from "../sections/home-section";
import ProjectSection from "sections/project-section";
import TestimonialSection from "sections/testimonial-section";
import backgroundImage from "../../public/assets/img/background-img-01.jpeg";
import React from "react";
import Typist from "react-text-typist";

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
            style={{ fontFamily: "Roboto Mono, monospace" }}
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
        </div>
      </div>
    </div>
  );
}
