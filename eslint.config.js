import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
        "no-unused-vars": "off", // 사용하지 않는 변수 경고 비활성화
        "react/react-in-jsx-scope": "off", // React 17+에서는 필요 없음
        "react/prop-types": "off", // TypeScript 사용 시 prop-types 불필요
        "@typescript-eslint/no-unused-vars": "off", // TypeScript에서도 사용하지 않는 변수 경고 비활성화
        "@typescript-eslint/no-explicit-any": "off", // any 타입 허용
        "react/no-unknown-property": "warn", // ⚠️ 잘못된 JSX 속성 경고만 표시
        "react/display-name": "off", // 익명 함수형 컴포넌트 경고 비활성화
        "@typescript-eslint/explicit-module-boundary-types": "off", // 함수 반환 타입 명시 비활성화
    },
  },
)
