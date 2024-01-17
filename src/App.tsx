import "@mantine/core/styles.css";
import "./assets/scss/styles.scss";
import { defaultCommonTheme } from "gabia-design-system";
import { MantineProvider, mergeThemeOverrides } from "@mantine/core";
import { Router } from "./Router";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
//import commonTheme from "./theme/common.theme";
//import 'gabia-design-system/style.css';

//const theme = mergeThemeOverrides(defaultCommonTheme, commonTheme);

export default function App() {
  return (
    <MantineProvider>
      <div id="wrap">
        <Header />
        <div id="container">
          <Sidebar />
          <div id="contents">
            <Router />
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
