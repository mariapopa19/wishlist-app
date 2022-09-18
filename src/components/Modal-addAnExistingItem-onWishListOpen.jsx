import { Box, Modal } from "@mui/material";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllItems, getListDetails } from "../api";
import { GeneralContext } from "../context/GeneralContext";
import ItemCard from "./Card-addAnExistingItem-onWishListOpen";

export default function AddAnExistingItem({ open, close }) {
    const { logOut } = useContext(GeneralContext);
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const getItems = async () => {
        try {
            const res = await getAllItems(localStorage.getItem("token"));
            const listItems = await getListDetails(id);
            const namesOfItemsPage = []
            if (res) {
              const itemWishlists = listItems.itemWishlist;
              for(let item of itemWishlists) {
                namesOfItemsPage.push(item.item.name);
              }

              const filterItems = res.filter(elm => {
                return !namesOfItemsPage.includes(elm.name)
              })
              
              const secondFilterItems = filterItems.filter((value, index, self) => {
                return index === self.findIndex((t) => {
                  return t.id === value.id 
                })
              })

              setItems(secondFilterItems);
                
            }
          } catch (e) {
            if(e.message === "AxiosError: Request failed with status code 403") {
              logOut();
            }
          }
    }
    useEffect(()=> {
        getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <Modal open={open} onClose={close}>
      <Box
        sx={{
          display: 'flex',
          alignItems: "flex-start",
          flexWrap: 'wrap',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1000,
          height: 600,
          background: "white",
          borderRadius: 5,
          boxShadow: 24,
          
          // justifyContent: 'center',
        }}
      >
        {items.map(elm => 
            <ItemCard
            idList={id}
                idItem={elm.id}
                name={elm.name}
                details={elm.details}
                quantity={elm.quantity}
                link={elm.link}
                size={elm.size}
            />
        )}
      </Box>
    </Modal>
  );
}
