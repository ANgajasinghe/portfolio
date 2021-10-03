import React from "react";
import {SecondaryText, Text} from "./text";

export default function MyServiceCard(props: {
    title: string;
    description: string;
}) {
    return (
        <div className="card mt-2 secondary-bg-color">
            <div className="card-body">
                <Text>{props?.title}</Text>
                <div className="mt-2">
                    <SecondaryText>
                        <small>{props.description}</small>
                    </SecondaryText>
                </div>
            </div>
        </div>
    );
}
