export interface Tag {
    id: number;
    tagName: string;
    tagCategory: string;
    groupKey: string;
    parentTags?: Tag[]
}