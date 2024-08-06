import styled from "styled-components";
import { Student } from "../types/students";

const TableRowWrapper = styled.div`
  display: flex;
  gap: 1px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;

  & > div {
    width: 150px;
    padding: 1em 0.5em;
    background-color: white;
    color: black;
    text-align: center;

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

type TableRowProps = {
  data: Student;
  colsToSticky?: number;
};

type StudentFields = keyof Student;
const TableRow = ({ data, colsToSticky = 0 }: TableRowProps) => {
  return (
    <TableRowWrapper>
      {Object.keys(data).map((k, idx) => {
        return (
          <div key={`${k}`} className={idx < colsToSticky ? "sticker" : ""}>
            {(data as Student)[k as StudentFields]}
          </div>
        );
      })}
    </TableRowWrapper>
  );
};
export default TableRow;
