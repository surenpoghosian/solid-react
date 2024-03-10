import Book from "./Book";
import { IFreeBookClickable, IBookInfo } from "./types";

interface IBookProps extends IBookInfo, IFreeBookClickable {}

const FreeBook = ({ title, image,  onClickFree}: IBookProps ) => {
    return (
      <Book title={title} image={image}>
        <button onClick={onClickFree}>Read Free</button>
      </Book>
    );
  };

export default FreeBook;