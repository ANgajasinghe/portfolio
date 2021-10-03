import React from "react";
import { CardHeaderText, PageSecondaryHeader } from "@ui/components/header-text";
import MyServiceCard from "@ui/components/my-service-card";
import LandingAnimation from "@ui/components/landing-animation";
import { createClient } from "@supabase/supabase-js";
import { MyServiceModel } from "@core/model/my-services.model";
import Link from "next/link";

import HomeCountUp from "@ui/components/home-count-up";
import { SecondaryText, Text } from "@ui/components/text";
import { Avatar, Button, Chip } from "@material-ui/core";
import { SkillItem } from "../@ui/components/skill-item";

export default function Home(props: { services: MyServiceModel[] }) {
    const backgroundImage = {
        backgroundImage: "url('./assets/img/background-img-02.jpg')",
        width: "100%",
        height: "300px",
    };

    return (
        <LandingAnimation title={'My Details'} description={'test'}>

            <div className="d-flex justify-content-between align-items-center">
                <h1>
                    <b>
                        About me
                    </b>
                </h1>

                <Link href="/project" passHref={true}>
                    <Button style={{ color: '#F59E0B' }} variant="outlined">Explore Latest Works</Button>
                </Link>
            </div>

           

            <SecondaryText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero
                quasi! Veniam quaerat tenetur pariatur doloribus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero
                quasi! Veniam quaerat tenetur pariatur doloribus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero
                quasi! Veniam quaerat tenetur pariatur doloribus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero
                quasi! Veniam quaerat tenetur pariatur doloribus.
            </SecondaryText>

            <div className="mt-4 ms-1">
                <div className="row">
                    <HomeCountUp />
                </div>
            </div>

            <div className="mt-5">
                <div className="row g-5">

                    <div className="col-sm-6">

                        <div className="d-flex justify-content-between align-items-center">
                            <PageSecondaryHeader> My Expertise </PageSecondaryHeader>
                        </div>

                        <div className="row pt-2">
                            {props?.services.map((service) => (
                                <div className="col-sm-12" key={service.id}>
                                    <MyServiceCard
                                        title={service.title}
                                        description={service.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="col-sm-6">
                        <div>
                            <PageSecondaryHeader> Work Experience </PageSecondaryHeader>



                            <div className="mt-4">

                                <div>
                                    <CardHeaderText> Software Engineer at cube360 (2020 - Present)  </CardHeaderText>
                                    <div className="ms-3">
                                        <SecondaryText> <i>- Comments Management Tool </i> </SecondaryText>
                                        <SecondaryText> <i>- My text book  </i> </SecondaryText>
                                        <SecondaryText> <i>- My text book AR mobile app  </i> </SecondaryText>
                                        <SecondaryText> <i>- ViralPool : Social Media Agency Management Tool  </i> </SecondaryText>
                                        <SecondaryText> <i>- Logistic One : Warehouse Management Tool  </i> </SecondaryText>
                                        <SecondaryText> <i>- HMS : Hotel management system  </i> </SecondaryText>

                                    </div>
                                </div>

                                <div className="mt-4">
                                    <CardHeaderText> Software Engineer at DMSSWE (2019 - 2020)  </CardHeaderText>
                                    <div className="ms-3">
                                        <SecondaryText> <i>- IMAGO cheque clearing system </i> </SecondaryText>
                                        <SecondaryText> <i>- CEFTS  </i> </SecondaryText>
                                        <SecondaryText> <i>- Invoice Reconciliation System  </i> </SecondaryText>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='mt-5'>
                            <PageSecondaryHeader> Education</PageSecondaryHeader>
                            <div className="mt-4">
                                <div>
                                    <CardHeaderText> BSc (Hons) in Information Technology</CardHeaderText>
                                    <div className="ms-3">
                                        <SecondaryText> <i>- Specialising in Information Technology</i> </SecondaryText>
                                        <SecondaryText> <i>- 2018-2021</i> </SecondaryText>
                                    </div>
                                </div>

                                <div className='mt-3'>
                                    <CardHeaderText> G.C.E (A/L) Examinations </CardHeaderText>
                                    <div className="ms-3">
                                        <SecondaryText> <i>- Technology Stream </i> </SecondaryText>
                                        <SecondaryText> <i>- 2014-2017</i> </SecondaryText>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </LandingAnimation>
    );
}

export async function getStaticProps(context: any) {
    const supabaseUrl = "https://euuxswablrvfihzxbfml.supabase.co";
    const supabaseKey = process.env.SUPABASE_KEY ?? "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    const response = await supabase.from("my_services").select("*");

    return {
        props: {
            services: response.data,
        },
        revalidate: 10,
    };
}


