import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
export const sendEmailWithEmailJS = async (formData) => {
  try {
    const result = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TAMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_KEY,
    );

    toast.success("Your email sent successfully", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return result;
    // You can also log or do additional handling with the 'result' object if needed
  } catch (error) {
    // Handle error

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
