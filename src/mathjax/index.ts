/**
 * 引入MathJax插件
 * @param {string} url
 */
export function injectMathJax(url: string) {
  if (window.MathJax) return
  const script = document.createElement('script')
  script.src = url
  script.async = true
  document.head.appendChild(script)
}

/**
 * 配置全局 MathJax
 * @param {FnType} callback Mathjax 加载完成的回调
 */
export function initMathJax(callback: FnType<void>) {
  if (window.MathJax) {
    callback && callback()
    return
  }
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$']],
      processEnvironments: true,
      processRefs: true,
    },
    options: {
      skipHtmlTags: ['noscript', 'style', 'textarea', 'pre', 'code'],
      ignoreHtmlClass: 'tex2jax_ignore',
    },
    startup: {
      pageReady: () => callback && callback(),
    },
    svg: {
      fontCache: 'global',
    },
  }
}

/**
 * 手动渲染公式
 * @param {HTMLElement} el 需要触发渲染的节点
 * @returns Promise
 */
export function renderFormula(el?: HTMLElement | HTMLElement[]): Promise<any> {
  if (!window.MathJax || !window.MathJax.typesetPromise) return Promise.reject()

  if (el && !Array.isArray(el)) {
    el = [el]
  }

  return window.MathJax.typesetPromise(el)
}
