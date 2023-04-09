import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { Result } from "../../types/table";
import {
  Cell,
  CellHeadWrapper,
  CellListWrapper,
  ContentWrapper,
  Header,
  LineWrapper,
  NutritionInfo,
  Wrapper,
} from "./table.styled";
import CheckIcon from "@mui/icons-material/Check";

const Table = ({ exercise, meal }: Result) => {
  return (
    <Wrapper>
      <ContentWrapper>
        {exercise &&
          exercise.map((e, index) => (
            <LineWrapper key={index}>
              <Paper sx={{ pt: 2, pr: 3, pl: 3, pb: 2 }} elevation={20}>
                <Header>{e.day}</Header>
                <List>
                  {e.detail.map((d, i) => (
                    <div key={i}>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ padding: 0 }}>
                          <ListItemIcon sx={{ minWidth: "40px" }}>
                            <CheckIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={`${d.exercise_type} / ${d.duration}분`}
                            secondary={`${d.repetition} / ${d.weight}`}
                          />
                        </ListItemButton>
                      </ListItem>
                    </div>
                  ))}
                </List>
              </Paper>
            </LineWrapper>
          ))}

        {meal &&
          meal.map((m, index) => (
            <LineWrapper key={index}>
              <Paper sx={{ pt: 2, pr: 3, pl: 3, pb: 2 }} elevation={20}>
                <Header>{m.day}</Header>
                {m.detail.map((d) => (
                  <div key={d.time}>
                    <CellHeadWrapper>
                      <Cell style={{ fontStyle: "italic", width: "auto" }}>
                        {d.time}
                      </Cell>
                    </CellHeadWrapper>
                    <Cell>
                      <CellListWrapper>
                        <List>
                          {d.menu.map((m) => (
                            <div key={m.food}>
                              <ListItem disablePadding>
                                <ListItemButton sx={{ padding: 0 }}>
                                  <ListItemIcon sx={{ minWidth: "40px" }}>
                                    <CheckIcon />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={m.food}
                                    secondary={`${m.kcal}kcal`}
                                  />
                                </ListItemButton>
                              </ListItem>
                            </div>
                          ))}
                        </List>
                        <NutritionInfo>
                          단백질 : {d.nutrition.protein}, 지방:{" "}
                          {d.nutrition.fat}, 탄수화물:{" "}
                          {d.nutrition.carbonhydrate}
                        </NutritionInfo>
                      </CellListWrapper>
                    </Cell>
                  </div>
                ))}
              </Paper>
            </LineWrapper>
          ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Table;
