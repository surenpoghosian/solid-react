const Book = ({ id, name, imageUrl, createdAt }: {id: string, name: string, imageUrl: string, createdAt: string }) => {
    return (
      <div key={id}>
        <img src={imageUrl}/>
        <p>{name}</p>
        <p>{createdAt}</p>
      </div>
    );
  };

export default Book;