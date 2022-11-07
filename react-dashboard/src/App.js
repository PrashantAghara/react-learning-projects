import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import "./App.css";
const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings></FiSettings>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Side Bar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">No Bar</div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element="Ecommerce" />
              <Route path="/ecommerce" element="Ecommerce" />
              {/* Pages */}
              <Route path="/orders" element="Ordwers" />
              <Route path="/customers" element="cust" />
              <Route path="/employees" element="emp" />
              {/* Apps */}
              <Route path="/kanban" element="k" />
              <Route path="/calender" element="c" />
              <Route path="/editor" element="e" />
              <Route path="/color-picker" element="cp" />
              {/*Charts */}
              <Route path="/line" element="line" />
              <Route path="/area" element="area" />
              <Route path="/bar" element="bar" />
              <Route path="/pie" element="pie" />
              <Route path="/financial" element="fin" />
              <Route path="/color-mapping" element="cm" />
              <Route path="/pyramid" element="pyra" />
              <Route path="/stacked" element="stack" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
