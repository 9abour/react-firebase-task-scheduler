import { useContext } from "react";
import AuthContext from "../../context/authContext";
import Avatar from "../common/avatar/components/Avatar";
import Logo from "../common/image/components/Logo";

const Navbar = () => {
	const { user } = useContext(AuthContext);

	return (
		<nav className="w-full h-[60px] flex-jb-c px-4 bg-white">
			<Logo />

			{user ? (
				<Avatar name="M A" href="/profile" />
			) : (
				<ul className="flex gap-4">
					<li>
						<a href="login">Login</a>
					</li>
					<li>
						<a href="register">Register</a>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
