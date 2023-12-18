const Notification = ({message, mood,}) => {
    if(message){
        if(mood){
            return(
                <>
                    <div style={{color:"green", border: "1px solid green", background: "lightgrey", padding: "20px", marginBottom: "10px", borderRadius:"10px"}}>
                        {message}
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <div style={{color:"red", border: "1px solid red",background: "lightgrey", padding: "20px", marginBottom: "10px", borderRadius:"10px"}}>
                        {message}
                    </div>
                </>
            )
        }
    }else{
        return(
            <>
            </>
        )
    }
}

export default Notification