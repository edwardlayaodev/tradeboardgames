import React from "react";

/**
 * Props interface for the Visibility component.
 * @param {React.ReactNode} children - The child elements to conditionally render.
 * @param {boolean} state - The state determining visibility of the children.
 */
interface Props {
  children: React.ReactNode;
  state: boolean;
}

/**
 * Visibility component for conditionally rendering children based on a state.
 * @param {Props} props - The props for the Visibility component.
 * @returns JSX.Element | null
 */
export default function Visibility({ children, state }: Props) {
  return state ? children : null;
}
