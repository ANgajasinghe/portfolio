import ProjectCard from "@ui/components/project-card";
import {createClient} from "@supabase/supabase-js";
import {MyProject} from "@core/model/my-project.model";
import LandingAnimation from "../../@ui/components/landing-animation";
import React from "react";

export default function Project(props: { projects: MyProject[] }) {
    return (
        <LandingAnimation title={'Project Details'} description={'test'}>
            <div className="row">
                {props.projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </LandingAnimation>
    );
}

export async function getStaticProps() {
    const supabaseUrl = "https://euuxswablrvfihzxbfml.supabase.co";
    const supabaseKey = process.env.SUPABASE_KEY ?? "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    const response = await supabase.from("my_projects").select("*");

    if (!response.data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            projects: response.data,
        },
        revalidate: 10,
    };
}
