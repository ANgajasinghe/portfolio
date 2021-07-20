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
        <div className="card-body mb-4">
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
            {/* <div
              className="background-img"
              style={{
                backgroundImage:
                  "url(https://euuxswablrvfihzxbfml.supabase.co/storage/v1/object/public/images/viralpool-admin-portal.png)",
              }}
            ></div> */}

            <Image
              src="https://euuxswablrvfihzxbfml.supabase.co/storage/v1/object/public/images/viralpool-admin-portal.png"
              alt="Picture of the viralpool"
              className="background-img"
              blurDataURL="data:image/jpg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAASABgDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAgJCgYH/8QAJxAAAQUBAAIBBAIDAQAAAAAAAwECBAUGBwAIEQkSExQVMRYYJTL/xAAXAQADAQAAAAAAAAAAAAAAAAAEBQYH/8QAKhEAAwABAgMFCQAAAAAAAAAAAQIDBAARBRITBjNyc7EUISIkQkNRssH/2gAMAwEAAhEDEQA/AKW+C8s93vaXq1bG41yN3U+fR+aUWrk0+FrGzdcDPTayPGj6C3A+UaWCazQMLCd9z4tUaKUZFEE5EYOfvoP6wV3uh2bQcdW+jc9uMzSZ+xLZmgzOgfmtNDro2PjVEulyDm2FHEhWMlXW2lsyJS1j2Miy3Cecb0pbxXsp3TgPNuS2fP8AoNvy+p2VJL5tYbet1Gtzv8a11lMlfrapmOmRbK4yTTxLpo4oRq6vPUDmi/JIGiOt14T9Q33d59iq6FyfC/T56rZc4y9JHl6HDy8yzWWOOkn/AIxpt5+pFo93oDXKoqFsrXWOkyLxG2kxHTWCRFVMvtA2RxJevhyxGMhwm8S/tUSJwGS2clyYUWeQLiYgyfL0jzIKo70qzxUoMWmNl0LBnrlxtFaBwygzlj1Ioy/lVMQikMDR9yFlP7Heq3+s3Uthyo95B0snGWI6mRe10WTBhTyvgQpz3giSyFOBA/uNC5rykVSic5r1arV8ecz3b2Z2nZ87Xb7rfJMpwTY02Tubfd0HNlu7L/qo+wSsnzbnQ3F5HuySWxoLXPAR6RRyVZIG9RoTx5V4HHFxcLEnnE2yhGYtWfS5K1VVWlAA4ADuCwA93KQBsNWsO02Hi4+KuVuavCVGZOlsSQoYlUcBGLKxMyAyH4SoI21lq7Gc7uE44LjFcEN9JUInEeoxKtvrCKomK77RqrzFev2ony8pHf29yr719MBV/wA07eT5X8ichhNR/wAr96Nd0XGI5Ed/6RHIiIqfPwvwnz/SePHiQ9zl+bT0TWTL30fBP1bWiDusmTJveoVsiQc9cfC7gR4BikLCMOMHmbo4yxXucAjI7pUlwWPGrRLIOo0apifc8ePEzfT4R/dGW+z5S/vr/9k="
              placeholder="blur"
              width={500}
              height={500}
            />
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
