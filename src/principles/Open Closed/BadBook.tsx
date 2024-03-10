import { IBookBad } from './types';
// import {IBookInfo, IFreeBookClickable, IPremiumBookClickable} from './types';

// interface BookProps extends IBookInfo, IFreeBookClickable, IPremiumBookClickable {}


// The code above violates this principle as there is a type check to render out a specific feature.
// export const Book = ({ title, image, type, onClickFree, onClickPremium }: BookProps ) => {
export const Book = ({ title, image, type, onClickFree, onClickPremium }: IBookBad ) => {
    const handleReadPremium = () => {
      // Some logic
      onClickPremium?.();
    };

    const handleReadFree = () => {
      // Some logic
      onClickFree?.();
    };

    return (
      <div>
        <img src={image} />
        <p>{title}</p>
        {type === "Premium" && (
          <button onClick={handleReadPremium}>Add to cart +</button>
        )}
        {type === "Free" && <button onClick={handleReadFree}>Read</button>}
      </div>
    );
  };