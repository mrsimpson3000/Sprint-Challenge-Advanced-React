import React from "react";
import * as rtl from "@testing-library/react";
import Navbar from "./Navbar";

test("test to see if Navbar renders properly", () => {
  rtl.render(<Navbar />);
});
