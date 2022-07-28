import { collection, doc, updateDoc } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase-config";
import useFetch from "../hooks/useFetch";
import { useAuth } from "./AuthContext";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);
  const { data: quizData } = useFetch("quizes", check);
  const { data: usersData } = useFetch("users", check);
  const { data: placesData } = useFetch("places", check);
  const { data: subscriptionData } = useFetch("subscriptions", check);

  const [showDetails, setShowDetails] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [quiz, setQuiz] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedUserInfo, setSelectedUserInfo] = useState([]);
  const [notification, setNotification] = useState(null);
  const [selectedItemToEdit, setSelectedItemToEdit] = useState(null);

  // console.log(selectedItemToEdit);

  useEffect(() => {
    const InitializeData = () => {
      setQuiz(quizData);
    };

    InitializeData();
  }, [quizData]);

  useEffect(() => {
    const setPlacesData = () => {
      if (currentUser?.email === "admin@gmail.com") {
        setLocations(placesData);
      } else {
        setLocations(
          placesData.filter((place) => place.businessId === currentUser?.uid)
        );
      }
    };

    setPlacesData();
  }, [currentUser?.email, currentUser?.uid, placesData]);

  useEffect(() => {
    const checkExpiration = async (activeSubscription) => {
      const dateToday = new Date().getTime();
      const expirationDate = activeSubscription?.expirationDate
        .toDate()
        .getTime();
      if (expirationDate < dateToday) {
        console.log("expired");
        try {
          await updateDoc(doc(collection(db, "users"), currentUser?.uid), {
            activeSubscription: null,
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("not expired");
        return;
      }
    };

    if (selectedUserInfo[0]?.activeSubscription) {
      checkExpiration(selectedUserInfo[0]?.activeSubscription);
    }
  }, [currentUser?.uid, selectedUserInfo]);

  useEffect(() => {
    const filterUsers = () => {
      setCustomers(usersData.filter((user) => user.type === "customer"));
    };
    const filterBusinesses = () => {
      let businesses = usersData.filter((user) => user.type === "business");
      setBusinesses(businesses);
      setSelectedUserInfo(
        businesses.filter(
          (business) => business.businessId === currentUser?.uid
        )
      );
    };
    setSubscriptions(subscriptionData);
    filterUsers();
    filterBusinesses();
  }, [usersData, subscriptionData, currentUser?.uid]);

  useEffect(() => {
    const setPlacesData = () => {
      if (currentUser?.email === "admin@gmail.com") {
        setLocations(placesData);
      } else {
        setLocations(
          placesData.filter((place) => place.businessId === currentUser?.uid)
        );
      }
    };

    setPlacesData();
  }, [currentUser?.email, currentUser?.uid, placesData]);

  // console.log(locations);

  const updateCheck = () => {
    setCheck(!check);
  };
  const updateNotification = (value) => {
    setNotification(value);
  };
  const updateShowDetails = (value) => {
    setShowDetails(value);
  };
  const updateSelectedPlace = (value) => {
    setSelectedPlace(value);
  };
  const selectItemToEdit = (value) => {
    setSelectedItemToEdit(value);
  };

  // console.log(customers);
  // console.log(businesses);
  // console.log(locations);

  const exportValues = {
    quiz,
    loading,
    subscriptions,
    showDetails,
    updateShowDetails,
    customers,
    businesses,
    locations,
    events,
    updateCheck,
    selectedPlace,
    selectedUserInfo,
    updateSelectedPlace,
    notification,
    updateNotification,
    selectedItemToEdit,
    selectItemToEdit,
  };

  return (
    <StateContext.Provider value={exportValues}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
