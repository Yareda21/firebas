"use client";
import { database } from "@/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Read = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [item, setItem] = useState([]);

  async function sendData() {
    try {
      await addDoc(collection(database, "NP"), {
        name: name,
        phone: phone,
      });
    } catch (error) {
      console.log(error);
    }
    setName("");
    setPhone("");
  }

  // lets read from the database
  useEffect(() => {
    const q = query(collection(database, "NP"));
    const data = onSnapshot(q, (querySnapshot) => {
      let items = [];
      querySnapshot.forEach((itemdoc) => {
        items.push({ ...itemdoc.data(), id: itemdoc.id });
      });

      setItem(items);
      return () => data;
    });
  }, []);
  console.log(item);

  const deleteItem = async (id) => {
    await deleteDoc(doc(database, "NP", id));
  };

  return (
    <div className="my-10">
      <form className="block">
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter Name:"
          className="block my-3 text-black"
        />
        <label htmlFor="phone">Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          name="phone"
          placeholder="+251 - "
          className="block my-3 text-black"
        />
        <input
          type="button"
          value="Submit"
          onClick={sendData}
          className="block mx-auto p-2 text-black bg-slate-500 cursor-pointer"
        />
      </form>

      <div>
        {item.map((eachItem, id) => {
          return (
            <div key={id}>
              {eachItem.name}
              <button onClick={deleteItem(eachItem.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Read;
