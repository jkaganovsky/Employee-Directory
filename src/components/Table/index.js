import MaterialIcon from 'material-icons-react';

function Table(props) {
  return (
    <table className="table table-striped table-hover justify-content-center">

    <thead className="thead-dark">
      <tr>
        <th scope="col">
          <MaterialIcon icon="face" color="white" size="medium" />
        </th>
        <th scope="col">First
          <MaterialIcon icon="swap_vert" color="white" />
        </th>
        <th scope="col">Last
          <MaterialIcon icon="swap_vert" color="white" />
        </th>
        <th scope="col">Email
          <MaterialIcon icon="swap_vert" color="white" />
        </th>
        <th scope="col">Phone
          <MaterialIcon icon="swap_vert" color="white" />
        </th>
      </tr>
    </thead>

    <tbody>
      {props.randomUser.length > 0 ? props.randomUser.map(user => {
        return(
          <tr>
            <th scope="row"><img src={user.picture.thumbnail} alt="Profile Thumbnail" /></th>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        )
      }):
        <tr>
          <th scope="row"></th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      }
    </tbody>
  </table>
  )
}

export default Table;