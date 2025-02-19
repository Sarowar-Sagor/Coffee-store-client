import { use, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const { signUser, setUser } = useContext(AuthContext);
    // const [loginError, setLoginError] = useState({});
    // const location = useLocation();
    // console.log(location);
    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        signUser(email, password)
            .then(result => {
                const user = result.user;
                // setUser(user);
                // console.log(user);
                // navigate(location.state ? location.state : "/");

                const lastSignInTime = user?.metadata?.lastSignInTime;
                const loginInfo = {email, lastSignInTime};

                fetch('http://localhost:3000/users', {
                    method: "PATCH",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(loginInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })

            })
            .catch(error => {
                // setLoginError({ ...loginError, login: error.code });
                console.log(error);
            })
    }

    return (
        <div className="bg-base-300 max-w-lg mx-auto rounded-none">
            <h2 className="font-semibold text-2xl text-center pt-8">Login your account</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                {/* {
                    loginError.login && <p className="text-red-600">
                        {loginError.login}
                    </p>
                } */}
                <div className="form-control mt-6">
                    <button className="btn btn-neutral rounded-none">Login</button>
                </div>
            </form>
            <p className="pb-8 text-center font-semibold">New to this website? <Link to="/signup" className="text-red-600">Register</Link></p>
        </div>
    );
};

export default Login;