import { Result } from "../../types/table";
import {
  Cell,
  CellListWrapper,
  ContentWrapper,
  Header,
  LineWrapper,
  Wrapper,
} from "./table.styled";

const Table = ({ result }: Result) => {
  return (
    <Wrapper>
      <ContentWrapper>
        {result.map((r) => (
          <LineWrapper key={r.id}>
            {r.type ? (
              <>
                <Header>{r.day}</Header>

                <Cell style={{ fontStyle: "italic" }}>{r.type}</Cell>
                <Cell>
                  <CellListWrapper>
                    {r.exercise?.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </CellListWrapper>
                </Cell>
              </>
            ) : (
              <>
                <Header>{r.day}</Header>
                {r.meals?.map((meal) => (
                  <div key={meal.time}>
                    <Cell style={{ fontStyle: "italic" }}>{meal.time}</Cell>
                    <Cell>
                      <CellListWrapper>
                        {meal.menu.map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </CellListWrapper>
                    </Cell>
                  </div>
                ))}
              </>
            )}
          </LineWrapper>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Table;
