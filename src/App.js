import React from "react";
import "./App.css";

import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search defaultCity="Lincoln" />
      <hr />
      <Footer />
    </div>
  );
}
