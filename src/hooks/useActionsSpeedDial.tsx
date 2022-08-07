import {
  MdPalette,
  MdDelete,
  MdDeleteForever,
  MdDeleteOutline,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTransactions, toggleTheme } from "../store/App.store";
import { useSnackbar } from "notistack";

export default function useActionsSpeedDial() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
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
        dispatch(removeTransactions("Debits"));
        enqueueSnackbar("Todas as receitas foram removidas.", {
          variant: "success",
        });
      },
    },
    {
      icon: <MdDeleteOutline />,
      name: "Apagar despesas",
      onClick() {
        dispatch(removeTransactions("Credits"));
        enqueueSnackbar("Todas as despesas foram removidas.", {
          variant: "success",
        });
      },
    },
    {
      icon: <MdDeleteForever />,
      name: "Apagar tudo",
      onClick() {
        dispatch(removeTransactions("All"));
        enqueueSnackbar("Todas as transações foram removidas.", {
          variant: "success",
        });
      },
    },
  ];

  return actions;
}
