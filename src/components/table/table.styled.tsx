import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

export const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 0 0 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  width: auto;
  margin-bottom: 10px;
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const CellHeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
`;

export const CellListWrapper = styled.ul`
  padding-inline-start: 10px;
`;

export const CellList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
