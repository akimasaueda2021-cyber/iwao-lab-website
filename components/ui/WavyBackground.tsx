import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const WavyBackground = ({ className, children }: Props) => {
  const classes = ["wavy-bg", className].filter(Boolean).join(" ");
  return (
    <div className={classes}>
      <div className="wavy-content">{children}</div>
    </div>
  );
};

export default WavyBackground;

