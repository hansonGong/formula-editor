export declare type Presets = {
    label: string;
    value: string;
}[];
export declare type MenuType = {
    menus: string[];
    presets: Presets;
    operators: string[];
    greekLetters: string[];
    inequation: string[];
    calculus: string[];
    arrows: string[];
    trigonometric: string[];
};
/** 编辑器按钮配置 */
export declare const menusConfig: MenuType;
