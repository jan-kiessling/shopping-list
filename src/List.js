export default function List({ initialItems , delete}) {
  return (
    <ul>
      {initialItems.map((item) => {
        return (
          <li>
            <button onClick={
                () => delete (article._id)

            }>{item.name.en}</button>
          </li>
        );
      })}
    </ul>
  );
}
