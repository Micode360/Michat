const Error = (res, status, message) => {
  //return `${status} ${message}`

  res.status(status).json({ message });
};


