import { LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { NormalText } from "./content-text";

export default function ProgressBar(props: any) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
      
    for (let index = 0; index < props.value; index++) {
      setProgress(index);
    }

    return () => {};
  }, []);

  return (
    <p>
      <div className="d-flex justify-content-between mb-2">
        <NormalText> {props.name} </NormalText>
        <NormalText> {progress}% </NormalText>
      </div>
      <LinearProgress variant="determinate" value={progress} />
    </p>
  );
}
