import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
 
    const [fullName, setFullName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [pharmacyName, setPharmacyName] = useState("");
    const [area, setArea] = useState(""); 
    const [address, setAddress] = useState("");
    const [licenseNo, setLicenseNo] = useState("");
    return (
        <div className="mx-auto p-4 sm:p-8 ">
            <div className="flex justify-center" >
             <div className="lg:w-1/2 w-[500px] lg:p-8 ">
                <img className="w-36 ml-8 mb-4" src="https://i.ibb.co/jHbLGND/Health-OS-Logo-H-480x76.png" alt="" />
          <h2 className="text-xl font-bold text-gray-700 ml-8">
             Welcome 
          </h2>
          <p className="ml-8 mt-4">Create New Account</p>
        
          <form  className="card-body">
           {/* Full Name */}
           <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none input input-bordered"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            {/* Mobile No */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mobile No
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none input input-bordered"
                type="tel"
                placeholder="Mobile No"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                required
              />
            </div>

            {/* Pharmacy Name */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pharmacy Name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none input input-bordered"
                type="text"
                placeholder="Pharmacy Name"
                value={pharmacyName}
                onChange={(e) => setPharmacyName(e.target.value)}
                required
              />
            </div>

            {/* Area (Drop-down) */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Area
              </label>
              <select
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none input input-bordered"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              >
                <option value="" disabled>Select an area</option>
                <option value="area1">Area 1</option>
                <option value="area2">Area 2</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Address */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <textarea
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none input input-bordered"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>
            </div>

            {/* License No */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                License No
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none input input-bordered"
                type="text"
                placeholder="License No"
                value={licenseNo}
                onChange={(e) => setLicenseNo(e.target.value)}
                required
              />
            </div>

            {/* Profile Photo (Upload Button) */}
                {/* Profile Photo (Upload Button) */}
                <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Profile Photo
              </label>
           
            </div>

            {/* License or NID Photo (Upload Button) */}   {/* License or NID Photo (Upload Button) */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                License or NID Photo
              </label>
              <input
                type="file"
                accept="image/*"
                // onChange={handleLicenseOrNIDPhotoChange}
              />
            </div>
            <div className="mt-8">
              <button  className="bg-[#31795a] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#00bf58]">
              Registration
              </button>
            </div>
       
          </form>
         
        </div>
        </div>
        </div>
    );
};

export default Registration;