USE airline_booking;

-- Check if the table exists and has the right structure
SELECT COUNT(*) FROM Flights;

-- Insert test data if the table is empty
INSERT INTO Flights (flight_number, airline_id, departure_airport, destination_airport, flight_type, depart_date, depart_time, arrive_time, fare_economy, fare_first) 
SELECT 'AA101', 'AA', 'JFK', 'LAX', 'Non-stop', '2025-06-01', '09:00:00', '12:00:00', 299.99, 899.99
FROM dual
WHERE NOT EXISTS (SELECT 1 FROM Flights WHERE flight_number = 'AA101');

INSERT INTO Flights (flight_number, airline_id, departure_airport, destination_airport, flight_type, depart_date, depart_time, arrive_time, fare_economy, fare_first)
SELECT 'UA201', 'UA', 'ORD', 'SFO', 'Non-stop', '2025-06-01', '10:30:00', '13:30:00', 349.99, 999.99
FROM dual
WHERE NOT EXISTS (SELECT 1 FROM Flights WHERE flight_number = 'UA201');

INSERT INTO Flights (flight_number, airline_id, departure_airport, destination_airport, flight_type, depart_date, depart_time, arrive_time, fare_economy, fare_first)
SELECT 'DL301', 'DL', 'ATL', 'MIA', 'Non-stop', '2025-06-01', '07:45:00', '09:15:00', 199.99, 599.99
FROM dual
WHERE NOT EXISTS (SELECT 1 FROM Flights WHERE flight_number = 'DL301'); 