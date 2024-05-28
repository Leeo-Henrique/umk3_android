import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import Characters from "../screens/characters";
import InterfaceCodes from "../screens/interfaceCodes";
import Home from "../screens/home";

const MyRoutes = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/characters" exact element={<Characters />} />
        <Route path="/interface" exact element={<InterfaceCodes />} />
      </Routes>
    </NativeRouter>
  );
};

export default MyRoutes;
