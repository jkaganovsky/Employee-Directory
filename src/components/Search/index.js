import MaterialIcon from 'material-icons-react';

function Search(props) {
  return (
    <form className="form-inline my-2 my-lg-0 justify-content-end">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={props.employeeSearch} onChange={props.nameSearch} />
      <MaterialIcon icon="search" />
    </form>
  )
}

export default Search;