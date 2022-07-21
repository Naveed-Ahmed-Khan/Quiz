import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const useFetchDoc = (collectionName, docId) => {
  const [isloading, setIsloading] = useState(true);
  const [docData, setDocData] = useState([]);
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    let isMounted = true;

    const fetchDoc = async (docId) => {
      try {
        const fetchedDocdata = await getDoc(doc(collectionRef, docId));

        if (isMounted === true) {
          setDocData(fetchedDocdata.data());
          setIsloading(false);
        }
      } catch (error) {
        console.log(error.message);
        // alert(error);
      }
    };
    fetchDoc(docId);

    return () => {
      isMounted = false;
    };
  }, [collectionRef, docId]);
  // console.log(docData);

  return { docData, isloading };
};

export default useFetchDoc;
