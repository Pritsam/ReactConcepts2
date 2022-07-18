import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import React,{useState} from "react";

const AddUser=(props)=>{
    const[username, setUserName]=useState('')
    const[age, setAge]=useState('')
    const[error,setError]=useState()

    const usernameHandler=(event)=>{
        setUserName(event.target.value)
    }

    const ageHandler=(event)=>{
        setAge(event.target.value);
    }

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(username.length===0 || age.length===0){
            setError({
                title:"Invalid input",
                message:"Please enter a valid name and age!!! (non-empty values)"
            })
            return;
        }
        else if(age<1){
            setError({
                title:"Invalid input",
                message:"Please enter a valid age!!! (not less than 1)"
            })
            return;
        }
        props.onAddUser(username,age);
        setUserName('')
        setAge('')
    }

    const closeModal=()=>{
        setError(null)
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} closeModal={closeModal}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={usernameHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" value={age} onChange={ageHandler}/>
                    <Button type="Submit">Add User</Button>
                </form>
            </Card>
        </div>
    )

}

export default AddUser