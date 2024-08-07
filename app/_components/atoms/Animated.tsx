"use client";
import { AnimatePresence, motion, AnimationProps } from "framer-motion";

/**
 * Interface for Animated properties.
 * @param {children} React.ReactNode - The Child Element, content of the animated container.
 * @param {isVisible} boolean - The state in which the children should be rendered, this triggers animate presence when false, which makes the animation finish first before unmounting.
 * @param {extraClass} string - Extra classes for the animated container.
 * @param {"slideFromTop" | "opacity"} animationType  -  The Animation Type, used in type record/definition
 */
interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  extraClass: string;
  animationType: "slideFromTop" | "opacity";
}

type AnimationTypeRecord = Record<string, any>;

const AnimationTypeProps: AnimationTypeRecord = {
  slideFromTop: {
    initial: { y: -500 },
    animate: { y: 0 },
    transition: { duration: 0.3 },
    exit: { y: -500 },
  },
  opacity: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
    exit: { opacity: 0 },
  },
};

/**
 * Animated component for handling animations onMount and onDestroy.
 * @param {Props} props - The props for the Animated component.
 * @returns
 */
export default function Animated({
  children,
  isVisible,
  extraClass,
  animationType,
}: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={extraClass}
          initial={AnimationTypeProps[animationType]?.initial}
          animate={AnimationTypeProps[animationType]?.animate}
          transition={AnimationTypeProps[animationType]?.transition}
          exit={AnimationTypeProps[animationType]?.exit}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
