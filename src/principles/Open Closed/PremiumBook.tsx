import Book from "./Book";
import {IBookInfo, IPremiumBookClickable} from './types';

interface IBookProps extends IBookInfo, IPremiumBookClickable {}

// We extend Book component to create a new component
  const PremiumBook = ({ title, image, onClickPremium }: IBookProps ) => {
    return (
      <Book title={title} image={image}>
        <button data-testid="premium-button" onClick={onClickPremium}>Add to cart +</button>
      </Book>
    );
  };
  
export default PremiumBook;
