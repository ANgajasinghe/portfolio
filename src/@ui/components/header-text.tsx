import {
  Theme,
  makeStyles,
  withStyles,
  createStyles,
} from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardHeader: {},
  })
);

export function CardHeaderText(props: any) {
  const classes = useStyles();
  return (
    <div className="mt-2">
      <h6 className={classes.cardHeader}>{props.children}</h6>
    </div>
  );
}
