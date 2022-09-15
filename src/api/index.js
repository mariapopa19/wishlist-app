import axios from "axios";

const generateURL = (path, queryVars) => {
  let fullEndpoint = `${process.env.REACT_APP_API_ENDPOINT}/${path}`;
  if (queryVars) {
    queryVars.forEach((elem, index) => {
      fullEndpoint += `${index === 0 ? "?" : "&"}${elem.name}=${elem.value}`;
    });
  }
  return fullEndpoint;
};

export const createUser = async (
  user,
  pass,
  email,
  firstName,
  lastName,
  phone,
  dob,
  city,
  country,
  detailedAddress
) => {
  try {
    const res = await axios.post(generateURL("register"), {
      username: user,
      password: pass,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      dob: dob,
      city: city,
      country: country,
      completeAddress: detailedAddress,
    });
    return res.data;
  } catch (e) {
    return false;
  }
};

export const singIn = async (email, password) => {
  try {
    const res = await axios.post(generateURL("login"), {
      email: email,
      password: password,
    });
    return res.data;
  } catch (e) {
    return false;
  }
};

export const singOut = async (token) => {
  try {
    const res = await axios.post(generateURL("logout"), {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (e) {
    return false;
  }
};

export const getUser = async (token) => {
  try {
    const res = await axios.get(generateURL("users"), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (e) {
    return false;
  }
};