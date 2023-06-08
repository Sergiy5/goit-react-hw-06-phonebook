
import { filterContact } from "components/Redux/Contacts/contactsReducer";
import { useDispatch, useSelector } from "react-redux";
import { WraperFilter, Label, Input } from "./filter.styled"

const Filter = () => {
    const dataFilter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    return (
      <WraperFilter>
        <Label htmlFor="labelFilter">Filter by name</Label>
        <Input type="text" value={dataFilter} onChange={dispatch(filterContact())} />
      </WraperFilter>
    );}

export default Filter