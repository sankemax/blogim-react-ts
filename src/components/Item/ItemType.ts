export interface ItemType {
    type: 'Item' | 'Update'
    id: number
    title: string
    blogTitle: string
    link: string
    description: string
    pubdate: string
    comments: string[]
    categories: string[]
    feedUrl: string
    domain: string
    author: string
}
