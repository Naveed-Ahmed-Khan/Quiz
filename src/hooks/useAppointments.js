import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import useFetch from "./useFetch";

export default function useAppointments(check) {
  const { data } = useFetch("Users", check);
  console.log(data);
  const [appointmentData, setAppointmentData] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);

      const docs = [];
      try {
        if (data) {
          data.forEach(async (user) => {
            const userOrder = collection(
              db,
              "Users",
              `${user.id}`,
              "OrderData"
            );

            const order = await getDocs(userOrder);

            order.docs.forEach((doc) => {
              docs.push({
                ...doc.data(),
                userId: user.id,
                id: doc.id,
              });
            });
          });
          console.log(docs);
          setAppointmentData(docs);
          setIsloading(false);
        }
      } catch (error) {
        console.log(error);
        setErrorMessage(error.message);
        alert(error);
      }
    };

    fetchData();
  }, [check, data]);
  console.log(appointmentData);

  return { appointmentData, isloading, errorMessage };
}
