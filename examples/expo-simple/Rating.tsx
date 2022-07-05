
import { Icon, IconBaseProps, IconSVG } from "@svgr-iconkit/core";
import StarOutlined from "@svgr-iconkit/fontawesome/icons/regular/star";
import StarFilled from "@svgr-iconkit/fontawesome/icons/solid/star";
import StarHalf from "@svgr-iconkit/fontawesome/icons/solid/star-half";
import { ForwardedRef, forwardRef, memo, useCallback, useMemo, useRef } from "react";
import { TouchableOpacityProps } from "react-native";
import { GestureResponderEvent, View, ViewProps, StyleSheet, TouchableOpacity } from "react-native";

const DefaultSymbols = [StarOutlined, StarHalf, StarFilled];

type RatingBaseProps = {
  contents?: IconSVG[],
  minValue?: number
  maxValue?: number
  value?: number
  onItemClick?: (index: number, evt: GestureResponderEvent) => void,
  itemProps?: IconBaseProps | ((index: number) => IconBaseProps)
}

type RatingElementProps = ViewProps

type RatingProps = RatingBaseProps & RatingElementProps

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  }
})

const RatingStarItem = memo(forwardRef(function RatingStarItem({ state = 0, contents = DefaultSymbols, ...props }: {
  state: number,
  contents: IconSVG[]
} & TouchableOpacityProps, ref: ForwardedRef<TouchableOpacity>) {
  return <TouchableOpacity ref={ref} {...props}><Icon color="blue" size={32} content={contents[state]} /></TouchableOpacity>;
}))
export const Rating = memo(forwardRef(function Rating({ minValue = 1, maxValue = 5, value = 0, itemProps, contents = DefaultSymbols, onItemClick, ...props }: RatingProps, ref: ForwardedRef<View>) {
  const cells = useMemo(() => {
    const data = [];
    for (let i = minValue; i <= maxValue; i++) {
      let state = 0;
      if (value >= i) {
        state = 2;
      } else if (value >= i - 0.5) {
        state = 1;
      }
      data.push({ key: `${i}`, state });
    }
    return data;
  }, [minValue, maxValue, value]);

  const itemsRef = useRef<(TouchableOpacity | null)[]>(new Array(maxValue - minValue).fill(null))

  const _onItemChange = useCallback((evt: any) => {
    const index = itemsRef.current.findIndex(item => item == evt.currentTarget)
    onItemClick && onItemClick(index + 1, evt)
  }, [onItemClick]);

  return (
    <View style={styles.wrapper} ref={ref} {...props}>
      {cells.map((cellProps, index) => {
        const _props = typeof itemProps === "function" ? itemProps(index)
          : itemProps;
        return <RatingStarItem ref={(ref) => itemsRef.current[index] = ref} onPress={_onItemChange} contents={contents} {..._props} {...cellProps} />;
      })}
    </View>
  );
}))