import Recact from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./component/App"
import store from "./store"

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
