export default function CategoryCard(props) {
  return (
    <article className="flex-1">
      <figure className="w-full max-w-[195px] h-full max-h-[250px] min-w-[180px] relative">
        {props.isNew === true && (
          <p className="absolute bg-pink-500 top-0 right-0 m-2  py-1 px-2 text-xs rounded-lg text-black font-bold">
            NEW
          </p>
        )}
        <img
          className="object-cover bg-center h-full "
          src={props.img || "https://picsum.photos/500/500"}
          alt=""
        />
      </figure>
      <p>{props.name || "desconocido"}</p>
      <p>{props.viewers || 0}K espectadores</p>
    </article>
  );
}
