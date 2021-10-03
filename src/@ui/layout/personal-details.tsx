import ProfileImage from "@ui/components/profile-image";
import {CardHeaderText} from "../components/header-text";
import {SecondaryText, Text} from "../components/text";
import React from "react";
import CheckIconContent from "@ui/components/check-icon-content";
import {Avatar, Chip} from "@material-ui/core";
import Typist from "react-text-typist";
import { SkillItem } from "@ui/components/skill-item";

export default function PersonalDetails() {
    return (
        <div
            className="card vh-100 shadow w-100 primary-bg-color"
            style={{maxWidth: "400px"}}
        >
            <div className="card secondary-bg-color">
                <div className="text-center mt-4 mb-4">
                    <ProfileImage/>
                    <CardHeaderText> AG. Nayanajith </CardHeaderText>
                    <div className="mt-2">

                        <div className="secondary-text"> Full-stack Web Developer </div>
                        {/* <Typist
                            sentences={[
                                "Full-stack Web Developer",
                                "Mobile Developer",
                                "Cloud Developer",
                                "I build cross-platform applications",
                            ]}
                            deletingSpeed={80}
                            className="secondary-text"
                            loop={true}
                        /> */}
                    </div>
                </div>
            </div>

            <div className="scroll-container hide-scrollbar mb-5">
                <div className="mt-3 ms-4 me-4 mb-5">
                    <div>
                        <div className="d-flex justify-content-between mb-2">
                            <Text> Residence: </Text>{" "}
                            <SecondaryText> Sri Lanka </SecondaryText>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <Text> City: </Text>{" "}
                            <SecondaryText> Colombo </SecondaryText>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <Text> Age: </Text>{" "}
                            <SecondaryText> 23 </SecondaryText>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                            <Text> Languages: </Text>{" "}
                            <SecondaryText> English/Sinhala </SecondaryText>
                        </div>
                    </div>

                    <hr/>

                    <CardHeaderText> Coding </CardHeaderText>

                    {/* <Chip
                        avatar={<Avatar alt=".net" src="/assets/img/net-logo.png"/>}
                        className="me-2 mt-2"
                        color="primary"
                        variant="outlined"
                        label=".NET"
                    />
                    <Chip
                        avatar={<Avatar alt=".net" src="/assets/img/javascript.png"/>}
                        className="me-2 mt-2"
                        color="primary"
                        variant="outlined"
                        label="Javascript"
                    />

                    <Chip
                        avatar={<Avatar alt=".net" src="/assets/img/csharp.png"/>}
                        className="me-2 mt-2"
                        color="primary"
                        variant="outlined"
                        label="C#"
                    />

                    <Chip
                        avatar={<Avatar alt=".net" src="/assets/img/nodejs.png"/>}
                        className="me-2 mt-2"
                        color="primary"
                        variant="outlined"
                        label="Node.js"
                    />
                    <Chip
                        avatar={<Avatar alt=".net" src="/assets/img/nextjs.png"/>}
                        className="me-2 mt-2"
                        color="primary"
                        variant="outlined"
                        label="Next.js"
                    />

                    <Chip
                        avatar={<Avatar alt=".net" src="/assets/img/reactjs.png"/>}
                        className="me-2 mt-2"
                        color="primary"
                        variant="outlined"
                        label="React"
                    />

                    <br/>

                    <Chip
                        avatar={<Avatar alt=".net" src="/assets/img/angular.jpg"/>}
                        className="me-2 mt-2"
                        color="primary"
                        variant="outlined"
                        label="Angular"
                    /> */}


                    <SkillItem/>

                    {/* <ProgressBar name=".NET" value={90} /> */}

                    <hr className="mt-4 mb-4"/>

                    <CardHeaderText> Knowledge </CardHeaderText>
                    <CheckIconContent text=" Bootstrap, Tailwind CSS "/>
                    <CheckIconContent text=" Angular Material, Material UI "/>
                    <CheckIconContent text=" Azure, AWS, Heroku "/>
                    <CheckIconContent text=" Azure Devops, GIT "/>
                    <CheckIconContent text=" Docker "/>
                </div>
            </div>
        </div>
    );
}
