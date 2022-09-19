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

export const getList = async (name) => {
  try {
    const res = await axios.get(generateURL(`wishlists/name/${name}`));
    return res.data;
  } catch (e) {
    return false;
  }
};

export const getListDetails = async (id) => {
  try {
    const res = await axios.get(generateURL(`wishlists/${id}`));
    return res.data;
  } catch (e) {
    return false;
  }
};

export const addItemToWish = async (idWish, idItem) => {
  try {
    const res = await axios.post(generateURL("itemsWishlists"), {
      wishlistId: idWish,
      itemId: idItem,
    });
    return res.data;
  } catch (e) {
    return false;
  }
};

export const updateItemBought = async (idItemWish) => {
  try {
    const res = await axios.patch(generateURL(`itemsWishlists/${idItemWish}`), {
      isBought: true,
    });
    return res.data;
  } catch (e) {
    return false;
  }
};

export const addItem = async (name, details, link, size, quantity) => {
  try {
    const res = await axios.post(generateURL("items"), {
      name: name,
      link: link,
      details: details,
      size: size,
      quantity: quantity,
    });
    return res.data;
  } catch (e) {
    return false;
  }
};

export const getAllItems = async (token) => {
  try {
    const res = await axios.get(generateURL("users/items/wishlists"), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (e) {
    throw Error(e);
  }
};

export const getItemToWish = async (wishId, itemId) => {
  try {
    const res = await axios.get(
      generateURL(`itemsWishlists/${wishId}/${itemId}`)
    );
    return res.data;
  } catch (e) {
    throw Error(e);
  }
};

export const getPeopleWhoCanSeeMyList = async (id) => {
  try {
    const res = await axios.get(generateURL(`${id}/all/users`));
    return res.data;
  } catch (e) {
    return false;
  }
};

export const getUserGroupsOwner = async (token) => {
  try {
    const res = await axios.get(generateURL("users/groups/owner"), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    return false;
  }
};
export const getUserGroupsMember = async (token) => {
  try {
    const res = await axios.get(generateURL("users/groups/member"), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    return false;
  }
};

export const createMyGroup = async (token, name) => {
  try {
    const res = await axios.post(
      generateURL("usersGroups/create/owner"),
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

export const getGroupDetails = async (id) => {
  try {
    const res = await axios.get(generateURL(`groups/${id}/users/wishlists`));
    return res.data;
  } catch (e) {
    return false;
  }
};

export const addListToGroup = async (idList, idGroup) => {
  try {
    const res = await axios.post(generateURL('wishlistsGroups'),{
      wishlistId: idList,
      groupId: idGroup
    });
    return res.data;
  } catch (e) {
    return false;
  }
};

export const addPeopleToGroup = async (username, idGroup) => {
  try {
    const res = await axios.post(generateURL('usersGroups'),{
      username: username,
      groupId: idGroup
    });
    return res.data;
  } catch (e) {
    return false;
  }
};

export const getAllUsers = async (token) => {
  try {
    const res = await axios.get(
      generateURL("users/all"),
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

export const deleteUser = async (token) => {
  try {
    const res = await axios.delete(
      generateURL("deleteUser"),
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

export const getNotifications = async (token) => {
  try {
    const res = await axios.get(
      generateURL("notifications"),
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