import React, { useState } from "react";
import { CardHeaderText } from "./header-text";
import FsLightbox from "fslightbox-react";
import { Button } from "@material-ui/core";
import { SecondaryText } from "./content-text";
import Image from "next/image";

export default function ProjectCard(props: any) {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="col-sm-6 mb-2">
      <div className="card secondary-bg-color">
        <div className="card-body">
          <div className="text-center">
            <CardHeaderText> Viral Pool - Admin Portal </CardHeaderText>
          </div>
        </div>

        <div className="row align-items-center" style={{ marginTop: "-50px" }}>
          <div className="col-5 ">
            <div className="ms-4 text-center">
              <Button
                variant="outlined"
                size="large"
                className="mt-4"
                color="primary"
                onClick={() => setToggler(!toggler)}
              >
                <small>EXPLORE NOW</small>
              </Button>
              <p className="d-flex">
                <ProjectCardTechImage></ProjectCardTechImage>
              </p>
            </div>
          </div>
          <div className="col-7">
            <div
              className="background-img"
              style={{
                backgroundImage:
                  "url(https://euuxswablrvfihzxbfml.supabase.co/storage/v1/object/public/images/viralpool-admin-portal.png)",
              }}
            ></div>
          </div>
        </div>

        <div className="card-body">
          <SecondaryText>
            Viralpool is a marketplace for social media influencers to monetize
            their social media platforms providing marketing services to
            corporate and retail clients. This platform was developed for the
            largest influencer marketing agency in Sri lanka, with web platforms
            for admin services, clients and the influencers and a mobile
            platform for the influencers.
          </SecondaryText>
        </div>

        <FsLightbox
          toggler={toggler}
          sources={[
            "https://i.imgur.com/fsyrScY.jpg",
            "https://www.youtube.com/watch?v=xshEZzpS4CQ",
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          ]}
        />

        {/* <div>
              <img src="https://euuxswablrvfihzxbfml.supabase.co/storage/v1/object/public/images/viralpool_admin.PNG" />
            </div>
            <div>
              <img src="https://euuxswablrvfihzxbfml.supabase.co/storage/v1/object/public/images/viralpool_admin.PNG" />
            </div>
            <div>
              <img src="https://euuxswablrvfihzxbfml.supabase.co/storage/v1/object/public/images/viralpool_admin.PNG" />
            </div> */}
      </div>
    </div>
  );
}

export function ProjectCardTechImage() {
  return (
    <>
      <div className="mt-2 me-2">
        <Image
          src="/assets/img/azure.png"
          width={15}
          height={15}
          alt="bs Logo"
        ></Image>
      </div>
      <div className="mt-2 me-2">
        <Image
          src="/assets/img/Angular_full_color_logo.svg.png"
          width={15}
          height={15}
          alt="bs Logo"
        ></Image>
      </div>
      <div className="mt-2 me-2">
        <Image
          src="/assets/img/net-logo.png"
          width={15}
          height={15}
          alt="bs Logo"
        ></Image>
      </div>
      <div className="mt-2 me-2">
        <Image
          src="/assets/img/heroku.png"
          width={15}
          height={15}
          alt="bs Logo"
        ></Image>
      </div>
    </>
  );
}
