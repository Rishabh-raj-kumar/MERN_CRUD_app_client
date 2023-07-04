import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {

  const navigate = useNavigate();
  const [val, setVal] = useState({
    name: "",
    email: "",
    age: "",
    desc: "",
    address: "",
    phone: "",
  });

  const setData = (e) => {
    const { name, value } = e.target;
    setVal((preval) => {
      return {
        ...preval,
        //name tag of all input
        [name]: value,
      };
    });
  };

  const {id} = useParams("");
  console.log(id);

  const getData = async (e) => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("error");
      console.log("error");
    } else {
      setVal(data)
      console.log("data added");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateUser = async(e) =>{
    e.preventDefault();

    const {name,email,age,desc,address,phone} = val;

    const res2 = await fetch(`/updateuser/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        name,email,age,desc,address,phone
      })
    });

    const data2 = await res2.json();
    console.log(data2);

    if(res2.status === 404 || !data2){
      alert('fill the data');
    }else{
      alert('data added successfully')
      navigate('/');
    }
  }
  return (
    <>
      <Navbar />
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Register
          </h2>
          <form action="#">
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={val.name}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Name"
                  onChange={setData}
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="Email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="Email"
                  value={val.email}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Email"
                  onChange={setData}
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="Mobile"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  name="phone"
                  id="Mobile"
                  value={val.phone}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Phone Number"
                  onChange={setData}
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="Age"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="Age"
                  value={val.age}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Age"
                  onChange={setData}
                  required=""
                />
              </div>
              <div>
                <label
                  for="Address"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="Address"
                  value={val.address}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your HomeTown"
                  onChange={setData}
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  name="desc"
                  id="description"
                  rows="8"
                  value={val.desc}
                  onChange={setData}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 uppercase rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              onClick={updateUser}
            >
              Edit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Edit;
