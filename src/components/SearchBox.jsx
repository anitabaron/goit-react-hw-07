import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../redux/selectors";
import { setFilter } from "../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
    console.log("filter: ", e.target.value);
  };
  return (
    <>
      <h2>Search:</h2>
      <div className={styles.form}>
        {/* <label htmlFor={searchFieldId}></label> */}
        <label></label>
        Find contacts by name
        <input
          type="text"
          onChange={handleFilterChange}
          value={filter}
          // id={searchFieldId}
        />
      </div>
    </>
  );
};

export default SearchBox;
