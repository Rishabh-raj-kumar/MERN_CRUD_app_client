import Axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";

export default function () {
  const [getUserData, setUserData] = useState([]);
  console.log(getUserData);

  const getData = async (e) => {
    const res = await fetch("/getdata", {
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
      setUserData(data)
      console.log("data added");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async(id) =>{
    const res3 = await fetch(`/deleteuser/${id}`,{
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json"
      },
    });

    const deleteData = await res3.json();
    console.log(deleteData);

    if(res3.status === 404 || !deleteData){
        alert('not deleted some internal error');
    }else{
      console.log('user deleted');
      getData();
    }
  }

  return (
    <>
      <Navbar />
      <div className="m-10">
        <div className="container">
          <div className="mt-2">
            <button className="p-2 bg-blue-700 rounded text-white">
              <Link to="/register">ADD DATA</Link>
            </button>
          </div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center text-sm font-light">
                    <thead class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                      <tr>
                        <th scope="col" class=" px-6 py-4">
                          {" "}
                          id{" "}
                        </th>
                        <th scope="col" class=" px-6 py-4">
                          {" "}
                          Username{" "}
                        </th>
                        <th scope="col" class=" px-6 py-4">
                          {" "}
                          Email{" "}
                        </th>
                        <th scope="col" class=" px-6 py-4">
                          {" "}
                          Job{" "}
                        </th>
                        <th scope="col" class=" px-6 py-4">
                          {" "}
                          Number{" "}
                        </th>
                        <th scope="col" class=" px-6 py-4">
                          {" "}EDITS
                        </th>
                        <th scope="col" class=" px-6 py-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        getUserData.map((elem,index) => { 
                          return (
                            <>
                        <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap  px-6 py-4 font-medium">
                            {index + 1}
                          </td>
                          <td class="whitespace-nowrap  px-6 py-4 font-medium">
                            {elem.name}
                          </td>
                          <td class="whitespace-nowrap  px-6 py-4">{elem.email}</td>
                          <td class="whitespace-nowrap  px-6 py-4">{elem.address}</td>
                          <td class="whitespace-nowrap  px-6 py-4">
                            {elem.phone}
                          </td>
                          <td class="whitespace-nowrap  px-6 py-4">
                            {/* going to the specific user page -> "view/:id" */}
                            <Link to={`view/${elem._id}`}>
                            <button className="m-1 p-2 text-white bg-green-700">
                              <i class="fa-solid fa-eye"></i>
                            </button></Link>
                            {/* going to the specific user edit page. -> "edit/:id" */}
                            <Link to={`edit/${elem._id}`}><button className="m-1 p-2 text-white bg-blue-700">
                              <i class="fa-solid fa-pencil"></i>
                            </button></Link>
                            <button className="m-1 p-2 text-white bg-red-700"
                            onClick={() => deleteUser(elem._id)}>
                              <i class="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                        </>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
