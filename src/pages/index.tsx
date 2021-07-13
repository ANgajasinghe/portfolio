import Head from "next/head";
import Image from "next/image";
import React from "react";
import Typist from "react-text-typist";
import { Avatar, Button } from "@material-ui/core";
import CountUp from "react-countup";
import classes from "../styles/Home.module.css";
import { NormalText, SecondaryText } from "@ui/components/content-text";
import { CardHeaderText } from "@ui/components/header-text";
import MyServiceCard from "@ui/components/my-service-card";
import { createClient } from "@supabase/supabase-js";
import { MyServiceModel } from "@core/model/my-services.model";
import BootstrapImg from "../../public/assets/img/bootstrap-no-background.png";
import KnowledgeIcon from "@ui/components/knowledge-icon";
import HomeCountUp from "@ui/components/home-count-up";

export default function Home(props: { services: MyServiceModel[] }) {
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

          <br />

          <KnowledgeIcon></KnowledgeIcon>
        </div>
      </div>

      <div className="mt-3 ms-1">
        <div className="row">
          <HomeCountUp></HomeCountUp>

          <section className="mt-3">
            <CardHeaderText>My Services</CardHeaderText>

            <div className="row pt-2">
              {props?.services.map((service) => (
                <div className="col-sm-4" key={service.id}>
                  <MyServiceCard
                    title={service.title}
                    description={service.description}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const supabaseUrl = "https://euuxswablrvfihzxbfml.supabase.co";
  const supabaseKey = process.env.SUPABASE_KEY ?? "";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const response = await supabase.from("my_services").select("*");

  return {
    props: {
      services: response.data,
    },
  };
}
