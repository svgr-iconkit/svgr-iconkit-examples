import FeatherIcon from '@svgr-iconkit/feather';
import FontawesomeIcon, { iconNames, IconNames } from '@svgr-iconkit/fontawesome';
import CircleHalf from "@svgr-iconkit/fontawesome/icons/regular/circle";
import CircleFilled from "@svgr-iconkit/fontawesome/icons/solid/circle";
import {
  Center, Heading, IconButton, MoonIcon, SunIcon, Text, Tooltip, useColorMode, VStack
} from "native-base";
import React, { useCallback, useRef, useState } from "react";
import { Rating } from "../components/Rating";

const CircleSymbols = [CircleHalf, CircleHalf, CircleFilled];

// Start editing here, save and see your changes.
export default function App() {
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
    <Center
      flex={1}
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <VStack alignItems="center" space="md">
        <Heading>@svgr-iconkit</Heading>


        <Text>
          How to css work with next.js + nativebase3</Text>
        <FeatherIcon id="app-heart" name="heart" size={24} />
        <FontawesomeIcon id="app-filled-heart" name={currentIconName} size={24} />

        <Rating id="star" iconProps={{ color: "red" }} onItemClick={setValue} ref={ratingRef} value={value} />
        <Rating id="circle" contents={CircleSymbols} onItemClick={setValueCircle} value={valueCircle} />

      </VStack>
      <ColorModeSwitch />
    </Center>
  );
}
// Color Switch Component
function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        position="absolute"
        top={12}
        right={8}
        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}
