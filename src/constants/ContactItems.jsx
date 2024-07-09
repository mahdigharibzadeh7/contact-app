import Email from "../assets/svg/email.svg";
import Phone from "../assets/svg/phone.svg";
import Trash from "../assets/svg/trash.svg";

function ContactItems({
  data: { id, name, lastName, email, phone },
  removeHandler,
}) {
  return (
    <ul
      key={id}
      className="grid grid-cols-12 justify-items-center my-5 mx-10 bg-zinc-200 rounded-lg py-3"
    >
      <li className="col-span-3">{`${name} ${lastName}`}</li>
      <li className="col-span-4 flex self-center gap-x-2">
        <img className="w-5" src={Email} alt="email svg" />
        {email}
      </li>
      <li className="col-span-3 gap-x-2 flex self-center">
        <img className="w-5" src={Phone} alt="phone svg" />
        {phone}
      </li>
      <li className="col-span-2">
        <img
          onClick={() => removeHandler(id)}
          className="w-5"
          src={Trash}
          alt="trash svg"
        />
      </li>
    </ul>
  );
}

export default ContactItems;
