SELECT ANIMAL_ID, NAME
from ANIMAL_INS a
where ANIMAL_TYPE = "Dog" and upper(NAME) like "%EL%"
order by name