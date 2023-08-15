import { Dispatch, SetStateAction } from "react";

export type TAboveFooter = {
  }

  export type TFooter = {
    handleOpenDialog: (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => void;
    handleOpenDialog2: (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => void;
  }

  export type THeader = {
    toggleMenu: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    isOpen: boolean;
    handleIconClick: () => void;
  }

  export type TPopup1 = {
    isOpenDialog: boolean;
    setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
  }
  export type TPopup2 = {
    isOpenDialog2: boolean;
    setIsOpenDialog2: Dispatch<SetStateAction<boolean>>;
  }