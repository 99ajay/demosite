function Student(props){
    return(
        <div style={{backgroundColor : "blue",margin : 10}}>
            <h1>Hello {props.name}</h1>
            <h2>Email: {props.mail}</h2>
            <h3>Address : {props.address.village} , {props.address .post}</h3>
        </div>
    );
}

export default Student;