import React, { useEffect, useState } from "react";
export const saveState = (store) =>
  window.localStorage.setItem("movie", JSON.stringify(store));


