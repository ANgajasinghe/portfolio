import {createStyles, makeStyles, Theme,} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        secondaryText: {
            fontSize: "14px",
            color: "#79797C",
            fontFamily: "Open Sans, sans-serif",
        },
        normalText: {
            fontSize: "14px",
            color: "#ffffff",
            fontWeight: "inherit",
            fontFamily: "Open Sans, sans-serif",
        },
    })
);

export function SecondaryText(props: any) {
    const classes = useStyles();
    return <div className={classes.secondaryText}> {props.children} </div>;
}

export function Text(props: any) {
    const classes = useStyles();
    return <div className={classes.normalText}> {props.children} </div>;
}
