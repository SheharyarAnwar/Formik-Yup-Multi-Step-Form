import {
  createStyles,
  makeStyles,
  StepIconProps,
  Theme,
  withStyles,
} from "@material-ui/core";
import StepConnector from "@material-ui/core/StepConnector";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";
import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    formElements: {
      width: "100%",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      "& *": {
        margin: "1%",
      },
    },
    actions: {
      display: "flex",
      justifyContent: "center",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },

  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props: StepIconProps) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}
export default useStyles;
export { QontoConnector, useQontoStepIconStyles, QontoStepIcon };
