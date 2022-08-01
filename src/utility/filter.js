import { isThisMonth, isThisWeek } from "date-fns";

export const sortRows = (filtered, itemToSort, operator) => {
  if (operator === "descending") {
    const sorted = [...filtered].sort((a, b) =>
      a[itemToSort] > b[itemToSort] ? 1 : -1
    );
    return sorted;
  } else if (operator === "ascending") {
    const sorted = [...filtered].sort((a, b) =>
      a[itemToSort] < b[itemToSort] ? 1 : -1
    );
    return sorted;
  } else {
    return filtered;
  }
};

export const filterByAnalytics = (quiz, analytics) => {
  let filtered = [];
  if (analytics === "This week") {
    filtered = quiz.filter((item) => isThisWeek(item.date.toDate()));
    return filtered;
  } else if (analytics === "This month") {
    filtered = quiz.filter((item) => isThisMonth(item.date.toDate()));
    return filtered;
  } else {
    return quiz;
  }
};

export const filterBytype = (quiz, type) => {
  let filtered = [];

  if (type === "All") {
    return quiz;
  }
};

/* export const sortRows = (filteredQuizes, itemToSort, operator) => {
  operator === "descending" &&
    filteredQuizes.sort((a, b) =>
      a[itemToSort] > b[itemToSort] ? 1 : b[itemToSort] > a[itemToSort] ? -1 : 0
    );
  operator === "ascending" &&
    filteredQuizes.sort((a, b) =>
      a[itemToSort] > b[itemToSort] ? -1 : b[itemToSort] > a[itemToSort] ? 1 : 0
    );
  operator === null &&
    filteredQuizes.sort((a, b) =>
      a[itemToSort] > b[itemToSort] ? -1 : b[itemToSort] > a[itemToSort] ? 1 : 0
    );
}; */
