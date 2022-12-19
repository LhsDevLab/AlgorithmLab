-- 코드를 입력하세요
select t2.author_id, t2.author_name, t1.category, sum(t1.price * t3.sales)
  from book t1, author t2, book_sales t3
 where t1.book_id = t3.book_id
   and t1.author_id = t2.author_id
   and to_char(t3.sales_date, 'yyyy-mm') = '2022-01'
 group by t2.author_id, t2.author_name, t1.category
 order by t2.author_id, t1.category desc;