import { Social } from '@/app/schemas/common.schema';
import React from 'react';
import Container from '../ui/Container';
import SocialLinks from '../ui/SocialLinks';

interface FooterProps {
  name: string;
  social: Social;
}

const Footer = ({ name, social }: FooterProps) => {
  const year = 2026;

  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="grid grid-cols-2 items-center gap-y-6 sm:flex sm:items-center sm:justify-between">

          {/* Name + Copyright */}
          <div className="flex flex-col gap-4">
            <p className="font-display text-sm font-semibold text-foreground">
              {name}
              <span className="text-accent">.</span>
            </p>

            <p className="text-sm text-muted-foreground">
              © {year}
            </p>
          </div>

          {/* Social Icons */}
          <div className="justify-self-end sm:order-3 sm:justify-self-auto">
            <SocialLinks social={social} />
          </div>

          {/* Back to Top */}
          <div className="col-span-2 flex justify-center sm:order-2 sm:ml-auto sm:mr-6">
            <a
              href="#hero"
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to top
            </a>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;