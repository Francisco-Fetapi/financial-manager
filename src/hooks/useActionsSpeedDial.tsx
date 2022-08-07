import {
  MdPalette,
  MdDelete,
  MdDeleteForever,
  MdDeleteOutline,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeTransactions, toggleTheme } from "../store/App.store";
import { useSnackbar } from "notistack";
import { getAllCredits, getAllDebits } from "../store/App.selectors";
import { useEffect } from "react";

interface IAction {
  icon: JSX.Element;
  name: string;
  onClick(): void;
  show: boolean;
}

export default function useActionsSpeedDial() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const allCredits = useSelector(getAllCredits);
  const allDebits = useSelector(getAllDebits);

  const actions: IAction[] = [
    {
      icon: <MdPalette />,
      name: "Alterar tema",
      onClick() {
        dispatch(toggleTheme());
      },
      show: true,
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
      show: allCredits.length > 0 || allDebits.length > 0,
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
      show: allCredits.length > 0,
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
      show: allDebits.length > 0,
    },
  ];

  return actions;
}
