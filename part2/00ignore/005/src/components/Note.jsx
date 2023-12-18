const Note = ({ note, toggleImportance }) => {

  let label = note.important ? "make Not important" : "make important";

  return (
    <>
      <li className='note'>{note.content}</li>
      <button onClick={toggleImportance}>{label}</button>
      <br />
      <br />
    </>
  );
};

export default Note;
