import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationsList";

export const KandyKorner = (props) => {
  return (
    <>
      <LocationProvider>
        <Route>
          <LocationList />
        </Route>
      </LocationProvider>
    </>
  );
};
