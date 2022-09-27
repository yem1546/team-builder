import React, { useState } from "react"
import './App.css';
import Form from "./Form"
import Member from "./Member"

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const initialFriends = [
  {
    name: "Blane",
    email:"fake@fakeemail.com",
    role: ""
  },
  {
    name:"Christian",
    email:"faketoo@fakeemail.com",
    role:""
  }
]

export default function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [teamList, setTeamList] = useState(initialFriends)

  console.log(teamList)
  const submitForm = () => {
    const newEntry = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    const newTeam = [...teamList]
    newTeam.push(newEntry)
    setTeamList(newTeam)
  }

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form update={updateForm} submit={submitForm} values={formValues}/>
        {teamList.map((mem, i) => {
          return(
            <Member member={mem}/>
          )
        })}
      </header>
    </div>
  );
}

