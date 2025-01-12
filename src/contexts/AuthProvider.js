import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [matric, setMatric] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const loginAction = (responseData) => {
        const data = responseData.info;
        const jwt = responseData.token;
        setUser(data.name);
        setMatric(data.matricNumber);
        setToken(jwt);
    }

    const logoutAction = () => {
        setUser(null);
        setMatric("");
        setToken("");
        navigate("/");
    }

    return (
    <AuthContext.Provider value = {{ matric, user, token, loginAction, logoutAction }}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}