/*
 * @Author: zhaojing834
 * @Date: 2023-06-16 16:45:41
 * @LastEditors: zhaojing834
 * @LastEditTime: 2023-06-16 17:55:39
 * @FilePath: /react-low-code/.prettierrc.js
 * @Descripttion: prettier 配置文件
 */
module.exports = {
    // 剪头函数只有一个参数的时候可以忽略括号
    arrowParens: 'avoid',
    // 括号内部不要出现空格
    bracketSpacing: true,
    // 行结束符使用 Unix 格式
    endOfLine: 'lf',
    // true: Put > on the last line instead of at a new line
    // jsxBracketSameLine: false,  // jsxBracketSameLine is deprecated
    // 行宽
    printWidth: 100,
    // 换行方式, 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
    proseWrap: 'preserve',
    // 分号
    semi: false,
    // 使用单引号
    singleQuote: true,
    // 缩进
    tabWidth: 2,
    // 使用Tab缩进
    useTabs: false,
    // 后置逗号，多行对象、数组在最后一行增加逗号
    trailingComma: 'es5',
    parser: 'typescript'
}