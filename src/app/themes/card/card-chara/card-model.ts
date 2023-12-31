import { Link } from "src/app/models/theme-block-models"

class Descriptors {
    desc1: string = "";
    desc2: string = "";
    desc3: string = ""
}

class Info {
    info1: string = "";
    info2: string = "";
    info3: string = "";
}

class ThreeLinks {
    link1: Link = new Link();
    link2: Link = new Link();
    link3: Link = new Link()
}

export class CardTheme {
    descriptors: Descriptors = new Descriptors();
    info: Info = new Info();
    links: ThreeLinks = new ThreeLinks();
}

class ThreeIcons {
    info1icon: string = "fa-avatar";
    info2icon: string = "fa-avatar";
    info3icon: string = "fa-avatar"
}

export class CardThemeOptions {
    info: ThreeIcons = new ThreeIcons()
}