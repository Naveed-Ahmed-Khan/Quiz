import { collection, doc, updateDoc } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase-config";
import useFetch from "../hooks/useFetch";
import { useAuth } from "./AuthContext";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);
  const { data: quizData } = useFetch("quizes", check);
  const { data: newsData } = useFetch("news", check);
  const { data: usersData } = useFetch("users", check);
  const { data: categoriesData } = useFetch("categories", check);

  const [selectedItemToEdit, setSelectedItemToEdit] = useState(null);
  const [quiz, setQuiz] = useState([]);
  const [news, setNews] = useState([]);
  const [users, setUsers] = useState([]);
  const [newsCategories, setNewsCategories] = useState([]);
  const [quizCategories, setQuizCategories] = useState([]);

  useEffect(() => {
    const InitializeData = () => {
      setQuiz(quizData);
      setNews(newsData);
      setUsers(usersData);
      setNewsCategories(
        categoriesData.filter((category) => category.type === "news")
      );
      setQuizCategories(
        categoriesData.filter((category) => category.type === "quiz")
      );
    };

    InitializeData();
  }, [categoriesData, newsData, quizData, usersData]);

  const updateCheck = () => {
    setCheck(!check);
  };

  const selectItemToEdit = (value) => {
    setSelectedItemToEdit(value);
  };

  const exportValues = {
    loading,
    quiz,
    news,
    users,
    newsCategories,
    quizCategories,
    selectedItemToEdit,
    updateCheck,
    selectItemToEdit,
  };

  return (
    <StateContext.Provider value={exportValues}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
