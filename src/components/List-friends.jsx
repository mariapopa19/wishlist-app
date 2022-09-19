import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ListOfWish({ open, anchorEl, close, namePerson, userId, wish }) {
  
  const [userWishlists, setUserWishlists] = useState([]);


  const getUserLists = () => {
    const wishlists = wish.filter((elm) => elm.ownerId === userId);
    setUserWishlists(wishlists);
  }
  useEffect(() => {
    getUserLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const navigate = useNavigate();

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={close}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Stack
        divider={<Divider flexItem />}
        sx={{
          width: 300,
          // borderRadius: 15,
        }}
      >
        {userWishlists.map((element) => (
          <Button key='ceva' color="inherit" onClick={() => navigate(`list/${namePerson}/${element.name}/${element.id}`)} sx={{ p: 2 }}>
            {element.name} list
          </Button>
        ))}
      </Stack>
    </Popover>
  );
}
