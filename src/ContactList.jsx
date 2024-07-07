import Email from "./assets/svg/email.svg";
import Phone from "./assets/svg/phone.svg";
import Trash from "./assets/svg/trash.svg";

function ContactList({ contacts, removeHandler }) {
  console.log(contacts);

  return (
    <div>
      <div className="mx-64 mt-12 text-blue-700 font-bold text-3xl">
        Contact List
      </div>
      <div className="mx-64 mt-5 rounded-xl shadow-2xl">
        {contacts.length !== 0 ? (
          <div className="w-full py-5">
            {contacts.map((Contact) => (
              <div
                key={Contact.id}
                className="grid grid-cols-12 justify-items-center my-5 mx-10 bg-zinc-200 rounded-lg py-3"
              >
                <div className="col-span-3">{`${Contact.name} ${Contact.lastName}`}</div>
                <div className="col-span-4 flex self-center gap-x-2">
                  <img className="w-5" src={Email} alt="email svg" />
                  {Contact.email}
                </div>
                <div className="col-span-3 gap-x-2 flex self-center">
                  <img className="w-5" src={Phone} alt="phone svg" />
                  {Contact.phone}
                </div>
                <div className="col-span-2">
                  <img
                    onClick={() => removeHandler(Contact.id)}
                    className="w-5"
                    src={Trash}
                    alt="trash svg"
                  />
                </div>
              </div>
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
