// 样式植入
import './assets/style/common.less'
export * from './mathjax'
import formulaEditor from './editor'

// 检验是否浏览器环境
try {
  document
} catch (ex) {
  throw new Error('请在浏览器环境下运行')
}

export default formulaEditor
