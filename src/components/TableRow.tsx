import styled from "styled-components";
import { Student } from "../types/students";

const TableRowWrapper = styled.div`
  width: 60em;
  display: flex;
  gap: 1px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  background-color: white;

  & > div {
    flex: 1;
    /* width: 150px; */
    width: calc(60em / 5);
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
    /* left: 150px; */
    left: calc(60em / 5 * 1);
  }
  & > div:nth-of-type(3) {
    /* left: 300px; */
    left: calc(60em / 5 * 2);
  }
  & > div:nth-of-type(4) {
    /* left: 450px; */
    left: calc(60em / 5 * 3);
  }
  & > div:nth-of-type(5) {
    left: calc(60em / 5 * 4);
    /* left: 600px; */
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
