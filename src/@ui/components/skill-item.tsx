import Image from "next/image";
import {Avatar, Chip} from "@material-ui/core";
import React from "react";

export function SkillItem() {
    return (
        <div>
            {/*js*/}
            <Chip
                avatar={<Avatar alt=".net" src="/assets/img/javascript.png"/>}
                className="me-2 mt-2"
                size="small"
                label="Javascript"
            />
            <Chip
                avatar={<Avatar alt=".net" src="/assets/img/reactjs.png"/>}
                className="me-2 mt-2"
                size="small"
                label="React.js"
            />
            <Chip
                avatar={<Avatar alt=".net" src="/assets/img/angular.jpg"/>}
                className="me-2 mt-2"
                size="small"
                label="Angular"
            />
            <Chip
                avatar={<Avatar alt=".net" src="/assets/img/nextjs.png"/>}
                className="me-2 mt-2"
                size="small"
                label="Next.js"
            />
            <Chip
                avatar={<Avatar alt=".net" src="/assets/img/nodejs.png"/>}
                className="me-2 mt-2"
                size="small"
                label="Node.js"
            />
            <br/>
            
            {/*.net*/}
            <Chip
                avatar={<Avatar alt=".net" src="/assets/img/csharp.png"/>}
                className="me-2 mt-2"
                size="small"
                label="C#"
            />
            <Chip
                avatar={<Avatar alt=".net" src="/assets/img/net-logo.png"/>}
                className="me-2 mt-2"
                size="small"
                label=".NET"
            />
            
            
            <br/><br/>
            {/* Cloud */}
            <Chip
                avatar={<Avatar alt="azure" src="/assets/img/azure.png"/>}
                className="me-2 mt-2"
                size="small"
                label="Azure"
            />
            <Chip
                avatar={<Avatar alt="azure" src="/assets/img/azure-devops.png"/>}
                className="me-2 mt-2"
                size="small"
                label="Azure Devops"
            />
            <Chip
                avatar={<Avatar alt="azure" src="/assets/img/heroku.png"/>}
                className="me-2 mt-2"
                size="small"
                label="Heroku"
            />
        </div>
    )
}