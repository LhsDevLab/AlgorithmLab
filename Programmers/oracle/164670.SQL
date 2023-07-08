-- 코드를 입력하세요
SELECT USER_ID,
       NICKNAME,
       CITY || ' ' || street_address1 || ' ' || street_address2 AS  전체주소,	SUBSTR(tlno,0,3) || '-' || SUBSTR(tlno,4,4) || '-'|| SUBSTR(tlno,8,4) AS 전화번호
  FROM USED_GOODS_USER
 WHERE USER_ID IN (
 SELECT WRITER_ID
   FROM USED_GOODS_BOARD
  GROUP BY WRITER_ID
 HAVING COUNT(*) >= 3
 )
 ORDER BY 1 DESC;