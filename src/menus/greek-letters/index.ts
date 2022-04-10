import DropListMenu from '../menu-constructors/DropListMenu'
import $ from '../../utils/dom-core'
import { createMemuElem } from '../../utils/util'
import Editor from '../../editor/index'
import GreekLetterList from '../common/InlineBlockList'

class GreekLetters extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('\\Omega'))
    const presetList = new GreekLetterList(editor.menusConfig.greekLetters)
    const presetConf = {
      title: '插入希腊字母',
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value)
      },
    }
    super($elem, editor, presetConf)
  }
}

export default GreekLetters
