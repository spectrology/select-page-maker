import {Link} from "src/app/models/theme-block-models"

export interface CardTheme {
    descriptors: {
        desc1: string,
        desc2: string,
        desc3: string
    },
    info: {
        info1: string,
        info2: string,
        info3: string
    }
}

export interface CardThemeOptions { 
    info: {
        info1icon: string,
        info2icon: string,
        info3icon: string,
    }
    links: {
        link1: Link,
        link2: Link,
        link3: Link
    }
}