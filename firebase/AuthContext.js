import React from 'react';
import { signOut, onAuthStateChanged, getAuth } from 'firebase/auth';
import firebase_app from '../firebase/config';
import { useRouter } from 'next/router';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    }
    const router = useRouter();
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                router.push("/signin")
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, logOut }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};
