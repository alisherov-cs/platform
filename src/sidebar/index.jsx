export const Sidebar = ({ districts, active, onChange }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">Hududlar</h3>
        <p className="sidebar-description">Shahar va tumanlar ro'yxati</p>
      </div>
      <div className="district-list" id="districtList">
        {districts.map((item) => (
          <div
            onClick={() => onChange(item.id)}
            className={`district-item ${active === item.id ? "active" : ""}`}
            data-district="Urganch shahri"
          >
            {item.name}
          </div>
        ))}
      </div>
    </aside>
  );
};
