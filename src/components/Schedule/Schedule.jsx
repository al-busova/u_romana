import { ScheduleWrapper, ScheduleList, ScheduleItem } from './Schedule.styled';
import { LeftSideTitle } from 'components/LeftSide/LeftSide.styled';
export const Schedule = () => {
  return (
    <ScheduleWrapper>
      <LeftSideTitle>Графік роботи</LeftSideTitle>
      <ScheduleList>
        <ScheduleItem>
          <p>Пн - Пт</p> <p>10:00 - 18:00</p>
        </ScheduleItem>
        <ScheduleItem>
          <p>Сб - Нд</p> <p>10:00 - 15:00</p>
        </ScheduleItem>
      </ScheduleList>
      <b>Працюємо без перерв та вихідних!</b>
    </ScheduleWrapper>
  );
};
