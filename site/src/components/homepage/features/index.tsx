import clsx from 'clsx';
import type React from 'react';
import temp from './img/temp.svg';
import styles from './styles.module.css';

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
          {FeatureList.map(({ title, description, Svg }) => (
            <Feature
              key={title}
              title={title}
              description={description}
              Svg={Svg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
