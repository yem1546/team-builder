
const Form = (props) => {

  const { values, update, submit } = props

  const onChange = evt => {
    const name = evt.target.name
    const { value } = evt.target
    update(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={onChange}
          />
        <input 
        type="email"
        name="email"
        placeholder="email"
        value={values.email}
        onChange={onChange}
        />
        <select name="role" onChange={onChange}>
          <option value="">---Select Role---</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Orc">Orc</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;