import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore , appl} from "redux";
import  createLogger from 'redux-logger';
import loginReducer from "./redux/reducers/loginReducer";


const store = createStore(
  loginReducer,
  {},

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
