import { ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import ResponsiveAppBar from "./ResponsiveNavbar";
import { darktheme } from "./theme";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/issues",
				element: <div>issues</div>,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={darktheme}>
		<RouterProvider router={router} />
	</ThemeProvider>
);

function RootLayout() {
	return (
		<>
			<ResponsiveAppBar />
			<Outlet />
		</>
	);
}
