import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

function Details() {

  const [getUserData, setUserData] = useState([]);
  console.log(getUserData)
  //we will fetch id of an individual user from parameters.
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
      setUserData(data)
      console.log("data added");
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
          <div>
            <h1>{getUserData.name}</h1>
            <p>{getUserData.address}</p>
            <p>{getUserData.desc}</p>
            <p>{getUserData.age}</p>
            <p>{getUserData.phone}</p>
            <p>{getUserData.email}</p>
          </div>
    </div>
  );
}

export default Details;
