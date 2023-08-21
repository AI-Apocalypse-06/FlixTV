import { ReactNode } from "react";
import { Checkbox } from "@mantine/core";

interface CheckboxProps {
  label: string | ReactNode;
}
const params = {
  color: "#2f80ed",
  radius: "md",
  styles: {
    body: {
      alignItems: "center"
    },
    label: {
      color: "#e0e0e0"
    },
    input: {
      backgroundColor: "#151f30",
      border: "none"
    },
    icon: {
      background: "none"
    }
  }
};

export default function MyCheckBox({ label }: CheckboxProps) {
  return <Checkbox label={label} {...params} />;
}
