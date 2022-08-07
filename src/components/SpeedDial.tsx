import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
  MdPalette,
  MdDelete,
  MdDeleteForever,
  MdDeleteOutline,
} from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/App.store";
// Toggle theme
// Clear all
// Limpar receitas
// Limpar despesas

export default function SpeedDialTooltip() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const actions = [
    {
      icon: <MdPalette />,
      name: "Alterar tema",
      onClick() {
        dispatch(toggleTheme());
      },
    },
    {
      icon: <MdDelete />,
      name: "Apagar receitas",
      onClick() {
        // dispatch(toggleTheme());
      },
    },
    {
      icon: <MdDeleteOutline />,
      name: "Apagar despesas",
      onClick() {
        // dispatch(toggleTheme());
      },
    },
    {
      icon: <MdDeleteForever />,
      name: "Apagar tudo",
      onClick() {
        // dispatch(toggleTheme());
      },
    },
  ];

  return (
    <Box
      sx={{
        // height: 50,
        position: "fixed",
        bottom: 16,
        right: 16,
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
