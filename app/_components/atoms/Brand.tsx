import Image from "next/image";

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
 * @param {LogoProps} logoProps - The properties for the logo image.
 * @param {string} [label] - The optional label text to be displayed.
 */
interface Props {
  logoProps: LogoProps;
  label?: string;
}

/**
 * Brand component for displaying a logo with an optional label.
 * @param {Props} props - The props for the Brand component.
 * @returns The rendered Brand component.
 */
export default function Brand({ logoProps, label }: Props) {
  return (
    <div>
      <Image
        src={logoProps.src}
        width={logoProps.width}
        height={logoProps.height}
        alt={logoProps.alt}
      />
      <p className="text-bold text-2xl text-primary-content">{label}</p>
    </div>
  );
}
