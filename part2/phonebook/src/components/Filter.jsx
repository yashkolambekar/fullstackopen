function Filter({search, newSearch}) {
  return (
    <div>
      filter shown with{" "}
      <input type="text" value={search} onChange={newSearch} />
    </div>
  );
}

export default Filter;