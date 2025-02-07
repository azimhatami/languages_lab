function ContactItem({
  data: { id, firstName, lastName, email, phone },
  onDelete,
}) {
  return (
    <li key={id} className="flex items-center justify-evenly">
      <p>
        {firstName} {lastName}
      </p>
      <p>
        <span>&#128233;</span> {email}
      </p>
      <p>
        <span>&#128222;</span> {phone}
      </p>
      <button onClick={() => onDelete(id)}>🗑️</button>
    </li>
  );
}

export default ContactItem;
