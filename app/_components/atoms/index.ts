import Animated from "./Animated";
import Button from "./Button";
import Card from "./Card";
import Hero from "./Hero";
import Input from "./Input";
import Range from "./Range";
import Rating from "./Rating";
import Select from "./Select";
import TextArea from "./TextArea";
import Toggle from "./Toggle";
import Visibility from "./Visibility";

/**
 * Exported Atom object containing various atomic components.
 * @property {React.ComponentType} Brand - Component for app-wide brand.
 * @property {React.ComponentType} Input - Component for input fields.
 * @property {React.ComponentType} Button - Component for buttons.
 * @property {React.ComponentType} Hero - Component for hero sections.
 * @property {React.ComponentType} Visibility - Component for visibility toggles.
 * @property {React.ComponentType} Range - Component for range inputs.
 * @property {React.ComponentType} Rating - Component for rating inputs.
 * @property {React.ComponentType} Select - Component for select inputs.
 * @property {React.ComponentType} TextArea - Component for text areas.
 * @property {React.ComponentType} Toggle - Component for toggle inputs.
 * @property {React.ComponentType} Card - Component for displaying content in a Card container.
 * @property {React.ComponentType} AnimationOnExit - Component for timing the animation and component unmount
 */

export const Atom = {
  Input,
  Button,
  Hero,
  Visibility,
  Range,
  Rating,
  Select,
  TextArea,
  Toggle,
  Card,
  Animated,
};
