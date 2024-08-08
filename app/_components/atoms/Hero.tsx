import React from "react";

/**
 * Props interface for the Hero component.
 * @param {React.ReactNode} children - The child elements to be rendered inside the Hero section.
 */
interface Props {
  children: React.ReactNode;
}

/**
 * Hero component for rendering a full-screen section with centered content.
 * @param {Props} props - The props for the Hero component.
 * @returns JSX.Element
 */
export default function Hero({ children }: Props) {
  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div>{children}</div>
      </div>
    </section>
  );
}
