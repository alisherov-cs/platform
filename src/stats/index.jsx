import { useGetStatistics } from "../api/statistics";

export const Stats = ({
  neighborhoods,
  users,
  buildingHouseholds,
  houses,
  households,
  underGuard,
}) => {
  const { data: statistics } = useGetStatistics();

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-label text-center">Маҳаллалар</div>

        <div className="border-b border-color my-4!" />

        <div className="flex items-center justify-between">
          <div id="statMahallas" className="flex-1">
            <p className="w-full text-center">Жами</p>
            <p className="stat-value text-center w-full">
              {/* {neighborhoods?.total} */}
              {/* 531 */}
              {statistics?.neighborhood?.total}
            </p>
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-label text-center">Обектлар</div>

        <div className="border-b border-color my-4!" />

        <div className="flex items-center justify-between">
          <div id="statMahallas" className="flex-1 border-r border-color">
            <p className="w-full text-center">Жами</p>
            <p className="stat-value text-center w-full">
              {/* {users?.total} */}
              {statistics?.objects?.total}
            </p>
          </div>
          <div id="statMahallas" className="flex-1">
            <p className="w-full text-center">Қўриқда</p>
            <p className="stat-value text-center w-full">
              {/* {users?.underGuard} */}
              {statistics?.objects?.guard}
            </p>
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-label text-center">Қўриқда</div>

        <div className="border-b border-color my-4!" />

        <div className="flex items-center justify-between">
          <div id="statMahallas" className="flex-1 border-r border-color">
            <p className="w-full text-center">Обектлар</p>
            <p className="stat-value text-center w-full">
              {/* {underGuard?.total} */}
              {statistics?.underGuard?.total}
            </p>
          </div>
          <div id="statMahallas" className="flex-1">
            <p className="w-full text-center">Хонадонлар</p>
            <p className="stat-value text-center w-full">
              {/* {underGuard?.underGuard} */}
              {statistics?.underGuard?.guard}
            </p>
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-label text-center">Кўп қаватли уйлар</div>

        <div className="border-b border-color my-4!" />

        <div className="flex items-center justify-between">
          <div id="statMahallas" className="flex-1 border-r border-color">
            <p className="w-full text-center">Жами</p>
            <p className="stat-value text-center w-full">
              {/* {buildingHouseholds?.total} */}
              {statistics?.apartments?.total}
            </p>
          </div>
          <div id="statMahallas" className="flex-1">
            <p className="w-full text-center">Қўриқда</p>
            <p className="stat-value text-center w-full">
              {/* {buildingHouseholds?.underGuard} */}
              {statistics?.apartments?.guard}
            </p>
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-label text-center">Хонадонлар (Кўп қаватли)</div>

        <div className="border-b border-color my-4!" />

        <div className="flex items-center justify-between">
          <div id="statMahallas" className="flex-1 border-r border-color">
            <p className="w-full text-center">Жами</p>
            <p className="stat-value text-center w-full">
              {/* {households?.total} */}
              {statistics?.households?.total}
            </p>
          </div>
          <div id="statMahallas" className="flex-1">
            <p className="w-full text-center">Қўриқда</p>
            <p className="stat-value text-center w-full">
              {/* {households?.underGuard} */}
              {statistics?.households?.guard}
            </p>
          </div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-label text-center">Ховлилар</div>

        <div className="border-b border-color my-4!" />

        <div className="flex items-center justify-between">
          <div id="statMahallas" className="flex-1 border-r border-color">
            <p className="w-full text-center">Жами</p>
            <p className="stat-value text-center w-full">
              {/* {houses?.total} */}
              {statistics?.houses?.total}
            </p>
          </div>
          <div id="statMahallas" className="flex-1">
            <p className="w-full text-center">Қўриқда</p>
            <p className="stat-value text-center w-full">
              {/* {houses?.underGuard} */}
              {statistics?.houses?.guard}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
