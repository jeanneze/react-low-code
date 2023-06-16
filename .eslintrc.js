/*
 * @Author: zhaojing834
 * @Date: 2023-06-16 17:59:57
 * @LastEditors: zhaojing834
 * @LastEditTime: 2023-06-16 18:07:16
 * @FilePath: /react-low-code/.eslintrc.js
 * @Descripttion: 业务描述
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {},
}
