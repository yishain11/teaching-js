import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function DataPage() {
  const [data, setData] = useState([]);
  const navFN = useNavigate();
  const [headRow, setHeadRow] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4545/data")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        const headers = res.shift().filter((val) => val);
        console.log("headers", headers);
        setHeadRow(headers);
        const data = res.filter((val) => val);
        setData(data);
      })
      .catch((err) => {
        console.error("err", err);
      });
  }, []);
  return (
    <>
      <h1>data page</h1>
      <button
        onClick={() => {
          navFN("/test", { replace: true });
        }}
      >
        go to test
      </button>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {headRow.map((cell) => {
                if (cell) {
                  return (
                    <th key={Date.now() + Math.random() * 10000}>{cell}</th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((dataRow) => {
              return (
                <tr key={Date.now() + Math.random() * 10000}>
                  {dataRow.map((cell) => (
                    <td key={Date.now() + Math.random() * 10000}>{cell}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
