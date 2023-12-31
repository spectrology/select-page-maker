interface BasicCharacterInfo {
  name: string,
  bio: string,
  imgUrl: string
}

export interface Tag {
  category: string,
  tag: string
}

export interface Character {
  basic: BasicCharacterInfo,
  tags: Tag[]
}

export interface Category {
  title: string,
  tags: string[]
}