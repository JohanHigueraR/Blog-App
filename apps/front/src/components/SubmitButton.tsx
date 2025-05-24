"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
    
interface SubmitButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

const SubmitButton = ({ children, ...props }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button color="blue" type="submit" aria-disabled={pending} {...props}>
      {pending ? <span className="animate-pulse">Submitting</span> : children}
    </Button>
  );
};

export default SubmitButton;