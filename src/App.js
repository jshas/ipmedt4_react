/* External imports */
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

/* Internal imports */
import Sidebar from "./components/layout/Sidebar";
import UserPage from "./pages/UserPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import ExportProducts from "./pages/ExportProducts";
import AddUsers from "./components/layout/AddUsers";
import AddProducts from "./components/layout/AddProducts";

/* CSS imports */
import "./App.css";

//sorteren op category
const App = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  

  const filterHandler = (clickedFilter) => {
    if (clickedFilter !== undefined) {
      if (activeFilters.includes(clickedFilter)) {
        const newArray = activeFilters.filter(
          (filter) => filter !== clickedFilter
        );
        setActiveFilters(newArray);
        // setActiveFilters(newArray);
      } else {
        setActiveFilters([...activeFilters, clickedFilter]);
      }
    }
  };

  useEffect(() => {
    console.log("Active Filter:", activeFilters);
  }, [activeFilters]);

  return (
    <Switch>
      <Route path="/" exact>
        <article className="pageLayout">
          <Sidebar
            activeFilters={activeFilters}
            filterHandler={filterHandler}
            className="u-grid-area-sidebar"
          />
          <ProductPage
            className="u-grid-area-content u-list-style"
            activeFilters={activeFilters}
          />
        </article>
      </Route>

      <Route path="/users" exact>
        <article className="pageLayout">
          <Sidebar
            activeFilters={activeFilters}
            filterHandler={filterHandler}
            className="u-grid-area-sidebar"
          />
          <UserPage className="Grid" />
        </article>
      </Route>

      <Route path="/users/add">
        <article className="pageLayout">
          <Sidebar
            activeFilters={activeFilters}
            filterHandler={filterHandler}
            className="u-grid-area-sidebar"
          />
          <AddUsers className="Grid" />
        </article>
      </Route>

      <Route path="/products" exact>
        <article className="pageLayout">
          <Sidebar
            activeFilters={activeFilters}
            filterHandler={filterHandler}
            className="u-grid-area-sidebar"
            style={{ zIndex: 1 }}
          />
          <ProductPage
            className="u-grid-area-content u-list-style"
            activeFilters={activeFilters}
          />
        </article>
      </Route>

      <Route path="/products/export">
        <article className="pageLayout">
          <Sidebar
            activeFilters={activeFilters}
            filterHandler={filterHandler}
            className="u-grid-area-sidebar"
          />
          <ExportProducts className="Grid" />
        </article>
      </Route>

      <Route path="/products/add">
        <article className="pageLayout">
          <Sidebar
            activeFilters={activeFilters}
            filterHandler={filterHandler}
            className="u-grid-area-sidebar"
          />
          <AddProducts className="Grid" />
        </article>
      </Route>

      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default App;
