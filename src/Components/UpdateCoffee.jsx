import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const navigate = useNavigate();
    const { _id, name, availability, supplier, details, taste, category, photo } = coffee;

    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const availability = form.availability.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const category = form.category.value;

        const updateCoffee = { name, availability, supplier, details, taste, category, photo };
        // console.log(updateCoffee);

        fetch(`https://coffee-store-server-two-wheat.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Coffee added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                }
            })
    }

    return (
        <div className="bg-orange-100 mt-4">
            <h2 className="text-3xl text-orange-600 text-center font-bold pt-3">Update a coffee</h2>
            <div className="px-14 py-7">
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Coffee Name</span>
                            </label>
                            <input type="text" defaultValue={name} placeholder="Coffee Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control ml-8">
                            <label className="label">
                                <span className="label-text font-bold">Available Quantity</span>
                            </label>
                            <input type="text" defaultValue={availability} placeholder="Available Quantity" name="availability" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Supplier Name</span>
                            </label>
                            <input type="text" defaultValue={supplier} placeholder="supplier name" name="supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control ml-8">
                            <label className="label">
                                <span className="label-text font-bold">Taste</span>
                            </label>
                            <input type="text" defaultValue={taste} placeholder="taste" name="taste" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Category</span>
                            </label>
                            <input type="text" defaultValue={category} placeholder="category" name="category" className="input input-bordered" required />
                        </div>
                        <div className="form-control ml-8">
                            <label className="label">
                                <span className="label-text font-bold">Details</span>
                            </label>
                            <input type="text" defaultValue={details} name="details" placeholder="details" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <input type="text" defaultValue={photo} name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Update Coffee" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateCoffee;