import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            login: (email, password) => {
                // Имитация авторизации
                const user = {
                    id: '1',
                    email,
                    name: email.split('@')[0],
                    avatar: `https://ui-avatars.com/api/?background=e31b23&color=fff&name=${email.split('@')[0]}`,
                    joinedAt: new Date().toISOString()
                };
                set({ user, isAuthenticated: true });
                return true;
            },

            logout: () => {
                set({ user: null, isAuthenticated: false });
            },

            updateProfile: (updates) => {
                set((state) => ({
                    user: { ...state.user, ...updates }
                }));
            }
        }),
        {
            name: 'auth-storage'
        }
    )
);

export default useAuthStore;