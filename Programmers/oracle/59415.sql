select * 
from (select DATETIME as 시간
from ANIMAL_INS
order by DATETIME desc)
where rownum = 1