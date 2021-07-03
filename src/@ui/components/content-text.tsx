import {
  Theme,
  makeStyles,
  withStyles,
  createStyles,
} from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    normalText: {
      fontSize: "14px",
      color: "#79797C",
    },
  })
);

export function NormalContentText(props: any) {
  const classes = useStyles();
  return <div className={classes.normalText}> {props.children} </div>;
}
