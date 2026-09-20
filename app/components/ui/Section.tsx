import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";
import Container from "./Container";

interface SectionProps {
    id: string;
    children: ReactNode;
    eyebrow?: string;
    title?: string;
    description?: string;
    className?: string;
    // Removing default top/bottom padding when composing custom layout
    flush?: boolean;
    headingAlign?: "left" | "center";
}

const Section = ({
    id, children, eyebrow, title, description, className, flush=false, headingAlign="left"
}: SectionProps) => {
  return (
    <section
    id={id}
    className={cn("scroll-mt-24", !flush && "py-section", className)}
    aria-labelledby={title ? `${id}-heading`: undefined}
    >
        <Container>
            {title ? (
                <div className="mb-12 sm:mb-16">
                    <div id={`${id}-heading`}>
                        <SectionHeading
                        eyebrow={eyebrow}
                        title={title}
                        description={description}
                        align={headingAlign}
                        />
                    </div>
                </div>
            ) : null}
            {children}
        </Container>
    </section>
  )
}

export default Section