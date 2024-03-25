import Loader from "../common/loading/Loader";
import ProfileForm from "./ProfileForm";
import { useFetchUserData } from "./hooks/useFetchUserData";

const Profile = () => {
	const { userData } = useFetchUserData();

	if (!userData) return <Loader />;

	return <ProfileForm userData={userData} />;
};

export default Profile;
