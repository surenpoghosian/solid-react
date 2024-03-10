import { ButtonHTMLAttributes, ReactNode } from "react";

// ######## This looks better but it's not enough.
// const BuyButton = () => {
//     return <button>Buy</button>;
//   };

// export default BuyButton;

// ######## We also need to inherit all the functionalities of the button itself.
interface IBuyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    onClick?: () => void
    title?: string
    disabled?: boolean
    name?: string
    type?: "button" | "submit" | "reset"
    // ... and any other props that come with the button
  }
  
const BuyButton = ({ children, ...props }: IBuyButtonProps) => {
    return <button {...props} className="buy">{children}</button>;
};

export default BuyButton;