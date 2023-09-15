package com.shinhan.connector.dto.response;

import com.shinhan.connector.entity.MySchedule;
import com.shinhan.connector.entity.Schedule;
import com.shinhan.connector.enums.Alarm;
import com.shinhan.connector.enums.RepeatCycle;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class ScheduleResponse {
    private Integer scheduleNo;
    private Integer friendNo;
    private String name;
    private String content;
    private Long date;
    private RepeatCycle repeatCycle;
    private Boolean favorite;
    private Alarm alarm;

    public ScheduleResponse(Schedule schedule) {
        this.scheduleNo = schedule.getNo();
        this.friendNo = schedule.getFriend().getNo();
        this.name = schedule.getName();
        this.date = schedule.getDate();
        this.repeatCycle = schedule.getRepeatCycle();
        this.favorite = schedule.getFavorite();
        this.alarm = schedule.getAlarm();
    }

    public static ScheduleResponse fromScheduleEntity(Schedule schedule) {
        return ScheduleResponse.builder()
                .scheduleNo(schedule.getNo())
                .friendNo(schedule.getFriend().getNo())
                .name(schedule.getName())
                .date(schedule.getDate())
                .repeatCycle(schedule.getRepeatCycle())
                .favorite(schedule.getFavorite())
                .alarm(schedule.getAlarm())
                .build();
    }

    public static ScheduleResponse fromMyScheduleEntity(MySchedule mySchedule) {
        return ScheduleResponse.builder()
                .scheduleNo(mySchedule.getNo())
                .name(mySchedule.getName())
                .date(mySchedule.getDate())
                .repeatCycle(mySchedule.getRepeatCycle())
                .favorite(mySchedule.getFavorite())
                .alarm(mySchedule.getAlarm())
                .build();
    }
}
