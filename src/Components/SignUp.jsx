import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const SignUp = () => {
    const navigate = useNavigate();

    const { createUser, setUser, userProfileUpdate } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        // const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        // console.log({name, photo, email, password});

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                const createTime = user?.metadata?.creationTime;

                const newUser = { name, email, createTime };

                fetch('https://coffee-store-server-two-wheat.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log("user inserted to mongodb", data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: "User added successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            // form.reset();
                            navigate("/");
                        }
                    })

                // form.reset();
                // console.log(user);

                // userProfileUpdate({ displayName: name, photoURL: photo })
                //     .then(() => {
                //         navigate("/");
                //     })
                //     .catch(error => {
                //         alert(error);
                //     })

            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="bg-base-300 mx-auto max-w-lg mt-4">
            <h2 className="font-semibold text-2xl text-center pt-8">Register your account</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo-url" className="input input-bordered" required />
                </div> */}
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
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-neutral rounded-none">Register</button>
                </div>
            </form>
            <p className="pb-8 text-center font-semibold">Already have an account? <Link to="/login" className="text-red-600">Login</Link></p>
        </div>
    );
};


export default SignUp;