import React from "react";
import { toast } from "react-toastify";

import { ToastMessage } from "../components/UI/ToastMessage/index";

export const errorToaster = (msg: string) => {
    let message = msg || "Something went wrong!";
    toast(<ToastMessage text={message} icon="close" />,
        {
            containerId: "error",
            toastId: 1
        });
};

const customToaster = () => {
    let toastId: any = null;
    return (text : string) => {
        if (!toast.isActive(toastId)) {
            toastId = toast(<ToastMessage text={text} />, { containerId: "success" });
        }
    };
};

export const toaster = customToaster();
