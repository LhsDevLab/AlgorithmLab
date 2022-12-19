-- 코드를 입력하세요
select category, sum(sales)
  from book t1, book_sales t2
 where t1.book_id = t2.book_id
   and to_char(sales_date, 'yyyy-mm') = '2022-01'
 group by category
 order by category;