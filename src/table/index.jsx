function formatNumber(num) {
  return num?.toLocaleString("en-US");
}

export const Table = ({ objects, neighborhoods }) => {
  return (
    <div className="content-card table-card">
      <div className="card-header">
        <div className="card-title-section">
          <h2>Hudud Obyektlari</h2>
          <p className="card-description">
            Tanlangan hudud bo'yicha obyektlar va xonadonlar
          </p>
        </div>
        <div className="card-controls">
          <a href="#map-section">
            <button id="showOnMap" className="btn btn-primary">
              <span className="icon-map"></span>
              Xaritada Ko'rsatish
            </button>
          </a>
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Nomi</th>
              {objects.map((obj) => (
                <th>{obj.name}</th>
              ))}
            </tr>
          </thead>
          <tbody id="objectsTableBody">
            {neighborhoods?.items?.map((ng) => (
              <tr>
                <td>{ng.__EMPTY_3}</td>
                {(() => {
                  const content = [];

                  for (let i = 4; i < Object.values(ng).length - 13; i += 4) {
                    content.push(Object.values(ng)[i]);
                  }

                  return content.map((each) => <td>{formatNumber(each)}</td>);
                })()}
                <td>{formatNumber(ng.__EMPTY_57)}</td>
                <td>{formatNumber(ng.__EMPTY_61)}</td>
                <td>{formatNumber(ng.__EMPTY_65)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
