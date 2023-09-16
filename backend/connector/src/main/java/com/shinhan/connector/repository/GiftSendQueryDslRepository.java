package com.shinhan.connector.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.shinhan.connector.dto.request.SearchCondition;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import static com.shinhan.connector.entity.QGiftSend.giftSend;
import static com.shinhan.connector.entity.QSchedule.schedule;

@Repository
@RequiredArgsConstructor
public class GiftSendQueryDslRepository {
    private final JPAQueryFactory jpaQueryFactory;

    public Long getAmountByCondition(SearchCondition searchCondition, Integer userNo) {
        return jpaQueryFactory.select(giftSend.price.sum())
                .from(giftSend)
                .where(
                        sameUser(userNo),
                        startDate(searchCondition.getStart()),
                        endDate(searchCondition.getEnd())
                ).fetchOne();
    }

    private BooleanExpression endDate(Long endDate) {
        if (endDate == null)
            return null;

        return giftSend.schedule.date.loe(endDate);
    }

    private BooleanExpression startDate(Long startDate) {
        if (startDate == null)
            return null;

        return giftSend.schedule.date.goe(startDate);
    }

    private BooleanExpression sameUser(Integer userNo) {
        if (userNo == null)
            return null;

        return giftSend.schedule.member.no.eq(userNo);
    }
}
