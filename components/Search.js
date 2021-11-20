import { SearchProvider, connectItems } from '@findify/react-connect';

export default function Search() {
  const Items = connectItems(({ items }) =>
    items.map(({ item }) => (
      <div key={item.hashCode()}>{item.get('title')}</div>
    ))
  );

  return (
    <SearchProvider key={process.env.FINDIFY_API_KEY}>
      <Items />
    </SearchProvider>
  );
}
