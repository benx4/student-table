import styled from "styled-components";
import { Student } from "../types/students";

const TableHeaderWrapper = styled.div`
  width: 60em;
  display: flex;
  gap: 1px;
  position: sticky;
  top: 0;
  z-index: 40;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;

  & > div {
    flex: 1;
    width: calc(60em / 5);
    padding: 1em 0.5em;
    background-color: #1970c0;
    color: white;
    text-align: center;
    & > i {
      position: relative;
      display: inline-block;
      margin-left: 4px;
      transform: rotate(90deg);
      right: -5px;
      font-weight: 700;
    }
    & > b {
      position: relative;
      display: inline-block;
      margin-left: 4px;
      /* transform: rotate(90deg); */
      left: -10px;
      font-weight: 700;
    }

    &.sticker {
      position: sticky;
      z-index: 1;
    }
  }

  & > div:nth-of-type(1) {
    left: 0;
  }
  & > div:nth-of-type(2) {
    left: calc(60em / 5 * 1);
  }
  & > div:nth-of-type(3) {
    left: calc(60em / 5 * 2);
    /* left: 300px; */
  }
  & > div:nth-of-type(4) {
    left: calc(60em / 5 * 3);
    /* left: 450px; */
  }
  & > div:nth-of-type(5) {
    left: calc(60em / 5 * 4);
    /* left: 600px; */
  }
`;

type TableHeaderProps = {
  colsToSticky?: number;
  sortType: string;
  sortField: string;
  onStickColumn: (startCols: number) => void;
  onSortHandler: (field: keyof Student) => void;
};

const TableHeader = function ({
  colsToSticky = 0,
  sortType = "",
  sortField = "",
  onStickColumn,
  onSortHandler,
}: TableHeaderProps) {
  return (
    <TableHeaderWrapper>
      {["Name", "Age", "Gender", "Score", "Weight"].map((f, idx) => {
        return (
          <div key={f} className={idx < colsToSticky ? "sticker" : ""}>
            <b
              onClick={(_) => {
                onStickColumn(idx + 1);
              }}
            >
              {idx < colsToSticky ? "X" : "O"}
            </b>
            <span>{f}</span>
            <i
              onClick={(ev) => {
                onSortHandler(f.toLowerCase() as keyof Student);
              }}
            >
              {sortField === f.toLowerCase()
                ? sortType === ""
                  ? "<>"
                  : sortType === "A"
                    ? "<"
                    : ">"
                : "<>"}
            </i>
          </div>
        );
      })}
    </TableHeaderWrapper>
  );
};

export default TableHeader;
