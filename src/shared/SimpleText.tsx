import type { FC } from "react";

interface SimpleTextProps {
  text: string;
  classes?: string;
}

const SimpleText: FC<SimpleTextProps> = ({ text, classes = "" }) => {
  return (
    <p
      className={`text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed ${classes}`}
    >
      {text}
    </p>
  );
};

export default SimpleText;
