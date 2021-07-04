import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "#20202A",
      },
    },
  },
  palette: {
    type: "dark",
    background: { default: "#20202A", paper: "#20202A" },
    primary: {
      light: "#191923",
      main: "#FFC107",
      dark: "#191923",
    },
  },
});
