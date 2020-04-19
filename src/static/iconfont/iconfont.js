import { createGlobalStyle } from 'styled-components'

export const Iconfont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1587047338190'); /* IE9 */
    src: url('./iconfont.eot?t=1587047338190#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1587047338190') format('woff'),
    url('./iconfont.ttf?t=1587047338190') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1587047338190#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`