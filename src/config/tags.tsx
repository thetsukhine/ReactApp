export const Tags = {
    ApplippliKey: { // アプリップリキー
        groupKey: "001",
        tagTypes: {
            Standalone: "1001", // スタンドアロン版
            Server: "1002", // サーバー版
            KeyUser: "2001", // キーユーザー
        }
    },
    ApplippliCloud: { // アプリップリクラウド
        groupKey: "002",
        tagTypes: {
            UserCount: "2002", // ユーザー数追加
            ApplippliKey: "2003", // アプリップリキーオプション
            IPAddress: "2004", // IPアドレス制限
        }
    },
    ApplippliDxPro: { // アプリップリDxPro
        groupKey: "003",
        tagTypes: {
            IPAddress: "2004", // IPアドレス制限
        }
    },
}
