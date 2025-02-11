export type OverviewContents = {
    id: string
    title: string
    date: number
    description: string
}

export type Contents = {
    source: string
    overview: OverviewContents
}
