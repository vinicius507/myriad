import Link from 'next/link'
import { motion } from "framer-motion";

export default function Blog() {
    return (
        <motion.h1 initial="initial" animate="enter" exit="exit" variants={test}>
            Hey go <Link href="/"><a>Back to home.</a></Link>
        </motion.h1>)
}

const test = {
    initial: {
        x: 50,
        y: 0,
        opacity: 0,
    },
    enter: {
        x: 50,
        y: 50,
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        x: 50,
        y: 0,
        opacity: 0,
        transition: {
            duration: 1
        }
    }
}