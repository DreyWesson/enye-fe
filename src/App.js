import { useEffect, useState } from "react";
import "./App.css";
import Customers from "./components/Customers";
import { Header } from "./components/Header";
import Loading from "./components/Loading";

function App() {
  const ListLoading = Loading(Customers);
  const [appState, setAppState] = useState({
    loading: false,
    records: null,
  });

  useEffect(() => {
    setAppState({ loading: true });

    fetch(`https://api.enye.tech/v1/challenge/records`)
      .then((res) => res.json())
      .then((records) => setAppState({ loading: false, records: records }));
  }, [setAppState]);

  return (
    <div className="App">
      <Header />
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} records={appState.records} />
      </div>
    </div>
  );
}

export default App;
