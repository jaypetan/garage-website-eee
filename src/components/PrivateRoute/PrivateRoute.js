import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

// name: Title/Heading to appear on login page
// to: /... route to navigate to after login 
const PrivateRoute = ({name, to}) => {
    const auth = useAuth();
    if (!auth.user) return <Navigate to="/login" state={{name:name, to:to}}/>;
    return <Outlet />;
  };

export default PrivateRoute;