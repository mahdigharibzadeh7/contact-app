import ContactItems from "../constants/ContactItems";

function ContactList({ contacts, removeHandler }) {
  return (
    <div>
      <div className="mx-64 mt-12 text-blue-700 font-bold text-3xl">
        Contact List
      </div>
      <div className="mx-64 mt-5 rounded-xl shadow-2xl">
        {contacts.length !== 0 ? (
          <div className="w-full py-5">
            {contacts.map((contact) => (
              <ContactItems
                key={contact.id}
                data={contact}
                removeHandler={removeHandler}
              />
            ))}
          </div>
        ) : (
          <div className="text-center font-bold text-xl py-16 bg-zinc-200 rounded-xl">
            No Contacts yet!
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactList;
