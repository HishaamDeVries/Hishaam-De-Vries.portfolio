import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Footer />
    </React.Fragment>
  );
}

export default App;
