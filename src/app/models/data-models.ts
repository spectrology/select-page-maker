interface BasicCharacterInfo {
  name: string,
  bio: string,
  imgUrl: string
}

interface Tag {
  category: string,
  tag: string
}

interface Character {
  basic: BasicCharacterInfo,
  tags: Tag[]
}

interface Category {
  title: string,
  tags: string[]
}