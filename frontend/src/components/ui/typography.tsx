export interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const TypographyH1 = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={`${
        className ?? ""
      } scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
    >
      {children}
    </h1>
  );
};

export const TypographyH2 = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={`${
        className ?? ""
      } scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0`}
    >
      {children}
    </h2>
  );
};

export const TypographyH3 = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={`${
        className ?? ""
      } scroll-m-20 text-2xl font-semibold tracking-tight`}
    >
      {children}
    </h3>
  );
};

export const TypographyH4 = ({ children, className }: TypographyProps) => {
  return (
    <h4
      className={`${
        className ?? ""
      } scroll-m-20 text-xl font-semibold tracking-tight`}
    >
      {children}
    </h4>
  );
};

export const TypographyP = ({ children, className }: TypographyProps) => {
  return (
    <p className={`${className ?? ""} leading-7 [&:not(:first-child)]:mt-6`}>
      {children}
    </p>
  );
};

export const TypographyLarge = ({ children, className }: TypographyProps) => {
  return (
    <div className={`${className ?? ""} text-lg font-semibold`}>{children}</div>
  );
};

export const TypographySmall = ({ children, className }: TypographyProps) => {
  return (
    <small className={`${className ?? ""} text-sm font-medium leading-none`}>
      {children}
    </small>
  );
};

export const TypographyMuted = ({ children, className }: TypographyProps) => {
  return (
    <p className="text-sm text-muted-foreground">{children}</p>
  );
};
