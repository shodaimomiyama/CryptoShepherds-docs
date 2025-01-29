import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '分散型のデータ制御',
    Svg: require('@site/static/img/data.svg').default,
    description: (
      <>
        アクセス制御と保存を分散型で統合的に行うことができます。
      </>
    ),
  },
  {
    title: '柔軟な復号条件',
    Svg: require('@site/static/img/decrypt.svg').default,
    description: (
      <>
        オンチェーンでの検証から、apiを呼び出したオフチェーンコードの実行まで、あらゆる復号条件を設定できます。
      </>
    ),
  },
  {
    title: 'シンプルなSDK',
    Svg: require('@site/static/img/develop.svg').default,
    description: (
      <>
        6つの基本関数からなるシンプルなSDKを提供しています。
        学習コストはほぼ0です。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
