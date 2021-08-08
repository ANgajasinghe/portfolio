import {LinearProgress} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {Text} from "./text";

export default function ProgressBar(props: any) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {

        for (let index = 0; index < props.value; index++) {
            setProgress(index);
        }

        return () => {
        };
    }, []);

    return (
        <p>
            <div className="d-flex justify-content-between mb-2">
                <Text> {props.name} </Text>
                <Text> {progress}% </Text>
            </div>
            <LinearProgress variant="determinate" value={progress}/>
        </p>
    );
}
