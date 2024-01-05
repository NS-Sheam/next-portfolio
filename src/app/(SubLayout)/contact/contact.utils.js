import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
export const sendEmailWithEmailJS = async (formData) => {
  try {
    const response = await toast.promise(
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TAMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_KEY,
      ),
      {
        pending: "Sending email...",
        success: "Your email sent successfully 👌",
        error: "Something went wrong 🤯",
      },
    );

    return response.value;
  } catch (error) {
    toast.error("Something went wrong", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
};
