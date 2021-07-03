import {
  Theme,
  makeStyles,
  withStyles,
  createStyles,
} from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardHeader: {
      fontFamily: "Montserrat, sans-serif",
    },
  })
);

export function CardHeaderText(props: any) {
  const classes = useStyles();
  return (
    <p className="mt-2">
      <small className={classes.cardHeader} style={{ fontWeight: "bold" }}>
        {props.children}
      </small>
    </p>
  );
}
