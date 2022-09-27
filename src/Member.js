
const Member = (props) => {
  const {member} = props
  return (
    <div>
      {`${member.name} ${member.email} ${member.role}`}
    </div>
  )
}

export default Member