import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { FooterApp } from "./components/Footer";
import { fetchSearchMovie } from "./services/index";

import { HomePage } from "./components/Home";
import { MovieDetail } from "./components/MovieDetail";
import { Navbar } from "./components/Navbar";

function App() {
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async (movieTitle) => {
    setSearchResult(await fetchSearchMovie(movieTitle));
  };
  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Switch>
        <Route
          path="/"
          render={() => (
            <HomePage
              searchResult={searchResult}
              onReset={() => setSearchResult([])}
            />
          )}
          exact
        />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
      <FooterApp />
    </div>
  );
}

export default App;
