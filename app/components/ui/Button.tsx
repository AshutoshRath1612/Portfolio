import { cn, isExternalHref } from "@/app/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    className?: string;
    withArrow?: boolean;
}

interface LinkProps extends BaseProps {
    href: string;
    external?: boolean;
    onClick?: never;
    type?: never;
}

interface ButtonElemenetProps extends BaseProps {
    href?: never;
    external?: never;
    onClick?: () => void;
    type?: "button" | "submit";
}

type ButtonProps = LinkProps | ButtonElemenetProps;


const VARIANTS: Record<Variant, string> = {
    primary: "bg-foreground text-background hover:bg-foreground/90 border border-transparent",
    secondary: "bg-transparent text-foreground border border-border hover:border-muted-foreground hover:bg-surface",
    ghost: "bg-transparent text-foreground border border-transparent hover:bg-surface",
};

const SIZES: Record<Size, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-7 text-base",
};


const classes = (variant: Variant, size: Size, className?: string) => {
    return cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight",
        "transition-colors duration-300 ease-out-expo",
        "focus-visible:outline-none",
        VARIANTS[variant],
        SIZES[size],
        className
    )
}


const Arrow = () => {
    return (
        <ArrowUpRight 
        className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
        />
    )
}

export const Button = (props: ButtonProps) => {
    const {children, variant="primary",size="md",className, withArrow} = props;

    if ("href" in props && props.href) {
        const external = props.external ?? isExternalHref(props.href);

        return (
            <a href={props.href}
            className={classes(variant,size, className)}
            {...(external ? {target:"_blank", rel: "noopener noreferrer"} : {})}
            >
                {children}
                {withArrow ? <Arrow /> : null}
            </a>
        )
    }

    return (
        <button
        type={props.type ?? "button"}
        onClick={props.onClick}
        className={classes(variant,size,className)}
        >
        {children}
        {withArrow ? <Arrow /> : null}
        </button>
    )
}