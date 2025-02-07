import ContactItem from "./ContactItem";

function ContactsList({ contacts, onDelete }) {
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length === 0 ? (
        <p>no contacts yet!</p>
      ) : (
        <ul>
          {contacts.map((contact) => {
            return (
              <ContactItem
                key={contact.id}
                data={contact}
                onDelete={onDelete}
                contacts={contacts}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ContactsList;
