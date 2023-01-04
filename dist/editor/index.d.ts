import $, { DomElement, DomElementSelector } from '../utils/dom-core';
import { ConfigType } from '../config';
import { MenuType } from '../config/menus';
import CommandAPI from './command';
import SelectionAndRangeAPI from './selection';
import Menus from '../menus/index';
import Text from '../text/index';
declare class Editor {
    config: ConfigType;
    menusConfig: MenuType;
    $editorRootElem: DomElement;
    $toolbarElem: DomElement;
    $textLatexElem: DomElement;
    $textSvgElem: DomElement;
    cmd: CommandAPI;
    selection: SelectionAndRangeAPI;
    menus: Menus;
    latex: Text;
    t: FnType<string, string>;
    constructor();
    static $: typeof $;
    /**
     * 创建编辑器 DOM
     * @param rootSelector 公式弹窗附属DOM selector
     * @param callback mathJax加载完成时执行
     */
    create(rootSelector: DomElementSelector, callback?: FnType): void;
    /**
     * 二次编辑
     */
    append(value: string): void;
    /**
     * 初始化选区
     */
    initSelection(): void;
    /**
     * 销毁编辑器 DOM
     */
    destoryDom(): void;
}
export default Editor;
