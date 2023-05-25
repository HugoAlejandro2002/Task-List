export const IconButton = ({ onClick, src }) => {
  return (
    <img
      className="rounded-sm p-1 fill-zinc-600"
      src={src}
      alt="cerrar modal"
      onClick={onClick}
    />
  );
};
