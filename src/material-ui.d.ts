declare interface Theme {
  palette: {
    background: {
      default: string
      paper: string
    }
    primary: {
      contrastText: string
      main: string
    }
    text: {
      primary: string
      secondary: string
    }
  }
}