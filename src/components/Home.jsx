import Axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import {Link} from 'react-router-dom';

export default function () {
  return (
    <>
      <Navbar />
      <div className="m-10">
        <div className="container">
          <div className="mt-2">
            <button className="p-2 bg-blue-700 rounded text-white">
            <Link to="/register">ADD DATA</Link></button>
          </div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center text-sm font-light">
                    <thead class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                      <tr>
                        <th scope="col" class=" px-6 py-4"> id </th>
                        <th scope="col" class=" px-6 py-4"> Username </th>
                        <th scope="col" class=" px-6 py-4"> Email </th>
                        <th scope="col" class=" px-6 py-4"> Job </th>
                        <th scope="col" class=" px-6 py-4"> Number </th>
                        <th scope="col" class=" px-6 py-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap  px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap  px-6 py-4">Mark</td>
                        <td class="whitespace-nowrap  px-6 py-4">Otto@gmail.com</td>
                        <td class="whitespace-nowrap  px-6 py-4">fraky</td>
                        <td class="whitespace-nowrap  px-6 py-4">9887766544</td>
                        <td class="whitespace-nowrap  px-6 py-4">
                          <button className="m-1 p-2 text-white bg-green-700"><i class="fa-solid fa-eye"></i>
                          </button>
                          <button className="m-1 p-2 text-white bg-blue-700"><i class="fa-solid fa-pencil"></i></button>
                          <button className="m-1 p-2 text-white bg-red-700"><i class="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
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
