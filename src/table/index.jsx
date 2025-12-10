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
              <th className="sticky">Nomi</th>
              {objects.map((obj) => (
                <th>{obj.name}</th>
              ))}
            </tr>
          </thead>
          <tbody id="objectsTableBody" className="text-center">
            {neighborhoods?.items?.map((ng) => (
              <tr>
                <td className="p-0! h-40">
                  <div className="flex items-center h-full! justify-between">
                    <span className="p-3! pr-0!">{ng.__EMPTY_3}</span>
                    <div className="h-full! border border-color border-b-0! flex flex-col items-center justify-center gap-y-5">
                      <div className="px-4! pt-4! flex-1!">Жами</div>
                      <div className="border-b border-color w-full" />
                      <div className="px-4! pb-4! flex-1! h-1/2!">Қўриқда</div>
                    </div>
                  </div>
                </td>
                {(() => {
                  const content = [];

                  for (let i = 4; i < Object.values(ng).length - 13; i += 4) {
                    content.push([
                      Object.values(ng)[i],
                      Object.values(ng)[i + 2],
                    ]);
                  }

                  return content.map((each) => (
                    <td className="p-0! h-40 border-r border-color">
                      <div className="flex flex-col h-full">
                        <div className="flex-1 text-center flex items-center justify-center">
                          {formatNumber(each[0])}
                        </div>
                        <div className="border-b border-color w-full" />
                        <div className="flex-1 text-center flex items-center justify-center">
                          {formatNumber(each[1])}
                        </div>
                      </div>
                    </td>
                  ));
                })()}
                <td className="p-0! h-40 border-r border-color">
                  <div className="flex flex-col h-full">
                    <div className="flex-1 text-center flex items-center justify-center">
                      {formatNumber(ng.__EMPTY_57)}
                    </div>
                    <div className="border-b border-color w-full" />
                    <div className="flex-1 text-center flex items-center justify-center">
                      {formatNumber(ng.__EMPTY_59)}
                    </div>
                  </div>
                </td>
                <td className="p-0! h-40 border-r border-color">
                  <div className="flex flex-col h-full">
                    <div className="flex-1 text-center flex items-center justify-center">
                      {formatNumber(ng.__EMPTY_61)}
                    </div>
                    <div className="border-b border-color w-full" />
                    <div className="flex-1 text-center flex items-center justify-center">
                      {formatNumber(ng.__EMPTY_63)}
                    </div>
                  </div>
                </td>
                <td className="p-0! h-40 border-r border-color">
                  <div className="flex flex-col h-full">
                    <div className="flex-1 text-center flex items-center justify-center">
                      {formatNumber(ng.__EMPTY_65)}
                    </div>
                    <div className="border-b border-color w-full" />
                    <div className="flex-1 text-center flex items-center justify-center">
                      {formatNumber(ng.__EMPTY_67)}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
