/**
 * Props interface for the Card component.
 * @param {React.ReactNode} children - The child elements to be rendered inside the card.
 * @param {string} extraClass - Additional CSS classes to apply to the card.
 */
interface Props {
  children: React.ReactNode;
  extraClass?: string;
}

/**
 * Card component for displaying content in a styled card container.
 * @param {Props} props - The props for the Card component.
 * @returns {JSX.Element} The rendered Card component.
 */
export default function Card({ children, extraClass }: Props) {
  return (
    <div className={`card bg-base-100 shadow-xl w-full ${extraClass}`}>
      {children}
    </div>
  );
}
