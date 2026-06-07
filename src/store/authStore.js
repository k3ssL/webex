import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Начальные демо-пользователи
const INITIAL_USERS = [
    {
        id: '1',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'password',
        phone: '+7 (999) 123-45-67',
        avatar: 'https://ui-avatars.com/api/?background=e31b23&color=fff&name=Admin',
        joinedAt: new Date('2024-01-01').toISOString(),
        role: 'admin'
    }
];

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,
            users: INITIAL_USERS, // Храним всех пользователей

            login: (email, password) => {
                const users = get().users;

                // Ищем пользователя с такими учетными данными
                const existingUser = users.find(
                    u => u.email === email && u.password === password
                );

                if (existingUser) {
                    // Убираем пароль из объекта пользователя
                    const { password: _, ...userWithoutPassword } = existingUser;
                    set({ user: userWithoutPassword, isAuthenticated: true });
                    return true;
                }

                // Если пользователь не найден, но раньше работала имитация
                // Можно оставить для обратной совместимости
                return false;
            },

            register: (userData) => {
                const users = get().users;

                // Проверяем, существует ли пользователь с таким email
                if (users.find(u => u.email === userData.email)) {
                    return false;
                }

                // Создаем нового пользователя
                const newUser = {
                    id: String(users.length + 1),
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                    phone: userData.phone || '',
                    avatar: `https://ui-avatars.com/api/?background=e31b23&color=fff&name=${encodeURIComponent(userData.name)}`,
                    joinedAt: new Date().toISOString(),
                    role: 'user'
                };

                // Обновляем список пользователей
                const updatedUsers = [...users, newUser];
                set({ users: updatedUsers });

                // Автоматически авторизуем после регистрации
                const { password: _, ...userWithoutPassword } = newUser;
                set({ user: userWithoutPassword, isAuthenticated: true });

                return true;
            },

            logout: () => {
                set({ user: null, isAuthenticated: false });
            },

            updateProfile: (updates) => {
                const currentUser = get().user;
                const users = get().users;

                // Обновляем пользователя в общем списке
                const updatedUsers = users.map(u => {
                    if (u.id === currentUser.id) {
                        return { ...u, ...updates };
                    }
                    return u;
                });

                // Обновляем текущего пользователя
                const updatedUser = { ...currentUser, ...updates };

                set({
                    user: updatedUser,
                    users: updatedUsers
                });
            },

            // Получить всех пользователей (для админа)
            getAllUsers: () => {
                const users = get().users;
                return users.map(({ password, ...user }) => user);
            },

            // Удалить пользователя (для админа)
            deleteUser: (userId) => {
                const users = get().users.filter(u => u.id !== userId);
                set({ users });
            }
        }),
        {
            name: 'auth-storage',
            // Указываем, какие поля сохранять в localStorage
            partialize: (state) => ({
                users: state.users,
                user: state.user,
                isAuthenticated: state.isAuthenticated
            })
        }
    )
);

export default useAuthStore;