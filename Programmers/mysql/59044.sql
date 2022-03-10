SELECT inp.NAME,	inp.DATETIME
from ANIMAL_INS as inp left join ANIMAL_OUTS as outp on inp.ANIMAL_ID = outp.ANIMAL_ID
where outp.ANIMAL_ID is null
order by inp.DATETIME
limit 3