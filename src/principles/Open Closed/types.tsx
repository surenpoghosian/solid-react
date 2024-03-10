export interface IBookBad {
    title?: string
    image?: string
    type?: string
    onClickFree?: () => void;
    onClickPremium?: () => void;
    onClick?: () => void;
}

export interface IBookInfo {
    title?: string
    image?: string
    type?: string
}

export interface IFreeBookClickable {
    onClickFree?: () => void;
}

export interface IPremiumBookClickable {
    onClickPremium?: () => void;
}

export interface IClickable {
    onClick?: () => void;
}

export interface IBookWithChildren {
    children?: React.ReactNode;
}

export default interface IBook extends IBookWithChildren, IFreeBookClickable, IPremiumBookClickable, IClickable {}

// onClickFree?: () => void
// onClickPremium?: () => void
// onClick?: () => void
// children?: React.ReactNode
