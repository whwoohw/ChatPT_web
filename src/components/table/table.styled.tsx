import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  padding: 10px 0 0 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
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

export const CellList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CellListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const NutritionInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 45px;
`;
