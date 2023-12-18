const Form = ({search, setSearch}) => {

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

  return (
    <>
      Find countries: <input value={search} onChange={handleInput} />
    </>
  );
};

export default Form;
