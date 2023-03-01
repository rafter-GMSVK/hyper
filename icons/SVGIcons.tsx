import { LinkedIn } from "./LinkedIn";
import { Twitter } from "./Twitter";
import { Facebook } from "./Facebook";
import { Car } from "./Car";
import { Menu } from "./Menu";

export type IconType = "linked-in" | "facebook" | "twitter" | "car" | "menu";

export interface IconProps {
  type: IconType;
  height?: number;
  width?: number;
  className?: string;
}
export const SVGIcons = ({
  type,
  height,
  width,
  className = "",
}: IconProps): React.ReactElement<React.SVGProps<SVGSVGElement>> => {
  const iconHeight = height ?? 24;
  const iconWidth = width ?? 24;
  switch (type) {
    case "facebook":
      return (
        <Facebook height={iconHeight} width={iconWidth} className={className} />
      );

    case "twitter":
      return (
        <Twitter height={iconHeight} width={iconWidth} className={className} />
      );
    case "linked-in":
      return (
        <LinkedIn height={iconHeight} width={iconWidth} className={className} />
      );
    case "car":
      return (
        <Car height={iconHeight} width={iconWidth} className={className} />
      );

    case "menu":
      return (
        <Menu height={iconHeight} width={iconWidth} className={className} />
      );
  }
};
