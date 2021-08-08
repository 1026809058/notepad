export const root = true;
export const env = {
  node: true
};
export const extend = ['plugin:vue/essential', 'eslint:recommended'];
export const rules = {
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //强制使用单引号
  quotes: ['error', 'single'],
  //强制不使用分号结尾
  semi: ['error', 'never']
};
export const parserOptions = {
  parser: 'babel-eslint'
};

