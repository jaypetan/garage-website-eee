import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [matric, setMatric] = useState("");
    //const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();

    const loginAction = (responseData) => {
        setUser(responseData.name);
        setMatric(responseData.matricNumber);
        localStorage.setItem("site",responseData.matricNumber);
    }

    const logoutAction = () => {
        setUser(null);
        setMatric("");
        localStorage.removeItem("site");
        navigate("/login");
    }

    return (
    <AuthContext.Provider value = {{ matric, user, loginAction, logoutAction }}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}