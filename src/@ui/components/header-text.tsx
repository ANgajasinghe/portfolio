import {createStyles, makeStyles, Theme,} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
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

export function PageSecondaryHeader(props: any) {
    return (
        <div className="mt-2">
            <h4 style={{fontWeight: 600}}>{props.children}</h4>
        </div>
    );
}
