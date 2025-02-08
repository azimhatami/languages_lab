import ContactItem from "./ContactItem";

function ContactsList({ contacts, onDelete }) {
  return (
    <div className="w-full">
      <h3 className="text-[#304ffe] text-[1.5rem] !my-4 font-semibold">
        Contacts List
      </h3>
      {contacts.length === 0 ? (
        <p className="text-gray-600 font-semibold text-center text-lg/15 bg-[#f5f5f5] h-[4rem] rounded-lg">
          no contacts yet!
        </p>
      ) : (
        <ul className="border-2 border-[#f5f5f5] flex flex-col gap-y-5">
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
