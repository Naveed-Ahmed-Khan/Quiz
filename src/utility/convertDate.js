const convertDate = (timeStamp) => {
  const dateObject = timeStamp.toDate();
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  // const hour = date.getHours();
  // const minute = date.getMinutes();
  // const second = date.getSeconds();
  // const time = `${month}/${day}/${year} ${hour}:${minute}:${second}`;
  const date = `${month}/${day}/${year}`;
  return date;
};

export default convertDate;
