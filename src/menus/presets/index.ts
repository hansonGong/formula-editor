import DropListMenu from '../menu-constructors/DropListMenu'
import $ from '../../utils/dom-core'
import { createMemuElem } from '../../utils/util'
import Editor from '../../editor/index'
import PresetList from '../common/PresetList'

class Presets extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('f_{(x)}'))
    const presetList = new PresetList(editor.menusConfig.presets)
    const presetConf = {
      width: 252,
      title: '插入预设公式',
      type: 'list',
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value)
      },
    }
    super($elem, editor, presetConf)
  }
}

export default Presets
