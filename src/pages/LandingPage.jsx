import React from 'react';
import SEO from '../components/seo';
import githubLogo from '../images/github.svg';
import linkedInLogo from '../images/linkedinx.svg';
import twitterLogo from '../images/twitterx.svg';

import styles from './landingPage.module.scss';

const projects = [
  {
    projName: 'GetRates.co',
    link: 'https://getrates.co',
    projDuration: '2019 - 2020',
    projDescription:
      'Team-work: back-end APIs and Legacy React App maintenance',
  },
  {
    projName: 'SafeHaven',
    link: 'https://safehavenapp.herokuapp.com/',
    projDuration: '2020',
    projDescription: 'Open-Source: Front-end React App',
  },
  {
    projName: 'Secret Gifter',
    link: 'https://secret-gifter.netlify.app',
    projDuration: '2020',
    projDescription: 'Team-work: Front-end React App',
  },
  {
    projName: 'Authors Haven',
    link: 'https://dahlia-ah-frontend-staging.herokuapp.com/',
    projDuration: '2019',
    projDescription: 'Team-work: back-end APIs and Front-end React app',
  },
];

const email = 'oviisaacs@gmail.com';
const github = 'https://github.com/OvieMudi';
const twitter = 'https://twitter.com/XovieY';
const linkedIn = 'https://linkedin.com/in/ovie-udih-812648111/';

const IndexPage = () => (
  <div className={styles.landingPage}>
    <SEO title="Ovie Udih" />
    <div className={styles.intro}>
      <div className={styles.introContainer}>
        <h1 className={styles.heading}>
          Hi, I'm <strong>Ovie Udih</strong>
        </h1>
        <b className={styles.description}>a full-stack Software Developer</b>
        <p className={styles.location}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
          </svg>
          <span>Remote</span>
          <span className={styles.middot}>&middot;</span>
          <span>Lagos</span>
        </p>
        <div className={styles.actionsContainer}>
          <a href="#projects" className={[styles.btn].join(' ')}>
            See My Work
          </a>
          <a
            href={`mailto:${email}`}
            className={[styles.btn, styles.btn_Alt, styles.bounce].join(' ')}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>

    <section className={[styles.about, styles.section].join(' ')}>
      <h2 id="about" className={styles.sub2}>
        About Me
      </h2>
      <p>
        I currently work with the GetRatesNow team as a [frontend-heavy]
        full-stack developer. Formerly worked with Andela Nigeria.
      </p>
      <p>
        I live in Lagos, Nigeria. I work with startups and agile teams to
        transform product requirements into facing features with great user
        experience.
      </p>
      <div className={styles.socialContainer}>
        <a href={`${github}`} target="_blank" rel="noreferrer">
          <img src={githubLogo} alt="github" />
        </a>
        <a href={`${twitter}`} target="_blank" rel="noreferrer">
          <img src={twitterLogo} alt="twitter" />
        </a>
        <a href={`${linkedIn}`} target="_blank" rel="noreferrer">
          <img src={linkedInLogo} alt="linkedin" />
        </a>
      </div>
    </section>

    <section
      id="projects"
      className={[styles.projects, styles.section].join(' ')}
    >
      <h2 className={styles.sub2}>Projects</h2>
      <div>
        {projects.map(proj => (
          <a key={proj.projName} href={proj.link} className={styles.project}>
            <p>
              <span className={styles.projName}>{proj.projName}</span>
              <span className={styles.projDuration}>{proj.projDuration}</span>
            </p>
            <p className={styles.projDescription}>{proj.projDescription}</p>
          </a>
        ))}
      </div>
    </section>
  </div>
);

export default IndexPage;
