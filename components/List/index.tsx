type ListProps<T> = {
  of: T[];
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ of, renderItem }: ListProps<T>) {
  return of.map(renderItem);
}

export default List;
