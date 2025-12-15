import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Introduction',
    description: (
      <>
        An overview of terrorism in Pakistan, its historical context,
        and the scope of this academic study on causes, prevention, and solutions.
      </>
    ),
    link: '/docs/intro',
  },
  {
    title: 'Causes of Terrorism',
    description: (
      <>
        Chapter 1 examines the socioeconomic, political, and ideological
        factors contributing to terrorism in Pakistan.
      </>
    ),
    link: '/docs/chapter-1-causes',
  },
  {
    title: 'Prevention & Solutions',
    description: (
      <>
        Chapter 2 explores evidence-based prevention strategies, policy
        recommendations, and paths toward lasting peace.
      </>
    ),
    link: '/docs/chapter-2-solutions',
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <Link to={link} className={styles.featureCard}>
      <article>
        <div className="text--center">
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
        <div className={styles.readMore}>
          Read Chapter →
        </div>
      </article>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Explore the Book
          </Heading>
          <p className={styles.sectionSubtitle}>
            A comprehensive academic study examining the complex factors behind terrorism
            in Pakistan and evidence-based approaches to prevention.
          </p>
        </div>
        <div className={styles.featureRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
