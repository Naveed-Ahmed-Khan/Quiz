import React, { useState } from "react";
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const useUser = () => {
  const [imagePath, setImagePath] = useState("");
  const usersCollectionRef = collection(db, "Users");

  const deleteUser = async (userId) => {
    const userDoc = doc(usersCollectionRef, userId);
    deleteDoc(userDoc);
  };
  const updateUser = async (values, userId, imagePath) => {
    const data = doc(usersCollectionRef, userId);
    await updateDoc(data, {
      name: values.name,
      email: values.email,
      password: values.password,
      favourites: values.favourites,
      imagePath: imagePath,
    });
  };

  const uploadUserImage = async (appIcon, appId) => {
    if (appIcon == null) return;
    const appIconRef = ref(storage, `user_images/${appId}`);
    uploadBytes(appIconRef, appIcon);
    let path = await getDownloadURL(appIconRef);
    setImagePath(path);
    // console.log(imagePath);
  };

  return { deleteUser, updateUser, uploadUserImage, imagePath };
};

export default useUser;
