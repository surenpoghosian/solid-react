export function Book({id, name, imageUrl, createdAt}: {id: string, name: string, imageUrl: string, createdAt: string}){
    return (
        <div key={id}>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <img src={imageUrl} />
            <h1>{createdAt}</h1>
        </div>
    )
}