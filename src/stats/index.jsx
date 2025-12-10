export const Stats = ({ neighborhoods, users, households, underGuard }) => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-label text-center">Маҳаллалар</div>

        <div className="border-b border-color my-4!" />

        <div className="flex items-center justify-between">
          <div id="statMahallas" className="flex-1 border-r border-color">
            <p className="w-full text-center">Жами</p>
            <p className="stat-value text-center w-full">
              {neighborhoods?.total}
            </p>
          </div>
          <div id="statMahallas" className="flex-1">
            <p className="w-full text-center">Қўриқда</p>
            <p className="stat-value text-center w-full">
              {neighborhoods?.underGuard}
            </p>
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-label text-center">Аҳолилар</div>

        <div className="border-b border-color my-4!" />

        <div className="flex items-center justify-between">
          <div id="statMahallas" className="flex-1 border-r border-color">
            <p className="w-full text-center">Жами</p>
            <p className="stat-value text-center w-full">{users?.total}</p>
          </div>
          <div id="statMahallas" className="flex-1">
            <p className="w-full text-center">Қўриқда</p>
            <p className="stat-value text-center w-full">{users?.underGuard}</p>
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-label text-center">Хонадонлар</div>

        <div className="border-b border-color my-4!" />

        <div className="flex items-center justify-between">
          <div id="statMahallas" className="flex-1 border-r border-color">
            <p className="w-full text-center">Жами</p>
            <p className="stat-value text-center w-full">{households?.total}</p>
          </div>
          <div id="statMahallas" className="flex-1">
            <p className="w-full text-center">Қўриқда</p>
            <p className="stat-value text-center w-full">
              {households?.underGuard}
            </p>
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-label text-center">Қўриқда</div>

        <div className="border-b border-color my-4!" />

        <div className="flex items-center justify-between">
          <div id="statMahallas" className="flex-1 border-r border-color">
            <p className="w-full text-center">Жами</p>
            <p className="stat-value text-center w-full">{underGuard?.total}</p>
          </div>
          <div id="statMahallas" className="flex-1">
            <p className="w-full text-center">Қўриқда</p>
            <p className="stat-value text-center w-full">
              {underGuard?.underGuard}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
