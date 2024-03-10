import {IBookInfo, IBookWithChildren} from './types';

interface BookProps extends IBookInfo, IBookWithChildren {}

const Book = ({ title, image, children }: BookProps ) => {
    return (
        <div>
        <img src={image} />
        <p>{title}</p>
        {children}
      </div>
    );
};

export default Book;