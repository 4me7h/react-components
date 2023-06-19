import React, { Fragment } from "react";

// import CountHooks from "./components/CountHooks";
// import Listas from "./components/Listas";
// import Formulario from "./components/Form";
// import CountClass from "./components/CountClass";
// import Crud from "./components/Crud";
// import Routes from "./components/Routes";
// import Sass from "./components/blogDev/Sass";
import AppiBasic from "./components/apisdata/AppiBasic"; 
import Alert from "./components/alerts/Alert";
import CreativeLab from "./components/creativelab/Home"

function App() {
  return (
    <Fragment>
      <Alert />
      <AppiBasic />
      <CreativeLab />
    </Fragment>
  );
}

export default App;
