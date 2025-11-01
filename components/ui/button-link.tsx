import * as React from "react";
import Link from "next/link";
import { Button, ButtonProps } from "@/components/ui/button";

interface ButtonLinkProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
}

/**
 * A Button component that works as a link.
 * - For internal links (starting with /), uses Next.js Link
 * - For external links or files, uses anchor tag
 * - Automatically handles target="_blank" and rel="noopener noreferrer" for external links
 *
 * @example
 * // Internal link
 * <ButtonLink href="/portfolio/idar">View Project</ButtonLink>
 *
 * // External link
 * <ButtonLink href="https://github.com/user">GitHub</ButtonLink>
 *
 * // File download
 * <ButtonLink href="/resume.pdf" openInNewTab>View Resume</ButtonLink>
 *
 * // With custom styling
 * <ButtonLink href="/contact" variant="outline" size="lg">Contact</ButtonLink>
 */
export function ButtonLink({
  href,
  children,
  openInNewTab = false,
  ...props
}: ButtonLinkProps) {
  const isInternalLink = href.startsWith("/");
  const isExternalLink = href.startsWith("http");
  const isFile = /\.(pdf|docx?|xlsx?|pptx?|zip|rar)$/i.test(href);

  // Determine if we should open in new tab
  const shouldOpenInNewTab = openInNewTab || isExternalLink || isFile;

  // For internal Next.js routes
  if (isInternalLink && !isFile) {
    return (
      <Button asChild {...props}>
        <Link href={href}>{children}</Link>
      </Button>
    );
  }

  // For external links or files
  return (
    <Button asChild {...props}>
      <a
        href={href}
        target={shouldOpenInNewTab ? "_blank" : undefined}
        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    </Button>
  );
}
