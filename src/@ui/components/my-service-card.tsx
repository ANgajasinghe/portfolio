import React from "react";
import { NormalText, SecondaryText } from "./content-text";

export default function MyServiceCard(props: {
  title: string;
  description: string;
}) {
  return (
    <div className="card mt-2 secondary-bg-color">
      <div className="card-body">
        <NormalText>{props?.title}</NormalText>
        <div className="mt-2">
          <SecondaryText>
            <small>{props.description}</small>
          </SecondaryText>
        </div>
      </div>
    </div>
  );
}
