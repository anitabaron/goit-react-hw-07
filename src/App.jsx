import "./App.css";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilter(""));
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
