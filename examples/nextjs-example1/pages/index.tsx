import type { NextPage } from 'next'
import FeatherIcon, { iconNames, IconNames } from '@svgr-iconkit/feather';
import FontawesomeIcon from '@svgr-iconkit/fontawesome';
import { default as CircleHalf, default as CircleOutlined } from "@svgr-iconkit/fontawesome/icons/regular/circle";
import CircleFilled from "@svgr-iconkit/fontawesome/icons/solid/circle";
import { MouseEvent, useCallback, useRef, useState } from 'react';
import { Rating } from '../components/Rating'
import styles from '../styles/Home.module.css'



const CircleSymbols = [CircleOutlined, CircleHalf, CircleFilled];

const Home: NextPage = () => {
  const ratingRef = useRef<HTMLElement>(null);
  const [currentIconName, setCurrentIconName] = useState<IconNames>("star")
  const [value, setValue] = useState(0);
  const [valueCircle, setValueCircle] = useState(3);



  const onChangeIconName = useCallback((evt: MouseEvent) => {
    evt.preventDefault();
    const newIndex = (Math.random() * iconNames.length) << 0;
    setCurrentIconName(iconNames[newIndex] as IconNames);
  }, []);
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <p>
          How to css work with @svgr-iconkit</p>
        <FontawesomeIcon id="app-heart" name="heart" size={24} />
        <FeatherIcon role="button" id="app-filled-heart" onClick={onChangeIconName} name={currentIconName} className={styles.filledHeart} />
        <Rating id="star" onItemClick={setValue} ref={ratingRef} value={value} />
        <Rating id="circle" contents={CircleSymbols} onItemClick={setValueCircle} value={valueCircle} />

      </header>
    </div>
  );
}

export default Home
