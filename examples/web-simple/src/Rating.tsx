
import { Icon, IconBaseProps, IconComponentProps, IconRefType, IconSVG } from "@svgr-iconkit/core";
import StarOutlined from "@svgr-iconkit/fontawesome/icons/regular/star";
import StarFilled from "@svgr-iconkit/fontawesome/icons/solid/star";
import StarHalf from "@svgr-iconkit/fontawesome/icons/solid/star-half";
import { useCallback } from "react";
import { useRef } from "react";
import { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes, MouseEvent, memo, useMemo } from "react";

const DefaultSymbols = [StarOutlined, StarHalf, StarFilled];

type RatingBaseProps = {
  contents?: IconSVG[],
  minValue?: number
  maxValue?: number
  value?: number
  onItemClick?: (index: number, evt: MouseEvent<IconRefType>) => void,
  itemProps?: IconBaseProps | ((index: number) => IconBaseProps)
}

type RatingElementProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

type RatingProps = RatingElementProps & RatingBaseProps


const RatingStarItem = (function RatingStarItem({ state = 0, contents = DefaultSymbols, ...props }: {
  state: number,
  contents: IconSVG[]
} & IconComponentProps) {
  return <Icon debug size="1em" content={contents[state]} {...props} />;
})
export const Rating = memo(forwardRef(function Rating({ minValue = 1, maxValue = 5, value = 0, itemProps, contents = DefaultSymbols, onItemClick, ...props }: RatingProps, ref: ForwardedRef<HTMLElement>) {
  
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

  const _onItemChange = useCallback((evt: MouseEvent<IconRefType>) => {
    const node = evt.currentTarget.attributes.getNamedItem("dataIndex");
    const index = Number(node?.nodeValue)
    onItemClick && onItemClick(index + 1, evt)
  }, [onItemClick]);

  return (
    <span ref={ref} {...props}>
      {cells.map((cellProps, index) => {
        const _props = typeof itemProps === "function" ? itemProps(index)
          : itemProps;
        return <RatingStarItem id={`${props.id || 'Rating'}-${index}`} data-index={index} onClick={_onItemChange} contents={contents} {..._props} {...cellProps} />;
      })}
    </span>
  );
}))