# CodeLens Toggle

VS Codeのステータスバーに「CodeLens」の有効/無効を切り替えるボタンを追加する拡張機能です。

## 機能

- **ステータスバーボタン**: ワンクリックで `editor.codeLens` 設定を切り替えます。
- **状態表示**: 現在のCodeLensの状態（On/Off）をアイコンとテキストで表示します。
- **設定同期**: 設定画面などでCodeLensの設定が変更された場合も、ステータスバーの表示が自動的に更新されます。

## 使い方

1. 拡張機能をインストールすると、ステータスバーの右側に `CodeLens: On`（または `Off`）という項目が表示されます。
2. クリックすると、CodeLensの表示/非表示が切り替わります。

## 開発

### ビルド

```bash
npm install
npm run compile
```

### VSIXパッケージの作成

```bash
npx vsce package
```

### デバッグ

F5キーを押してデバッグを開始します。
