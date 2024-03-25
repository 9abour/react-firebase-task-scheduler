import { useContext } from "react";
import AuthContext from "../../context/authContext";
import Avatar from "../common/avatar/components/Avatar";
import Logo from "../common/image/components/Logo";

const Navbar = () => {
	const { user, logout } = useContext(AuthContext);

	return (
		<nav className={`w-full h-[80px] px-4 md:px-12 flex-jb-c bg-[#f2f2fe]`}>
			<Logo />

			{user ? (
				<ul className="flex gap-4">
					<Avatar name="M A" href="/profile" />
					<button
						type="button"
						onClick={logout}
						className="navbar__auth__button"
					>
						Logout
					</button>
				</ul>
			) : (
				<ul className="flex gap-4">
					<li>
						<a href="login" className="navbar__auth__button">
							Login
						</a>
					</li>
					<li>
						<a href="register" className="navbar__auth__button">
							Register
						</a>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
