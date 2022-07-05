
import { Icon, IconComponentProps, IconRefType, IconSVG } from "@svgr-iconkit/core";
import StarOutlined from "@svgr-iconkit/fontawesome/icons/regular/star";
import StarFilled from "@svgr-iconkit/fontawesome/icons/solid/star";
import StarHalf from "@svgr-iconkit/fontawesome/icons/solid/star-half";
import { View } from "native-base";
import * as React from "react";
import { useCallback, ForwardedRef, forwardRef, MouseEvent, memo, useMemo, useRef } from "react";
import { TouchableOpacity, TouchableOpacityProps, ViewProps } from "react-native";

const DefaultSymbols = [StarOutlined, StarHalf, StarFilled];

type RatingBaseProps = {
  id?: string
  contents?: IconSVG[],
  minValue?: number
  maxValue?: number
  value?: number
  onItemClick?: (index: number, evt: MouseEvent<IconRefType>) => void,
  iconProps?: IconComponentProps | ((index: number) => IconComponentProps)
}

type RatingElementProps = ViewProps

type RatingProps = RatingBaseProps & RatingElementProps

// eslint-disable-next-line react/display-name
const RatingStarItem = memo(forwardRef(function RatingStarItem({ state = 0, contents = DefaultSymbols, iconProps, ...props }: {
  state: number,
  contents: IconSVG[]
  iconProps?: IconComponentProps
} & TouchableOpacityProps, ref: ForwardedRef<TouchableOpacity>) {
  return <TouchableOpacity ref={ref} {...props}><Icon color="blue" size={32} content={contents[state]} {...iconProps} /></TouchableOpacity>;
}))
// eslint-disable-next-line react/display-name
export const Rating = memo(forwardRef(function Rating({ minValue = 1, maxValue = 5, value = 0, iconProps: itemProps, contents = DefaultSymbols, onItemClick, ...props }: RatingProps, ref: ForwardedRef<unknown>) {
  
  const cells = useMemo(() => {
    const data = [];
    for (let i = minValue; i <= maxValue; i++) {
      let state = 0;
      if (value >= i) {
        state = 2;
      } else if (value >= i - 0.5) {
        state = 1;
      }
      data.push({ key: `${i}-${state}`, state });
    }
    return data;
  }, [minValue, maxValue, value]);

  const itemsRef = useRef<(TouchableOpacity | null)[]>(new Array(maxValue - minValue).fill(null))

  const _onItemChange = useCallback((evt) => {
    const index = itemsRef.current.findIndex(item => item == evt.currentTarget)
    onItemClick && onItemClick(index + 1, evt)
  }, [onItemClick]);

  return (
    <View flexDirection="row" ref={ref} {...props}>
      {cells.map((cellProps, index) => {
        const _props: IconComponentProps | undefined = typeof itemProps === "function" ? itemProps(index)
          : itemProps;
        // eslint-disable-next-line react/jsx-key
        return <RatingStarItem ref={(ref) => itemsRef.current[index] = ref} onPress={_onItemChange} contents={contents} iconProps={_props} {...cellProps} />;
      })}
    </View>
  );
}))