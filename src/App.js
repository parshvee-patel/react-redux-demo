import React from "react";
import LoginForm from "./components/LoginForm";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <LoginForm />
      </div>
    </Provider>
  );
}

export default App;
