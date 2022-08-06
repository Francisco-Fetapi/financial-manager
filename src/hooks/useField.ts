import React, { useState } from "react";

interface FieldProps {
  value?: string;
  error?: boolean;
  helperText?: string;
}

type handleChangeFunc = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | undefined>
) => void;

export default function useField(): [FieldProps, handleChangeFunc] {
  const [field, setField] = useState<FieldProps>({
    value: "",
    error: false,
    helperText: "",
  });
  const handleChange: handleChangeFunc = (e) => {
    const value = e?.target.value;
    if (!value || value === "0") {
      setField({ value: "", error: true, helperText: "Campo inválido" });
      return;
    }
    setField({ value, error: false, helperText: "" });
  };

  return [field, handleChange];
}
