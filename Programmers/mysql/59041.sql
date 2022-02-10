select name, count(name) as count
from ANIMAL_INS
where name != ""
group by name
having count(name) > 1
order by name