import DropListMenu from '../menu-constructors/DropListMenu'
import $ from '../../utils/dom-core'
import { createMemuElem } from '../../utils/util'
import Editor from '../../editor/index'
import OperatorList from '../common/InlineBlockList'

class Operators extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('O'))
    const presetList = new OperatorList(editor.menusConfig.operators)
    const presetConf = {
      title: '插入运算符',
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value)
      },
    }
    super($elem, editor, presetConf)
  }
}

export default Operators
