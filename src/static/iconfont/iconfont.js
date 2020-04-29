import { createGlobalStyle } from 'styled-components'

export const Iconfont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1588171063592'); /* IE9 */
    src: url('./iconfont.eot?t=1588171063592#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1588171063592') format('woff'),
    url('./iconfont.ttf?t=1588171063592') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1588171063592#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`