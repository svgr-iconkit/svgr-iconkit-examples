
import './App.css';
import FontawesomeIcon, { iconNames, IconNames } from '@svgr-iconkit/fontawesome';
import FeatherIcon from '@svgr-iconkit/feather';
import StarIconData from "@svgr-iconkit/fontawesome/icons/regular/star"

import CircleOutlined from "@svgr-iconkit/fontawesome/icons/regular/circle";
import CircleHalf from "@svgr-iconkit/fontawesome/icons/regular/circle";
import CircleFilled from "@svgr-iconkit/fontawesome/icons/solid/circle";

import Icon from '@svgr-iconkit/core';
import { Rating } from './Rating';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

const CircleSymbols = [CircleOutlined, CircleHalf, CircleFilled];


function App() {

  const ratingRef = useRef<HTMLElement>(null);
  const [currentIconName, setCurrentIconName] = useState<IconNames>("heart")
  const [value, setValue] = useState(0);
  const [valueCircle, setValueCircle] = useState(3);
  useEffect(() => {
    if (!ratingRef.current) {
      return;
    }
    const onMouseUp = (evt: MouseEvent) => {
      console.log(evt.target)

    }
    ratingRef.current.addEventListener("mouseup", onMouseUp);
    return () => {
      ratingRef.current?.removeEventListener("mouseup", onMouseUp);
    }
  }, [])


  const onChangeIconName = useCallback(() => {
    const newIndex = (Math.random() * iconNames.length) << 0;
    setCurrentIconName(iconNames[newIndex] as IconNames);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Icon id="applogo" content={StarIconData} className="App-logo" />
        <p>
          How to css work with @svgr-iconkit</p>
        <FeatherIcon id="app-heart" name="heart" size={24} />
        <FontawesomeIcon role="button" id="app-filled-heart" onClick={onChangeIconName} name={currentIconName} className="filled-heart" />

        <Rating id="star" onItemClick={setValue} ref={ratingRef} value={value} />
        <Rating id="circle" contents={CircleSymbols} onItemClick={setValueCircle} value={valueCircle} />

      </header>
    </div>
  );
}

export default App;
