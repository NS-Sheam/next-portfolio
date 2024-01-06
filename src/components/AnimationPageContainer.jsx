// import { AnimatePresence, motion } from "framer-motion";


const AnimationPageContainer = ({ children }) => {



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
