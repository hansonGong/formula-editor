import DropListMenu from '../menu-constructors/DropListMenu'
import $ from '../../utils/dom-core'
import { createMemuElem } from '../../utils/util'
import Editor from '../../editor/index'
import TrigonometricList from '../common/InlineBlockList'

class Trigonometric extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('\\sin \\theta'))
    const presetList = new TrigonometricList(
      editor.menusConfig.trigonometric,
    )
    const presetConf = {
      title: '插入三角函数',
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value)
      },
    }
    super($elem, editor, presetConf)
  }
}

export default Trigonometric
