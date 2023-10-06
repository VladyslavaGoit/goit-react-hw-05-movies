export const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={event => onSubmit(event)}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
