export interface HeaderProps {
    /**
     * ページのタイトル
     */
    title?: string
    /**
     * 戻る時のpath
     */
    path?: string
    /**
     * 言語
     */
    currentLang: string
    /**
     * home画面か
     */
    isHome?: boolean
}
