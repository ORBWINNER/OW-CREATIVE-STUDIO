import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./site-footer.module.css";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Wall Painting", href: "/services/wall-painting" },
  { label: "Mural Art", href: "/services/mural-art" },
  { label: "Terracotta Art", href: "/services/terracotta-art" },
  { label: "Canvas Painting", href: "/services/canvas-painting" },
  {
    label: "Art Space Enhancement",
    href: "/services/art-space-enhancement",
  },
];

const quickLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: InstagramIcon,
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/",
    icon: PinterestIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: LinkedInIcon,
  },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundPattern} aria-hidden="true" />
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.leafArtwork} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <Container>
        <div className={styles.main}>
          <div className={styles.brandColumn}>
            <Link
              href="/"
              className={styles.brand}
              aria-label="OW Creative Studio home"
            >
              <span className={styles.brandMark} aria-hidden="true">
                OW
              </span>

              <span className={styles.brandIdentity}>
                <strong>OW</strong>
                <span>Creative Studio</span>
              </span>
            </Link>

            <p className={styles.description}>
              We create timeless art and inspired spaces through creativity,
              passion and craftsmanship.
            </p>

            <div
              className={styles.socialList}
              aria-label="OW Creative Studio social media"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterLinks title="Company" links={companyLinks} />

          <FooterLinks title="Services" links={serviceLinks} />

          <FooterLinks title="Quick Links" links={quickLinks} />

          <div className={styles.contactColumn}>
            <h2 className={styles.columnTitle}>Contact</h2>

            <address className={styles.contactList}>
              <a href="tel:+8801234567890" className={styles.contactItem}>
                <Phone size={16} strokeWidth={1.7} aria-hidden="true" />
                <span>+880 1234 567 890</span>
              </a>

              <a
                href="mailto:hello@owcreativestudio.com"
                className={styles.contactItem}
              >
                <Mail size={16} strokeWidth={1.7} aria-hidden="true" />
                <span>hello@owcreativestudio.com</span>
              </a>

              <div className={styles.contactItem}>
                <MapPin size={16} strokeWidth={1.7} aria-hidden="true" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </address>

            <a
              href="https://orbwinner.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.designCredit}
            >
              <span>
                Design by <strong>ORBWINNER LAB</strong>
              </span>

              <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} OW Creative Studio. All Rights Reserved.</p>

          <p>
            Art, design and creative spaces with{" "}
            <span>purpose and character.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

type FooterLinksProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <nav className={styles.linkColumn} aria-label={`${title} footer links`}>
      <h2 className={styles.columnTitle}>{title}</h2>

      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className={styles.footerLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

type SocialIconProps = {
  className?: string;
};

function FacebookIcon({ className }: SocialIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.4v3h2.8v8h3.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon({ className }: SocialIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="3.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function PinterestIcon({ className }: SocialIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 3.5c-4.7 0-7.5 3.4-7.5 6.7 0 2.5.9 4.7 2.9 5.5-.1-.5-.1-1.2 0-1.7l.9-3.7s-.2-.7-.2-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.8 1.5 1.7 0 1-.6 2.4-.9 3.7-.3 1.1.5 2 1.6 2 1.9 0 3.3-2 3.3-4.9 0-2.5-1.8-4.3-4.5-4.3-3 0-4.8 2.3-4.8 4.6 0 .9.3 1.9.8 2.4.1.1.1.2.1.4l-.3 1.2c-.1.4-.4.5-.8.3-1.5-.7-2.4-2.8-2.4-4.5 0-3.7 2.7-7.1 7.8-7.1 4.1 0 7.3 2.9 7.3 6.8 0 4.1-2.6 7.4-6.1 7.4-1.2 0-2.3-.6-2.7-1.4l-.7 2.8c-.3 1-.9 2.3-1.4 3.1 1.1.3 2.2.5 3.4.5 4.7 0 8.5-3.8 8.5-8.5S16.7 3.5 12 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6.2 8.4H3.3V21h2.9V8.4ZM4.8 3A1.8 1.8 0 1 0 4.8 6.6 1.8 1.8 0 0 0 4.8 3ZM20.7 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2V8.4H9.4V21h2.9v-7c0-1.9.4-3.7 2.7-3.7 2.3 0 2.3 2.1 2.3 3.8V21h3.4v-7.2Z"
        fill="currentColor"
      />
    </svg>
  );
}