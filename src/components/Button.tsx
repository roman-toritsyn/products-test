import { twMerge } from "tailwind-merge";

type TButtonProps = {
  customStyles?: string;
  name: string;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<TButtonProps> = ({
  customStyles,
  name,
  onClick,
  icon,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        "bg-accent border-[2px] border-primary py-3 px-4 flex gap-2 shadow-[4px_4px_0px_0px_#1E1C10] cursor-pointer transition-all hover:shadow-[6px_6px_0px_0px_#1E1C10]",
        customStyles,
      )}
      {...props}
    >
      <p className="hidden xl:block font-work-sans font-black text-[14px] leading-[20px] tracking-normal text-center uppercase">
        {name}
      </p>
      {icon && icon}
    </button>
  );
};

export default Button;
