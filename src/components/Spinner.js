import React from "react";
import "./Spinner.css";
import { motion } from "framer-motion";

const spinTransition = {
    loop: Infinity,
    duration: 1,
    ease: "linear"
}

class Spinner extends React.Component {
    render() {
        return (
            <div className="containerStyle">
                <motion.span
                    className="circleStyle"
                    animate={{rotate: 360}}
                    transition={spinTransition}
                />
            </div>
        )
    }

}

export default Spinner;
