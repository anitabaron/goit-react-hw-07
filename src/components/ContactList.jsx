import styles from "./ContactList.module.css";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log("Contacts in ContactList:", contacts);

  // const statusFilter = useSelector(selectFilter);

  // const filteredContacts = (contacts || []).filter(
  //   (contact) =>
  //     contact &&
  //     contact.name &&
  //     contact.name.toLowerCase().includes(statusFilter.toLowerCase())
  // );

  return (
    <>
      <h2>ContactList:</h2>
      {contacts.length !== 0 ? (
        <div className={styles.phoneList}>
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </div>
      ) : (
        <p>Sorry, there are no results.</p>
      )}
    </>
  );
};

export default ContactList;
