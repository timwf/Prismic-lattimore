import * as React from 'react'
import { Link } from 'gatsby'

export const HomepageBanner = ({
  title,
  description,
  linkUrl,
  linkLabel,
  backgroundUrl,
}) => (
  <section
    className="homepage-banner"
  >
    <div className="banner-content container">
      <h2 className="banner-title">{title}</h2>
      <p className="banner-description">{description}</p>
      <Link to={linkUrl} className="banner-button">
        {linkLabel}
      </Link>
    </div>
  </section>
)
