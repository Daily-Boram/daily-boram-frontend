import theme from "./theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global";

const StyleProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
