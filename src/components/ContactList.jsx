import styles from "./ContactList.module.css";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(statusFilter.toLowerCase())
  );

  return (
    <>
      <h2>ContactList:</h2>
      {filteredContacts.length !== 0 ? (
        <div className={styles.phoneList}>
          {filteredContacts.map((contact) => (
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
