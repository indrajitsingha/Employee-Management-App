// src/hooks/useToast.js
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToast = () => {
    const toastSuccess = (message) => { toast.success(message, { position: "top-right", theme: "dark", transition: Bounce }) };
    return {
        ToastContainerComponent: (
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        ),
        toastSuccess,
    };
};

export default useToast