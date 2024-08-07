import Image from "next/image";
import { Zilla_Slab } from "next/font/google";
import React, { ReactNode } from "react";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

/**
 * Interface for the logo properties.
 * @param {string} src - The source URL of the logo image.
 * @param {number} width - The width of the logo image.
 * @param {number} height - The height of the logo image.
 * @param {string} alt - The alt text for the logo image.
 */
interface LogoProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

/**
 * Props interface for the Brand component.
 * @param {LogoProps} logoProps - optional properties for the logo image.
 * @param {string} [label] - The label text to be displayed.
 */
interface Props {
  logoProps?: LogoProps;
  label: string | ReactNode;
}

/**
 * Brand component for displaying a logo with an optional label.
 * @param {Props} props - The props for the Brand component.
 * @returns The rendered Brand component.
 */
export default function Brand({ logoProps, label }: Props) {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      {logoProps && (
        <Image
          src={logoProps.src}
          width={logoProps.width}
          height={logoProps.height}
          alt={logoProps.alt}
        />
      )}
      <p
        className={`text-bold text-2xl text-primary-content font-bold ${zilla.className}`}
      >
        {label}
      </p>
    </div>
  );
}
