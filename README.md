# Todo App

TypeScript + React + Vite + Tailwind CSSで構築されたモダンなTODOアプリケーションです。

## 機能

- **TODO管理**
  - TODO追加
  - TODO表示
  - TODO完了トグル（チェックボックス）
  - TODO削除
  - TODO編集（ダブルクリックでインライン編集）

- **フィルター機能**
  - すべて
  - 未完了
  - 完了

- **その他の機能**
  - 作成日時の表示
  - localStorageによるデータ永続化
  - レスポンシブデザイン
  - アクセシビリティ対応

## 技術スタック

- **フレームワーク**: React 18
- **言語**: TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **データ保存**: localStorage

## セットアップ

### 依存パッケージのインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

アプリケーションは http://localhost:5173/ で起動します。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

### プレビュー

```bash
npm run preview
```

ビルドされたアプリケーションをプレビューできます。

## プロジェクト構成

```
src/
├── components/          # Reactコンポーネント
│   ├── TodoForm.tsx    # TODO追加フォーム
│   ├── TodoItem.tsx    # 個別TODO表示・編集
│   ├── TodoList.tsx    # TODOリスト表示
│   └── TodoFilter.tsx  # フィルター切り替え
├── hooks/              # カスタムフック
│   ├── useLocalStorage.ts  # localStorage操作
│   └── useTodos.ts     # TODO操作ロジック
├── types/              # TypeScript型定義
│   └── todo.ts         # Todoデータモデル
├── App.tsx             # メインコンポーネント
├── main.tsx            # エントリーポイント
└── index.css           # Tailwind設定
```

## 使い方

1. **TODOを追加**: 上部のフォームにテキストを入力して「追加」ボタンをクリック、またはEnterキーを押します
2. **TODOを完了**: チェックボックスをクリックして完了状態を切り替えます
3. **TODOを編集**: TODOのテキストをダブルクリックして編集モードに入り、編集後Enterキーを押すか、フォーカスを外して確定します
4. **TODOを削除**: 「削除」ボタンをクリックします
5. **フィルター**: 「すべて」「未完了」「完了」ボタンでTODOを絞り込みます

## データの永続化

TODOデータはブラウザのlocalStorageに保存されます。ブラウザを閉じても、データは保持されます。

## ブラウザ対応

モダンブラウザ（Chrome、Firefox、Safari、Edge）の最新版に対応しています。

## ライセンス

MIT
