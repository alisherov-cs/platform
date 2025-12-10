export const Stats = ({ neighborhoods, users, households }) => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-label">Jami Mahallalar</div>
        <div className="stat-value" id="statMahallas">
          {neighborhoods}
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Jami Aholi</div>
        <div className="stat-value" id="statPopulation">
          {users}
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Jami Xonadon</div>
        <div className="stat-value" id="statHouseholds">
          {households}
        </div>
      </div>
    </div>
  );
};
