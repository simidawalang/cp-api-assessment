import React, { useEffect } from "react";
import "./App.scss";
import { ApplicationForm } from "./components";

function App() {
  const fetchData = async () => {
    const res = await fetch(
      "http://127.0.0.1:4010/api/843.2386679768505/programs/qui/application-form",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/x-yaml",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ApplicationForm />
    </div>
  );
}

export default App;
