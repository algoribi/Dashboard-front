import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { MaterialUIControllerProvider } from "./context";

ReactDOM.render(
  <MaterialUIControllerProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MaterialUIControllerProvider>,
  document.getElementById("root")
);