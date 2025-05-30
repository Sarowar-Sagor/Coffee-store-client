import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const coffee = useLoaderData();
    const { name, availability, supplier, details, taste, category, photo } = coffee;
    return (
        <div className='flex justify-center bg-teal-100'>
            <div className="card shadow-sm w-[50%] bg-lime-200">
                <figure className="pt-5">
                    <img
                        src={photo}
                        alt="Coffee"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <p><span className='font-bold'>Availability: </span>{availability}</p>
                    <p><span className='font-bold'>Supplier: </span>{supplier}</p>
                    <p><span className='font-bold'>Details: </span>{details}</p>
                    <p><span className='font-bold'>Taste: </span>{taste}</p>
                    <p><span className='font-bold'>Category: </span>{category}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Details;