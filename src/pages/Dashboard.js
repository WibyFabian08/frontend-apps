import React, { useState, useEffect } from "react";

import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { HomeIcon } from "../icons";
import Skeleton from "react-loading-skeleton";
import RoundIcon from "../components/RoundIcon";
import response from "../utils/demo/tableData";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Badge,
  Pagination,
} from "@windmill/react-ui";

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";
import { useDispatch, useSelector } from "react-redux";
import { getDataKandang } from "../redux/actions/kandangAction";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [suhu, setSuhu] = useState([]);
  const [kelembaban, setKelembaban] = useState([]);
  const [nh, setNh] = useState([]);
  const [angin, setAngin] = useState([]);
  const [rataRataSuhu, setRataRataSuhu] = useState(null);
  const [rataRataAngin, setRataRataAngin] = useState(null);
  const [rataRataNh, setRataRataNh] = useState(null);
  const [rataRataKelembaban, setRataRataKelembaban] = useState(null);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  const dispatch = useDispatch();
  const { dataKandang } = useSelector((state) => state.dataKandangState);
  const { user } = useSelector((state) => state.userState);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  useEffect(() => {
    if (user !== null) {
      dispatch(getDataKandang(user?.id_produk));
    }
  }, [user]);

  useEffect(() => {
    let suhu = [];
    let kelembaban = [];
    let angin = [];
    let nh = [];

    if (dataKandang !== null) {
      for (const property in dataKandang) {
        if (property.startsWith("sh")) {
          suhu.push({
            [property]: dataKandang[property],
          });
        } else if (property.startsWith("kl")) {
          kelembaban.push({
            [property]: dataKandang[property],
          });
        } else if (property.startsWith("nh")) {
          nh.push({
            [property]: dataKandang[property],
          });
        } else if (property.startsWith("ang")) {
          angin.push({
            [property]: dataKandang[property],
          });
        }
      }
    }

    let rataRataSuhu = 0;
    let rataRataNh = 0;
    let rataRataAngin = 0;
    let rataRataKelembaban = 0;

    suhu.map((_, index) => {
      rataRataSuhu += parseInt(suhu[index][`sh${index + 1}`]);
    });
    setRataRataSuhu(rataRataSuhu / suhu.length);

    angin.map((_, index) => {
      rataRataAngin += parseInt(angin[index][`ang${index + 1}`]);
    });
    setRataRataAngin(rataRataAngin / angin.length);

    nh.map((_, index) => {
      rataRataNh += parseInt(nh[index][`nh${index + 1}`]);
    });
    setRataRataNh(rataRataNh / nh.length);

    kelembaban.map((_, index) => {
      rataRataKelembaban += parseInt(kelembaban[index][`kl${index + 1}`]);
    });
    setRataRataKelembaban(rataRataKelembaban / kelembaban.length);

    setSuhu(suhu);
    setKelembaban(kelembaban);
    setAngin(angin);
    setNh(nh);
  }, [dataKandang]);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <div className="mb-5">
        {suhu.length < 1 &&
        kelembaban.length < 1 &&
        nh.length < 1 &&
        angin.length < 1 ? (
          <Skeleton height={200}></Skeleton>
        ) : (
          <InfoCard
            block={true}
            title={"Rata-Rata"}
            suhu={Math.ceil(rataRataSuhu)}
            angin={Math.ceil(rataRataAngin)}
            nh={Math.ceil(rataRataNh)}
            kelembaban={Math.ceil(rataRataKelembaban)}
          ></InfoCard>
        )}
      </div>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
        {suhu.length > 0 &&
          kelembaban.length > 0 &&
          nh.length > 0 &&
          angin.length > 0 &&
          suhu.map((_, index) => {
            return (
              <InfoCard
                title={`Spot ${index + 1}`}
                suhu={suhu[index][`sh${index + 1}`]}
                angin={angin[index][`ang${index + 1}`]}
                nh={nh[index][`nh${index + 1}`]}
                kelembaban={kelembaban[index][`kl${index + 1}`]}
              >
                <RoundIcon
                  icon={HomeIcon}
                  iconColorClass="text-primary-600 dark:text-primary-100"
                  bgColorClass="bg-primary-100 flex items-center justify-center dark:bg-primary-600"
                  className="mr-5"
                />
              </InfoCard>
            );
          })}
      </div>

      {suhu.length === 0 &&
        angin.length === 0 &&
        nh.length === 0 &&
        kelembaban.length === 0 && (
          <div className="grid w-full gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
            <Skeleton height={150}></Skeleton>
            <Skeleton height={150}></Skeleton>
            <Skeleton height={150}></Skeleton>
            <Skeleton height={150}></Skeleton>
            <Skeleton height={150}></Skeleton>
            <Skeleton height={150}></Skeleton>
          </div>
        )}

      {/* <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {user.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(user.date).toLocaleDateString()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer> */}

      {/* <PageTitle>Charts</PageTitle> */}
      {/* <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Revenue">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div> */}
    </>
  );
}

export default Dashboard;
