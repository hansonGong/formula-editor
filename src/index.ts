// 样式植入
import './assets/style/common.less'
export * from './mathjax'
import formulaEditor from './editor'

// 检验是否浏览器环境
try {
  document
} catch (ex) {
  throw new Error('Please run in the browser environment!')
}

export default formulaEditor
