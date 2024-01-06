// import { AnimatePresence, motion } from "framer-motion";
import { useGlovalContext } from "@/app/Provider/GlovalContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const AnimationPageContainer = ({ children }) => {
    const { router } = useGlovalContext();


    return (
        <div >
            {/* <motion.div
                key={route}
                initial="pageInitial"
                animate="pageAnimate"
                variants={{
                    pageInitial: {
                        opacity: 0,
                    },
                    pageAnimate: {
                        opacity: 1,
                    },
                }}
                transition={{
                    duration: 0.5,
                }}
            > */}
            {children}
            {/* </motion.div> */}
        </div>
    );
};

export default AnimationPageContainer;
