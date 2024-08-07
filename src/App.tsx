import { useEffect, useState } from "react";

import "./App.css";
import { Student } from "./types/students";
import data from "./data/data.json";
import TableRow from "./components/TableRow";
import TableHeader from "./components/TableHeader";
import PageArrow from "./components/PageArrow";
import PageSizeSelector from "./components/PageSizeSelector";

/** For debug */
// declare global {
//   interface Window {
//     page: (pageIndex: number) => void;
//   }
// }
//Simulate a reducer
function paginateData<T extends Student>(
  data: T[],
  pageSize: number,
  pageIndex: number
) {
  return data.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
}

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [colsToSticky, setColsToSticky] = useState<number>(1);
  const [sortType, setSortType] = useState<string>("");
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [sortField, setSortField] = useState<string>("");

  useEffect(() => {
    // window.page = (pageIndex) => {
    //   setPageIndex(pageIndex);
    // };

    setStudents(data);
  }, []);

  return (
    <>
      <div className="table-container">
        <div className="table-wrapper">
          <TableHeader
            sortType={sortType}
            sortField={sortField}
            onSortHandler={(field: keyof Student) => {
              Promise.resolve(true)
                .then(() =>
                  setStudents((_) => {
                    const result = students.slice();
                    result.sort((prev: Student, next: Student) => {
                      return sortType === "A"
                        ? prev[field] > next[field]
                          ? -1
                          : 1
                        : prev[field] < next[field]
                          ? -1
                          : 1;
                    });
                    return result;
                  })
                )
                .then(() => {
                  setSortField(field);
                })
                .then(() => {
                  setSortType(sortType === "A" ? "D" : "A");
                });
            }}
            colsToSticky={colsToSticky}
            onStickColumn={(startCols: number) => {
              setColsToSticky(startCols);
            }}
          />
          {paginateData(students, pageSize, pageIndex).map((s) => {
            return (
              <TableRow
                key={`${s.name}-${s.weight}`}
                data={s}
                colsToSticky={colsToSticky}
              />
            );
          })}
        </div>
        <PageArrow
          text="<"
          place="left"
          clickHandler={() => {
            if (pageIndex <= 1) return;
            setPageIndex(pageIndex - 1);
          }}
        />
        <PageArrow
          text=">"
          place="right"
          clickHandler={() => {
            if (pageSize * pageIndex >= data.length) return;
            setPageIndex(pageIndex + 1);
          }}
        />
      </div>
      <PageSizeSelector
        valueChangedHandler={(pagesize) => {
          setPageSize(pagesize);
        }}
      />
    </>
  );
}

export default App;
