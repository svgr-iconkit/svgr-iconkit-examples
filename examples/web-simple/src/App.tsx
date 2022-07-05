
import Icon from '@svgr-iconkit/core';
import FeatherIcon from '@svgr-iconkit/feather';
import FontawesomeIcon, { iconNames, IconNames } from '@svgr-iconkit/fontawesome';
import { default as CircleHalf, default as CircleOutlined } from "@svgr-iconkit/fontawesome/icons/regular/circle";
import StarIconData from "@svgr-iconkit/fontawesome/icons/regular/star";
import CircleFilled from "@svgr-iconkit/fontawesome/icons/solid/circle";
import { MouseEvent, useCallback, useRef, useState } from 'react';
import './App.css';
import { Rating } from './Rating';



const CircleSymbols = [CircleOutlined, CircleHalf, CircleFilled];


function App() {

  const ratingRef = useRef<HTMLElement>(null);
  const [currentIconName, setCurrentIconName] = useState<IconNames>("heart")
  const [value, setValue] = useState(0);
  const [valueCircle, setValueCircle] = useState(3);



  const onChangeIconName = useCallback((evt: MouseEvent) => {
    evt.preventDefault();
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
