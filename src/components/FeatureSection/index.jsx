import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  featureSection,
  featureIntro,
  featureTitle,
  featureImage,
  featureItems,
  more,
} from './style.module.css';

const Header = ({
  title,
  description,
  image,
  alt,
  link,
  url,
  children,
}) => {
  const updateUrl = (path) => (path.includes('http') ? `${process.env.ASSET_PREFIX}${path}` : path);

  return (
    <section className={featureSection}>
      <div className={featureIntro}>
        {title && <h3 className={featureTitle}>{title}</h3>}
        {image && <img className={featureImage} src={`${process.env.ASSET_PREFIX}${image}`} alt={alt} />}
        {description && <p>{description}</p>}
      </div>
      <div className={featureItems}>
        {children}
      </div>
      <div>{link && (
        <p>
          <Link href={updateUrl(url)}>
            <a className={more} href={updateUrl(url)} aria-label={link} title={link}>⋮</a>
          </Link>
        </p>
      )}
      </div>
    </section>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.arrayOf.isRequired,
};