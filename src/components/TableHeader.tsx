import styled from "styled-components";
import { Student } from "../types/students";

const TableHeaderWrapper = styled.div`
  display: flex;
  gap: 1px;
  position: sticky;
  top: 0;
  z-index: 40;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;

  & > div {
    width: 150px;
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
    left: 0px;
  }
  & > div:nth-of-type(2) {
    left: 150px;
  }
  & > div:nth-of-type(3) {
    left: 300px;
  }
  & > div:nth-of-type(4) {
    left: 450px;
  }
  & > div:nth-of-type(5) {
    left: 600px;
  }
`;

type TableHeaderProps = {
  colsToSticky?: number;
  sortType: string;
  onStickColumn: (startCols: number) => void;
  onSortHandler: (field: keyof Student) => void;
};

const TableHeader = function ({
  colsToSticky = 0,
  sortType = "",
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
              {sortType === "" ? "<>" : sortType === "A" ? "<" : ">"}
            </i>
          </div>
        );
      })}
    </TableHeaderWrapper>
  );
};

export default TableHeader;
