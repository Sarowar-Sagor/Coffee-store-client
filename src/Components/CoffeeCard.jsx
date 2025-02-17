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

                fetch(`http://localhost:3000/coffee/${id}`, {
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
        <div className="card card-side bg-orange-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body flex flex-row justify-between">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{details}</p>
                </div>

                <div className="join join-vertical space-y-3">
                    <button className="btn join-item">View</button>
                    <Link to={`/updatecoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-500">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;