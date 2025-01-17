import Logo from "../assets/Logo.svg"
import { BsCart2 } from "react-icons/bs"
import { useState } from "react"
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ListItem } from "@mui/material";

import ScrollTo from "../service/scroll.js"

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />
        },
        {
            text: "Sobre Nós",
            icon: <InfoIcon />
        },
        {
            text: "Serviços",
            icon: <HomeWorkIcon />
        },
        {
            text: "Avaliação",
            icon: <CommentRoundedIcon />
        },
        {
            text: "Contato",
            icon: <PhoneRoundedIcon />
        },
        {
            text: "Carrinho",
            icon: <ShoppingCartRoundedIcon />
        },

    ];
    return (
        <>
            <nav>
                <div className="nav-logo">
                    <img src={Logo} alt="logo" />
                </div>

                <div className="nav-links">
                    <button className="button-nav" id="home" onClick={() => ScrollTo("home")}>Home</button>
                    <button className="button-nav" id ="sobre" onClick={() => ScrollTo("about")} >Sobre</button>
                    <button className="button-nav" id="servicos" onClick={() => ScrollTo("work")}>Serviços</button>
                    <button className="button-nav" id="avaliacao" onClick={() => ScrollTo("testemonial")}>Avaliação</button>
                    <button className="button-nav" id="contato" onClick={() => ScrollTo("contact")}>Contato</button>
                    <button className="button-nav">
                        <BsCart2 className="navbar-cart-icon" />
                    </button>

                    <button className="primary-button slide">
                        Reservar Agora
                    </button>
                </div>

                <div className="nav-bar-menu-container">
                    <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
                </div>

                <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={() => setOpenMenu(false)}
                        onKeyDown={() => setOpenMenu(false)}
                    >
                        <List>
                            {menuOptions.map((item) => (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </nav>
        </>
    );
}