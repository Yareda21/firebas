"use client";
import Read from "@/components/Read";
import Write from "@/components/Write";
import { database } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  // sending data
  const addText = async () => {
    try {
      await addDoc(collection(database, "store"), {
        name: name,
        place: place,
      });
      setName("");
      setPlace("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className=" text-black"
      />
      <input
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        type="text"
        className=" text-black my-2"
      />
      <input type="button" onClick={addText} value="Submit" />
      <br />
      <hr />
      <Read />
    </div>
  );
};

export default page;
