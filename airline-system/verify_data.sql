-- Check flights between JFK and DXB
SELECT f.*, 
       a1.name AS origin_city, 
       a2.name AS destination_city, 
       al.name AS airline_name,
       t.trip_date
FROM Flights f
JOIN Airports a1 ON f.departure_airport = a1.airport_id
JOIN Airports a2 ON f.arrival_airport = a2.airport_id
JOIN Airlines al ON f.airline_id = al.airline_id
JOIN Trip t ON f.flight_number = t.flight_number
WHERE f.departure_airport = 'JFK' 
AND f.arrival_airport = 'DXB'
AND t.trip_date = '2025-05-17'; 