import {create} from 'zustand';

type User = {
    email: string;
    accountVerified: boolean;
    addressVerified: boolean;
    emailVerified: boolean;
    firstName: string;
    id: string;
    lastName: string;
    phone: string;
    profilePicture: string;
    roles: Array<string>;
    token: string;
    setAll: (data: Partial<User>) => void;
}

export const useDetails = create<User>((set) => ({
email: '',
    accountVerified: false,
    addressVerified: false,
    emailVerified: false,
    firstName: '',
    lastName: '',
    id: '',
    phone: '',
    profilePicture: '',
    roles: [],
    token: '',
    setAll: (data: Partial<User>) => set((state) => ({ ...state, ...data}))
}))