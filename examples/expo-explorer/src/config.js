
export const iconsets = [
  {
    packageName: "@svgr-iconkit/fontawesome",
    name: "FontAwesome Free",
    resources: () => import('./iconset/FontAwesome'),
  },
  {
    packageName: "@svgr-iconkit/fontawesome-brands",
    name: "FontAwesome Free - Brands",
    resources: () => import('./iconset/FontAwesome-brands'),
  },
  {
    packageName: "@svgr-iconkit/fluentui-system",
    name: "Fluent UI System",
    resources: () => import('./iconset/FluentUISystem'),
  },
  {
    packageName: "@svgr-iconkit/feather",
    name: "Feather",
    strokeEnabled: true,
    resources: () => import('./iconset/Feather'),
  },
  {
    packageName: "@svgr-iconkit/ant-design",
    name: "Ant Design Icons",
    defaultVariant: 'filled',
    resources: () => import('./iconset/AntDesignIcon'),
  },
  {
    packageName: "@svgr-iconkit/entypo",
    name: "Entypo",
    resources: () => import('./iconset/Entypo'),
  },
  {
    packageName: "@svgr-iconkit/ionicons",
    name: "Ionicons",
    resources: () => import('./iconset/Ionicons'),
  },
  {
    packageName: "@svgr-iconkit/octicons",
    name: "Octicons",
    resources: () => import('./iconset/Octicons'),
  },
  {
    packageName: "@svgr-iconkit/material-design",
    name: "Material Design Icons",
    resources: () => import('./iconset/MaterialDesignIcons'),
  },
  {
    packageName: "@svgr-iconkit/bootstrap",
    name: "Bootstrap Icons",
    resources: () => import('./iconset/BootstrapIcon'),
  },
  {
    packageName: "@svgr-iconkit/heroicons",
    name: "Heroicons",
    defaultVariant: 'solid',
    resources: () => import('./iconset/Heroicons'),
  },
  {
    packageName: "@svgr-iconkit/simple-icons",
    name: "Simple Icons",
    resources: () => import('./iconset/SimpleIcons'),
  },
  {
    packageName: "@svgr-iconkit/typicons",
    name: "Typicons Icons",
    resources: () => import('./iconset/Typicons'),
  },
  {
    packageName: "@svgr-iconkit/flag-icons",
    name: "Flag Icons",
    colorize: false,
    resources: () => import('./iconset/FlagIcons'),
  },
  {
    packageName: "@svgr-iconkit/fontisto",
    name: "Fontisto",
    resources: () => import('./iconset/Fontisto'),
  },
  {
    packageName: "@svgr-iconkit/themify-icons",
    name: "ThemifyIcons",
    resources: () => import('./iconset/ThemifyIcons'),
  },
  {
    packageName: "@svgr-iconkit/flat-color-icons",
    name: "Flat Color Icons",
    resources: () => import('./iconset/FlatColorIcons'),
  },
  {
    packageName: "@svgr-iconkit/tabler-icons",
    name: "Tabler Icons",
    strokeEnabled: true,
    resources: () => import('./iconset/TablerIcons'),
  },
  {
    packageName: "@svgr-iconkit/xnix",
    name: "Xnix",
    resources: () => import('./iconset/XnixIcons'),
  },
  {
    packageName: "@svgr-iconkit/weather-icons",
    name: "Weather Icons",
    resources: () => import('./iconset/WeatherIcons'),
  },
  {
    packageName: "@svgr-iconkit/grommet-icons",
    name: "grommet-icons",
    resources: () => import('./iconset/grommet-icons'),
  }
];
