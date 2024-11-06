import { Icons } from "ui-kit/Icons";
import "./style.css";
import { useText } from "hooks/useText";

export function LandingFooter() {
  const footer = useText("footer");

  return (
    <div className="w-full max-w-[85rem] mx-auto px-6 pb-16 md:px-10">
      <div className="grid grid-cols-12 grid-rows-auto auto-cols-fr gap-6 w-full lg:gap-8">
        <footer className="footer-grid min-h-[360px] col-start-1 col-end-13 lg:col-start-2 lg:col-end-12">
          <div className="footer-grid-item footer-general">
            <h2 className="mb-[2.5rem] font-heading text-[2.5rem] sm:text-[5rem] leading-none">
              {footer.general.heading}
            </h2>
            <div className="mt-auto">
              <a href="/" className="block w-full max-w-[6rem] mb-4">
                <Icons.Logo width={undefined} height={undefined} />
              </a>
              <p>
                &copy; {new Date().getFullYear()} {footer.general.rights}
              </p>
            </div>
          </div>
          <div className="footer-grid-item footer-support">
            <h3 className="font-heading text-[2.5rem]">
              {footer.support.heading}
            </h3>
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: footer.support.p1 }}
            />
            <p
              className="mt-auto"
              dangerouslySetInnerHTML={{ __html: footer.support.p2 }}
            />
          </div>
          <div className="footer-grid-item footer-terms">
            {Object.entries<string>(footer.terms).map(
              ([key, value], i) => (
                <a href={value} key={i} className="footer-link">
                  {key}
                </a>
              )
            )}
          </div>
          <div className="footer-grid-item footer-socials">
            <h3 className="font-heading text-[2.5rem] mb-4">
              {footer.socials.heading}
            </h3>
            <div className="footer-social-links">
              <a
                href={footer.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-link"
              >
                <Icons.Instagram />
                <Icons.Instagram />
              </a>
              <a
                href={footer.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-link"
              >
                <Icons.Facebook />
                <Icons.Facebook />
              </a>
              <a
                href={footer.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="footer-social-link"
              >
                <Icons.X />
                <Icons.X />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
