import styled from "styled-components";

const PageSizeSelectorWrapper = styled.div`
  padding: 0.5em 1em;
  background-color: rgba(221, 122, 122, 0.2);
  text-align: center;

  & > label {
    font-size: 1em;
  }
  & > select {
    width: 5em;
    text-align: center;
  }
`;

type PageSizeSelectorProps = {
  valueChangedHandler: (pagesize: number) => void;
};
const PageSizeSelector = ({ valueChangedHandler }: PageSizeSelectorProps) => {
  return (
    <PageSizeSelectorWrapper>
      <label>Page Size:&nbsp;</label>
      <select
        title="pagesize"
        onChange={(ev) => {
          valueChangedHandler(parseInt(ev.target.value));
        }}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
    </PageSizeSelectorWrapper>
  );
};

export default PageSizeSelector;
