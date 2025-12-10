import * as XLSX from "xlsx";
import { useEffect, useMemo, useState } from "react";
import { Header } from "./header";
import { Stats } from "./stats";
import { Sidebar } from "./sidebar";
import { Table } from "./table";
import Map from "./map";
import { CountTable } from "./countTable";

function formatNumber(num) {
  return num?.toLocaleString("en-US");
}

function groupById(array) {
  if (array.length === 0) return [];

  const result = [];
  let currentGroup = [array[0]];

  for (let i = 1; i < array.length; i++) {
    // If current id is less than or equal to previous id, start new group
    if (array[i].__EMPTY_2 <= array[i - 1].__EMPTY_2) {
      result.push(currentGroup);
      currentGroup = [array[i]];
    } else {
      currentGroup.push(array[i]);
    }
  }

  // Push the last group
  result.push(currentGroup);

  return result;
}

function App() {
  const [objects, setObjects] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [active, setActive] = useState(1);
  const [neighborhoodsCount, setNeighborhoodsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [householdCount, setHouseholdCount] = useState(0);
  const [underGuard, setUnderGuard] = useState(0);

  const usersByDistrict = useMemo(() => {
    return neighborhoods
      .find((ng) => ng.districtId === active)
      ?.items?.reduce((acc, item) => item.__EMPTY_61 + acc, 0);
  }, [active, neighborhoods]);

  const hosueholdsByDistrict = useMemo(() => {
    return neighborhoods
      .find((ng) => ng.districtId === active)
      ?.items?.reduce((acc, item) => item.__EMPTY_65 + acc, 0);
  }, [active, neighborhoods]);

  useEffect(() => {
    fetch("/file.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const worksheetName = workbook.SheetNames[1];
        const worksheet = workbook.Sheets[worksheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        console.log({ jsonData });
        const objects = Object.values(jsonData[0])
          .slice(4)
          .map((item, i) => ({ id: i + 1, name: item }));

        setObjects(objects);

        const districts = jsonData
          .filter((item, i) =>
            ["ўрнатилган", "Жами"].includes(
              Object.values(jsonData[i - 1] ?? {})[0]
            )
          )
          .slice(1)
          .map((item) => Object.values(item)[1])
          .filter(Boolean)
          .map((item, i) => ({ id: i + 1, name: item }));

        setDistricts(districts);
        console.log({ districts });

        const neighborhoods = groupById(
          jsonData.filter((item) => item.__EMPTY_2 >= 1)
        ).map((each, i) => ({
          districtId: districts[i]?.id,
          items: each,
        }));

        setNeighborhoods(neighborhoods);
        console.log({ neighborhoods });

        const worksheetNameStats = workbook.SheetNames[0];
        const worksheetStats = workbook.Sheets[worksheetNameStats];
        const jsonDataStats = XLSX.utils.sheet_to_json(worksheetStats);

        console.log({ jsonDataStats });
        setNeighborhoodsCount(
          jsonDataStats[jsonDataStats.length - 1].__EMPTY_2
        );
        setUsersCount(jsonDataStats[jsonDataStats.length - 1].__EMPTY_3);
        setHouseholdCount(jsonDataStats[jsonDataStats.length - 1].__EMPTY_4);
        setUnderGuard(jsonDataStats[jsonDataStats.length - 1].__EMPTY_6);
      })
      .catch((err) => console.error("Error reading file:", err));
  }, []);

  return (
    <main>
      <Header />
      <div className="container">
        <Stats
          neighborhoods={formatNumber(neighborhoodsCount)}
          users={formatNumber(usersCount)}
          households={formatNumber(householdCount)}
          underGuard={formatNumber(underGuard)}
        />
        <div className="main-layout">
          <Sidebar
            districts={districts}
            active={active}
            onChange={(active) => setActive(active)}
          />
          <div className="main-content">
            <Table
              objects={objects}
              neighborhoods={neighborhoods.find(
                (ng) => ng.districtId === active
              )}
            />
            <Map />
            <CountTable
              activeDistrict={
                districts.find((item) => item.id === active)?.name
              }
              usersCount={formatNumber(usersByDistrict)}
              householdCount={formatNumber(hosueholdsByDistrict)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
