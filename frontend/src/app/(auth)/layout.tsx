import { TypographyH1 } from "@/components/ui/typography";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-row w-full h-screen justify-start">
      <div className="w-3/5 bg-linear-to-r from-[#d9a7c7] to-[#fffcdc]">
        <TypographyH1>Welcome to mocha !</TypographyH1>
      </div>
      <div className="w-2/5">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
