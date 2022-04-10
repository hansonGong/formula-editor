import DropListMenu from '../menu-constructors/DropListMenu'
import $ from '../../utils/dom-core'
import { createMemuElem } from '../../utils/util'
import Editor from '../../editor/index'
import CalculusList from '../common/InlineBlockList'

class Calculus extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('\\Sigma'))
    const presetList = new CalculusList(editor.menusConfig.calculus)
    const presetConf = {
      width: 244,
      title: '插入微积分',
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value)
      },
    }
    super($elem, editor, presetConf)
  }
}

export default Calculus
