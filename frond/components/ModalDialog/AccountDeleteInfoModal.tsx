import React from "react";
import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
interface AccountDeleteInfoModalProps {
  reqMo: boolean;
}
const AccountDeleteInfoModal: React.FC<AccountDeleteInfoModalProps> = ({
  reqMo,
}) => {
  const [isOpen, setIsOpen] = useState(reqMo);
  console.log(reqMo);
  return <></>;
};
export default AccountDeleteInfoModal;
