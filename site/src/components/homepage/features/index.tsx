import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import temp from './img/temp.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Some Feature',
    description: <>Summary</>,
    Svg: temp,
  },
  {
    title: 'Some Feature',
    description: <>Summary</>,
    Svg: temp,
  },
  {
    title: 'Some Feature',
    description: <>Summary</>,
    Svg: temp,
  },
  {
    title: 'Some Feature',
    description: <>Summary</>,
    Svg: temp,
  },
  {
    title: 'Some Feature',
    description: <>Summary</>,
    Svg: temp,
  },
  {
    title: 'Some Feature',
    description: <>Summary</>,
    Svg: temp,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg
          className={styles.featureSvg}
          role="img"
          width={200}
          height={200}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
