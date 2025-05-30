import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, availability, supplier, details, taste, category, photo } = coffee;

    const handleDelete = id => {
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

                fetch(`https://coffee-store-server-two-wheat.vercel.app/coffee/${id}`, {
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

                            const remaining = coffees.filter(coffee => coffee._id !== id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-orange-100 shadow-xl pl-5 py-4">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body flex flex-row justify-between">
                <div className="space-y-3">
                    <h2 className="card-title">{name}</h2>
                    <p> <span className="font-bold">Supplier:</span> {supplier}</p>
                    <p><span className="font-bold">Taste:</span> {taste}</p>
                    <p>{details}</p>
                </div>

                <div className="join join-vertical space-y-3">
                    <Link to={`/details/${_id}`}>
                        <button className="btn join-item">View</button>
                    </Link>

                    <Link to={`/updatecoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item hover:text-black text-white bg-red-500">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;