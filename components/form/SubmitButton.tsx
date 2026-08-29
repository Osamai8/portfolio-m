"use client"

import clsx from "clsx";
import { LucideLoaderCircle } from "lucide-react";
import React, { cloneElement } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface SubmitButtonProps {
    label?: string,
    icon?: React.ReactElement,
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg",
}
const SubmitButton = ({ label, icon, variant = "default", size = "default" }: SubmitButtonProps) => {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" variant={variant} size={size}>
            {pending ? <LucideLoaderCircle className={clsx("h-4 w-4 animate-spin", { "mr-2": !!label })} />
                : icon ? <span>
                    {cloneElement(icon, { className: "h-4 w-4" } as React.ComponentProps<React.ElementType>)}
                </span> : null}
            {label}
        </Button>
    )
}
export { SubmitButton }