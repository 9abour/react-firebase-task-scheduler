import { useContext } from "react";
import AuthContext from "../../context/authContext";
import Avatar from "../common/avatar/components/Avatar";
import Logo from "../common/image/components/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { user, logout } = useContext(AuthContext);

	return (
		<nav className={`w-full h-[80px] px-4 md:px-12 flex-jb-c bg-[#f2f2fe]`}>
			<Logo />

			{user ? (
				<ul className="flex gap-2">
					<button
						type="button"
						onClick={logout}
						className="navbar__auth__button"
					>
						Logout
					</button>
					<Avatar name="M A" href="/profile" />
				</ul>
			) : (
				<ul className="flex gap-4">
					<li>
						<Link to="login" className="navbar__auth__button">
							Login
						</Link>
					</li>
					<li>
						<Link to="register" className="navbar__auth__button">
							Register
						</Link>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
