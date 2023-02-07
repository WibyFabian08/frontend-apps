import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/css/tailwind.output.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import 'react-loading-skeleton/dist/skeleton.css'
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <SidebarProvider>
      <Suspense fallback={<ThemedSuspense />}>
        <Windmill usePreferences>
          <App />
        </Windmill>
      </Suspense>
    </SidebarProvider>
  </Provider>,
  document.getElementById("root")
);
