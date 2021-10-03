import {IconButton, Tooltip} from "@material-ui/core";
import React from "react";
import WebIcon from "@material-ui/icons/Web";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Link from "next/link";
import {useRouter} from "next/router";

export default function SideMenu() {
    const router = useRouter();

    return (
        <>
            <Link href="/" passHref={true}>
                <Tooltip title="HOME" aria-label="home">
                    <IconButton>
                        <i className={router.pathname == "/" ? "yellow las la-user" : "las la-user"}/>
                    </IconButton>
                </Tooltip>
            </Link>

            <br/>
            <Link href="/project" passHref={true}>
                <Tooltip title="PROJECTS" aria-label="projects">
                    <IconButton>
                        <i className={router.pathname == "/project" ? "yellow las la-briefcase" : "las la-briefcase"}/>
                    </IconButton>
                </Tooltip>
            </Link>
            <br/>
            <Tooltip title="BLOGS" aria-label="blogs">
                <IconButton>
                    <WebIcon/>
                </IconButton>
            </Tooltip>
            <br/>
            <Tooltip title="TUTORIALS" aria-label="tutorials">
                <IconButton>
                    <YouTubeIcon/>
                </IconButton>
            </Tooltip>
        </>
    );
}
