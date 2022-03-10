SELECT inp.ANIMAL_ID,	inp.NAME
from ANIMAL_INS as inp join ANIMAL_OUTS as outp on inp.ANIMAL_ID = outp.ANIMAL_ID
order by outp.DATETIME - inp.DATETIME desc
limit 2