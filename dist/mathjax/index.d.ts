/**
 * 引入MathJax插件
 * @param {string} url
 */
export declare function injectMathJax(url: string): void;
/**
 * 配置全局 MathJax
 * @param {FnType} callback Mathjax 加载完成的回调
 */
export declare function initMathJax(callback: FnType<void>): void;
/**
 * 手动渲染公式
 * @param {HTMLElement} el 需要触发渲染的节点
 * @returns Promise
 */
export declare function renderFormula(el?: HTMLElement | HTMLElement[]): Promise<any>;
