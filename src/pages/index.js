import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Define App",
    url: "https://def.app",
    description: "An experimental blog that we are still working on.",
  },
  {
    text: "Tiny Page",
    url: "https://github.com/tinypage/tinypage",
    description:
      "An open source personal note management system, built with Ruby on Rails, SQLite, and StimulusJS. " +
      "This project is a work in progress.",
  },
  {
    text: "Later App",
    url: "https://later.app",
    description:
      "This application is currently operating in stealth mode. Stay tuned for future updates!",
  },
  {
    text: "Babel IO",
    url: "https://babel.io",
    description:
      "Empowering software engineers to communicate confidently with AI assistance.",
  },
]

const socialLinks = [
  {
    text: "Twitter",
    url: "https://twitter.com/YaodongDev",
  },
  { text: "LinkedIn", url: "https://www.linkedin.com/in/yaodong" },
  { text: "GitHub", url: "https://github.com/yaodong" },
]

const moreLinks = [
  {
    text: "Let's meet",
    url: "https://calendly.com/yaodong-zhao/30min",
  },
  {
    text: "Let's connect",
    url: "https://www.linkedin.com/in/yaodong",
  },
  {
    text: "Follow me on Twitter",
    url: "https://twitter.com/YaodongDev",
  },
]

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        className="profile-picture"
        src="../images/profile.jpg"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <p className={styles.intro}>
        {socialLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== socialLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </p>
      <p className={styles.intro}>
        Hey there! I'm a software engineer based in the Bay Area, California.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a className={styles.listItemLink} href={`${link.url}`}>
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
