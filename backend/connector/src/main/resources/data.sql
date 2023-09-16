INSERT INTO ACCOUNT (ACCOUNT_NO, ACCOUNT_HOLDER, ACCOUNT_NUMBER, BANK_CODE, REMAIN_MONEY, TYPE, DATE)
VALUES (100000, '김친구', '456789123456', '088', 1000000, '입출금', '1693904107'),
(100001, '김거래', '891385789133', '088', 50000000, '입출금', '1673772907'),
(100002, '김신한', '110222999999', '088', 35550000, '입출금', '1630572907'),
(100003, '김익명', '118561223129', '088', 50000, '입출금', '1640422507'),
(100004, '김신한', '110282102999', '088', 1500000, '예적금', '1631572907'),
(100005, '김신한', '184988102999', '088', 20000000, '예적금', '1630582907');

INSERT INTO ACCOUNT_HISTORY (ACCOUNT_HISTORY_NO, ACCOUNT_NO, DEPOSITOR_NAME, BANK_CODE, ACCOUNT_NUMBER, MODIFIED_AMOUNT, REMAIN_AMOUNT, DATE, NOTE)
VALUES (100000, 100002, '익명의사람', '088', '118561223129', 50000, 36550000, 1640422507, null),
(100001, 100002, '박친구', '088', '852285228852', -1000000, 35550000, 1646643307, '빌린 돈 갚음');

INSERT INTO MEMBER (member_no, id, password, name, age, gender, contact, account_no)
VALUES (100000, 'test', '$2a$10$utsNAnkpTnxLLhxcjlnfEeUqB/4lK4rPAoqR5Xrljlb.BK74O4t42', '김신한', 21, 'F', '010-1234-1234', 100002);

INSERT INTO FRIEND (FRIEND_NO, ACCOUNT_NUMBER, BANK_CODE, BELONG, CONTACT, IMAGE, NAME, RELATION, MEMBER_NO)
VALUES (100000, '456789123456', '088', '신기한모임', '987654321', '이미지.jpg', '김친구', 'FRIEND', 100000),
(100001, '852285228852', '088', '또다른모임', '987654321', '이미지.jpg', '박친구', 'FRIEND', 100000),
(100002, '891385789133', '088', '이건모임', '987654321', '이미지.jpg', '김거래', 'BUSINESS', 100000),
(100003, '891385889443', '088', '가족', '987654321', '이미지.jpg', '아부지', 'FAMILY', 100000);

INSERT INTO SCHEDULE (schedule_no, friend_no, name, category, date, repeat_cycle, content, alarm, favorite, member_no)
VALUES
(100000, 100000, '김친구 결혼식', '결혼식', 1694860623, 'NONE', null, 'NONE', 'false', 100000),
(100001, 100001, '집들이', '집들이', 1694861623, 'NONE', null, 'NONE', 'false', 100000),
(100002, 100003, '아버지 생신', '생일', 1694861723, 'NONE', null, 'NONE', 'false', 100000),
(100003, 100003, '모임 행사', '기타', 1694861724, 'NONE', null, 'NONE', 'false', 100000),
(100004, 100002, '깜짝파티', '생일', 1694862623, 'NONE', null, 'NONE', 'false', 100000),
(100005, 100001, '친구네 집들이', '집들이', 1694862633, 'NONE', null, 'NONE', 'false', 100000),
(100006, 100003, '부모님 결혼 기념일', '기타', 1694863623, 'NONE', null, 'NONE', 'false', 100000),
(100007, 100002, '박친구 결혼식', '결혼식', 1694864623, 'NONE', null, 'NONE', 'false', 100000),
(100008, 100002, '거래처 미팅', '기타', 1694865623, 'NONE', null, 'NONE', 'false', 100000);

INSERT INTO GIFT_SEND (gift_send_no, category, name, note, price, schedule_no)
VALUES
(100000, '집들이', '휴지', '무난한 선물', 20000, 100001),
(100001, '기타', '간단한 선물', '거래처 미팅', 20000, 100008),
(100002, '생일', '아버지 생신', '케이크', 50000, 100003),
(100003, '기타', '부모님 결혼기념일', '저녁식사', 100000, 100006);

INSERT INTO MY_SCHEDULE (my_schedule_no, name, category, date, repeat_cycle, content, alarm, favorite, member_no)
VALUES
(100000, '새로운 내 일정', '집들이', 156000000, 'WEEK', '집들이 화이팅', 'MONTH', 'TRUE', 100000),
(100001, '새로운 두번째 일정', '집들이', 167000000, 'WEEK', '집들이 화이팅', 'MONTH', 'TRUE', 100000);

INSERT INTO TRIBUTE_SEND (tribute_send_no, amount, note, sent, schedule_no)
VALUES
(100000, 50000, '보낼 경조사비', 'false', 100000),
(100001, 60000, '보낼 경조사비1', 'true', 100000),
(100002, 70000, '보낼 경조사비2', 'true', 100000),
(100003, 80000, '보낼 경조사비3', 'false', 100000),
(100004, 90000, '보낼 경조사비4', 'false', 100000);

INSERT INTO TRIBUTE_RECEIVE (tribute_receive_no, amount, note, friend_no, my_schedule_no)
VALUES
(100000, 50000, '받은 경조사비', 100000, 100000),
(100001, 50000, '받은 경조사비', 100000, 100000),
(100002, 50000, '받은 경조사비', 100000, 100000),
(100003, 50000, '받은 경조사비', 100000, 100000),
(100004, 50000, '받은 경조사비', 100000, 100000),
(100005, 50000, '받은 경조사비', 100000, 100000);

INSERT INTO GIFT_LOG (gift_log_no, age_range, gender, category, gift_category, avg_price, count)
VALUES
(100001, 20, '여성', '생일', '화장품', 12000, 20),
(100002, 20, '남성', '생일', '화장품', 30000, 5),
(100003, 20, '여성', '생일', '식사', 50000, 30),
(100004, 20, '여성', '기념일', '식사', 50000, 30),
(100005, 40, '남성', '기념일', '식사', 100000, 8);

INSERT INTO TRIBUTE_LOG (tribute_log_no, age_range, gender, category, avg_price, count)
VALUES
(100001, 20, '여성', '생일', 12000, 20),
(100002, 20, '남성', '생일', 30000, 5),
(100003, 20, '여성', '기념일', 50000, 30),
(100004, 40, '남성', '기념일', 100000, 8);

INSERT INTO SAVINGS_LETTER (member_no, friend_no, bank_code, bank_account, savings_letter_no, name, content, current_round, total_round, amount, payment_date, start_date, end_date)
VALUES
(100000, 100000, '088', '184988102999', 100000, '적금편지1', 'test\ntest1\ntest2\ntest3\ntest4\ntest5\ntest6', 3, 12, 30000, 12312421, 21313213, 23121312),
(100000, 100001, '088', '110282102999', 100001, '적금편지2', 'test\ntest1\ntest2\ntest3\ntest4', 12, 12, 30000, 12312421, 21313213, 23121312);
