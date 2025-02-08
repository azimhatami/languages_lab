function ContactItem({
  data: { id, firstName, lastName, email, phone },
  onDelete,
}) {
  return (
    <li
      key={id}
      className="*:basis-0 *:grow-1 flex items-center justify-between bg-[#f5f5f5] !p-3 rounded-lg"
    >
      <p>
        {firstName} {lastName}
      </p>
      <p>
        <span className="inline-block !mr-3 bg-white text-[1.2rem] w-[35px] h-[35px] rounded-full text-center">
          &#128233;
        </span>{" "}
        {email}
      </p>
      <p>
        <span className="inline-block !mr-3 bg-white text-[1.2rem] w-[35px] h-[35px] rounded-full text-center">
          &#128222;
        </span>{" "}
        {phone}
      </p>
      <button
        className="!basis-auto !grow-0 w-[2rem] h-[2rem] rounded-full bg-white text-lg outline-none cursor-pointer hover:text-xl"
        onClick={() => onDelete(id)}
      >
        🗑️
      </button>
    </li>
  );
}

export default ContactItem;
