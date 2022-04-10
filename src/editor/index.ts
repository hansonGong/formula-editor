import $, { DomElement, DomElementSelector } from '../utils/dom-core'
import { defaultConfig, ConfigType } from '../config'
import { menusConfig, MenuType } from '../config/menus'
import { injectMathJax, initMathJax } from '../mathjax'
import initDom from './init-dom'
import CommandAPI from './command'
import SelectionAndRangeAPI from './selection'
import initSelection from './init-selection'
import Menus from '../menus/index'
import Text from '../text/index'
import { hightlightHtml } from '../utils/util'

class Editor {
  public config: ConfigType
  public menusConfig: MenuType

  public $editorRootElem: DomElement
  public $toolbarElem: DomElement
  public $textLatexElem: DomElement
  public $textSvgElem: DomElement
  public cmd: CommandAPI
  public selection: SelectionAndRangeAPI
  public menus: Menus
  public latex: Text

  constructor() {
    this.config = defaultConfig
    this.menusConfig = menusConfig
    this.$editorRootElem = $('<div class="math-editor"></div>')
    this.$toolbarElem = $('<div class="me-menu"></div>')
    this.$textLatexElem = $('<div class="me-latex"></div>')
    this.$textSvgElem = $('<div class="me-svg"></div>')
    this.cmd = new CommandAPI(this)
    this.selection = new SelectionAndRangeAPI(this)
    this.menus = new Menus(this)
    this.latex = new Text(this)
  }

  // 暴露 $
  static $ = $

  /**
   * 创建编辑器 DOM
   * @param rootSelector 公式弹窗附属DOM selector
   * @param callback mathJax加载完成时执行
   */
  public create(rootSelector: DomElementSelector, callback?: FnType): void {
    // 加载 mathJax
    injectMathJax(this.config.mathJaxUrl)

    // 初始化菜单
    this.menus.init()

    // 初始化编辑区
    this.latex.init()

    // 生成DOM元素
    initDom(this)

    const $rootElem = $(rootSelector)
    $rootElem.text('资源加载中...')

    // mathJax加载完成
    const onReady = () => {
      $rootElem.text('').append(this.$editorRootElem)
      // 初始化选区，将光标定位到内容尾部
      this.initSelection()
      // 渲染菜单
      this.$toolbarElem.renderFormula()
      callback && callback()
    }

    // 配置MathJax
    initMathJax(onReady)
  }

  /**
   * 二次编辑
   */
  public append(value: string): void {
    const html = hightlightHtml(value)
    this.cmd.do(html)
  }

  /**
   * 初始化选区
   */
  public initSelection(): void {
    initSelection(this)
  }

  /**
   * 销毁编辑器 DOM
   */
  public destoryDom(): void {
    this.$editorRootElem.remove()
  }
}

export default Editor
