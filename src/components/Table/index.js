import MaterialIcon from 'material-icons-react';

function Table(props) {

  return (
    <div className="container">
      <table className="table table-striped table-hover justify-content-center">

      {/* TABLE HEAD */}
      <thead className="thead-dark">
        <tr>
          <th scope="col">
            <MaterialIcon icon="face" color="white" size="medium" />
          </th>
          <th scope="col" onClick={props.sort}>First
            <MaterialIcon icon="swap_vert" color="white" />
          </th>
          <th scope="col">Last
            <MaterialIcon icon="swap_vert" color="white" />
          </th>
          <th scope="col" onClick={props.sort}>Email
            <MaterialIcon icon="swap_vert" color="white" />
          </th>
          <th scope="col">Phone
            <MaterialIcon icon="swap_vert" color="white" />
          </th>
        </tr>
      </thead>

      {/* TABLE CONTENTS */}
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
  </div>
  )
}

export default Table;