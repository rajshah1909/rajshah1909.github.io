-- Schedule all flights for the next 7 days
INSERT INTO Trip (flight_number, trip_date, meal)
SELECT 
    f.flight_number,
    CURDATE() + INTERVAL d.day_offset DAY,
    'Standard'
FROM 
    Flights f
CROSS JOIN (
    SELECT 0 as day_offset UNION ALL
    SELECT 1 UNION ALL
    SELECT 2 UNION ALL
    SELECT 3 UNION ALL
    SELECT 4 UNION ALL
    SELECT 5 UNION ALL
    SELECT 6
) d
WHERE NOT EXISTS (
    SELECT 1 
    FROM Trip t 
    WHERE t.flight_number = f.flight_number 
    AND t.trip_date = CURDATE() + INTERVAL d.day_offset DAY
); 