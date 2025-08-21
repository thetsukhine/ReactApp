import {render, screen} from "@testing-library/react";
import ErrorAlert from "../ErrorAlert";
import React from "react";

describe('ErrorAlertコンポーネントのテスト', () => {
    /*-- エラー無しの場合 --*/
    test('エラーアラートの項目が存在しないこと', () => {
        // コンポーネントを描画
        render(<ErrorAlert errors={{}}/>);
        // 要素の取得
        const errorAlertDom = screen.queryByTestId('error-alert');
        // テスト
        // エラーアラート要素が存在しないことを確認
        expect(errorAlertDom).toBeNull();
    })

    /*--  エラーを設定している場合 --*/
    test('エラーアラートの項目が存在すること', () => {
        // コンポーネントを描画
        render(<ErrorAlert errors={{email: "message"}}/>);
        // 要素の取得
        const errorAlertDom = screen.queryByTestId('error-alert');
        // テスト
        // エラーアラート要素が存在することを確認
        expect(errorAlertDom).toBeTruthy();
    })
})
