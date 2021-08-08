import React from "react";
import {PageSecondaryHeader} from "@ui/components/header-text";
import MyServiceCard from "@ui/components/my-service-card";
import LandingAnimation from "@ui/components/landing-animation";
import {createClient} from "@supabase/supabase-js";
import {MyServiceModel} from "@core/model/my-services.model";

import HomeCountUp from "@ui/components/home-count-up";
import {SecondaryText} from "@ui/components/text";

export default function Home(props: { services: MyServiceModel[] }) {
    const backgroundImage = {
        backgroundImage: "url('./assets/img/background-img-02.jpg')",
        width: "100%",
        height: "300px",
    };

    return (
        <LandingAnimation title={'My Details'} description={'test'}>

            <h1>
                <b>
                    About me
                </b>
            </h1>

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


            <div className="mt-3 ms-1">
                <div className="row">
                    <HomeCountUp/>

                    <section className="mt-3">
                        <PageSecondaryHeader>My Services</PageSecondaryHeader>

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
        </LandingAnimation>
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


