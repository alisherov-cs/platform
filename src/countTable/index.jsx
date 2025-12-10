export const CountTable = ({ activeDistrict, usersCount, householdCount }) => {
  return (
    <div className="content-card table-card">
      <div className="card-header">
        <div className="card-title-section">
          <h2>Xonadonlar Statistikasi</h2>
          <p className="card-description">Hudud bo'yicha umumiy ma'lumotlar</p>
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Hudud</th>
              <th>Xonadonlar</th>
              <th>Aholi</th>
            </tr>
          </thead>
          <tbody id="objectsTableBody">
            <tr>
              <td>{activeDistrict}</td>
              <td>{householdCount}</td>
              <td>{usersCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
