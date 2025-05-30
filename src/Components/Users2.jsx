import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Users2 = () => {

    const { isPending, isError, error, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://coffee-store-server-two-wheat.vercel.app/users')
            return res.json();
        }
    })

    if (isPending) {
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
        </div>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    const handleUserDelete = id => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-two-wheat.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2>Total users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last logged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className="hover">
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td>
                                    <button onClick={() => handleUserDelete(user._id)} className='btn btn-ghost'>Delete</button>
                                    <button className='btn btn-ghost'>Edit</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Users2;