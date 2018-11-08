const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  title: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
    padding: 20
  },
  smallWidth: {
    width: "1%"
  },
  centerAlign: {
    textAlign: "center"
  },
  rightAligh: {
    textAlign: "right"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

export default styles;
