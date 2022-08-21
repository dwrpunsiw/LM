import { useEffect } from "react";
import "./App.css";

import { useAppDispatch, appActionsCreator } from "./modules/index";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessBrowserInformation = () => {
      dispatch(appActionsCreator.getBrowserInformation());
    };
    accessBrowserInformation();
  }, [dispatch]);

  return <div className="App">Library Management</div>;
}

export default App;
