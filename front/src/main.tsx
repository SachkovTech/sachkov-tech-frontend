import { ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "./index.css";
import { darktheme } from "./theme";

createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={darktheme}>
		<RouterProvider router={router} />
	</ThemeProvider>
);
