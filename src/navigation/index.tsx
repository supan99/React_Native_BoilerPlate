import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Signup: undefined;
	Startup: undefined;
	Onboarding: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;