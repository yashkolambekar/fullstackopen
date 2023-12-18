const Note = ({notes}) => {
    return(
        <>
            {notes.map((note)  => <p key={note.id}>{note.content}</p>)}
        </>
    )
}

export default Note