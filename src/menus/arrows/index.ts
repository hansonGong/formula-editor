import DropListMenu from '../menu-constructors/DropListMenu'
import $ from '../../utils/dom-core'
import { createMemuElem } from '../../utils/util'
import Editor from '../../editor/index'
import ArrowList from '../common/InlineBlockList'

class Arrows extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('\\rightarrow'))
    const presetList = new ArrowList(editor.menusConfig.arrows)
    const presetConf = {
      title: '插入箭头符号',
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value)
      },
    }
    super($elem, editor, presetConf)
  }
}

export default Arrows
