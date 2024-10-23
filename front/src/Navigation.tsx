import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { NavLink } from "react-router-dom";

function Navigation() {
	return (
		<AppBar position="static">
			<div className="flex flex-row items-center justify-between py-2 px-3">
				<div className="flex flex-row items-center gap-5">
					<NavLink to="/" className="pr-5">
						<div className="flex flex-row items-center gap-2">
							<span className="sm:text-2xl">Sachkov Tech</span>
						</div>
					</NavLink>
					<NavLink to="issues">Задачи</NavLink>
					<NavLink to="tic-tac">Крестики нолики</NavLink>
					<NavLink to="lessons">Уроки</NavLink>
					<NavLink to="problems">База проблем</NavLink>
				</div>
				<Button color="inherit">Login</Button>
			</div>
		</AppBar>
	);
}
export default Navigation;
