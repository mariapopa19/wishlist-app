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
    throw Error(e.message);
  }
};

export const singIn = async (email, password) => {
  try {
    const res = await axios.post(generateURL("login"), {
      email: email,
      password: password,
    });
    console.log(res);
    return res.data;
  } catch (e) {
    throw Error(e.message);
  }
};

export const singOut = async (token) => {
  try {
    const res = await axios.post(
      generateURL("logout"),
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
    throw Error(e);
  }
};

export const updateUser = async (
  token,
  avatar,
  user,
  pass,
  firstName,
  lastName,
  phone,
  city,
  country,
  detailedAddress
) => {
  try {
    const res = await axios.patch(
      generateURL("updateProfile"),
      {
        avatar: avatar,
        username: user,
        password: pass,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        city: city,
        country: country,
        completeAddress: detailedAddress,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (e) {
    return false;
  }
};

export const addList = async (token, name) => {
  try {
    const res = await axios.post(
      generateURL("wishlists"),
      {
        name: name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (e) {
    return false;
  }
};
