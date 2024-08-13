import { Link } from "react-router-dom";
const AuthLayout = (props) => {
    const { children, title, type } = props;

    return (
        <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
            Welcome, Please enter your detail</p>
        {children}
        <NavigationRoutes type={type}/>
        </div>
    </div>
    )
}

const NavigationRoutes = ({type}) => {
    if (type === "login") {
        return (
            <p className="text-center text-sm mt-5">
                Don't have an account? {" "}
                <Link to="/register" className="text-blue-600">
                    Register
                </Link>
            </p>
        );
    } else {    
        return (
            <p className="text-center text-sm mt-5">
                Already have an account? {" "}
                <Link to="/login" className="text-blue-600">
                    Login
                </Link>
            </p>
        )
    }
}


export default AuthLayout;