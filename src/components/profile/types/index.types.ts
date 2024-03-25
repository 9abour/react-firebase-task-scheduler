export type ProfileUserType = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export type EditButtonType = {
	isEdit: boolean | null;
	toggleEdit: () => void;
};
