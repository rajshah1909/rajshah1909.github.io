-- Add more sample flights for testing
INSERT INTO airline_booking.Flights (flight_number, airline_id, departure_airport, destination_airport, flight_type, depart_date, depart_time, arrive_time, fare_first, fare_economy) VALUES
('FL001', 'AA', 'JFK', 'LAX', 'Non-stop', '2025-05-15', '08:00:00', '11:30:00', 1200.00, 450.00),
('FL002', 'DL', 'LAX', 'JFK', 'Non-stop', '2025-05-15', '14:00:00', '22:30:00', 1300.00, 500.00),
('FL003', 'UA', 'ORD', 'SFO', 'Non-stop', '2025-05-15', '09:30:00', '12:00:00', 900.00, 350.00),
('FL004', 'AA', 'ATL', 'MIA', 'Non-stop', '2025-05-15', '10:15:00', '12:00:00', 800.00, 300.00),
('FL005', 'DL', 'JFK', 'LAX', 'Non-stop', '2025-05-15', '16:00:00', '19:30:00', 1250.00, 475.00),
('FL006', 'UA', 'SFO', 'JFK', '1 Stop', '2025-05-15', '07:00:00', '18:00:00', 1400.00, 550.00),
('FL007', 'AA', 'LAX', 'ORD', 'Non-stop', '2025-05-15', '11:30:00', '17:00:00', 950.00, 400.00),
('FL008', 'UA', 'MIA', 'JFK', 'Non-stop', '2025-05-15', '13:45:00', '16:30:00', 875.00, 325.00),
('FL009', 'DL', 'JFK', 'LHR', 'Non-stop', '2025-05-15', '19:00:00', '07:30:00', 2200.00, 800.00),
('FL010', 'AA', 'LHR', 'JFK', 'Non-stop', '2025-05-15', '09:30:00', '12:00:00', 2300.00, 850.00),

-- Flights for the next day (May 16)
('FL011', 'AA', 'JFK', 'LAX', 'Non-stop', '2025-05-16', '09:00:00', '12:30:00', 1200.00, 460.00),
('FL012', 'DL', 'LAX', 'JFK', 'Non-stop', '2025-05-16', '15:00:00', '23:30:00', 1350.00, 510.00),
('FL013', 'UA', 'ORD', 'SFO', '1 Stop', '2025-05-16', '10:30:00', '14:00:00', 920.00, 360.00),
('FL014', 'AA', 'ATL', 'MIA', 'Non-stop', '2025-05-16', '11:15:00', '13:00:00', 820.00, 310.00),

-- Flights for May 17 (flex date range)
('FL015', 'AA', 'JFK', 'LAX', 'Non-stop', '2025-05-17', '10:00:00', '13:30:00', 1180.00, 440.00),
('FL016', 'DL', 'LAX', 'JFK', '1 Stop', '2025-05-17', '16:00:00', '01:30:00', 1320.00, 490.00),

-- Flights for May 18 (flex date range)
('FL017', 'UA', 'JFK', 'LAX', 'Non-stop', '2025-05-18', '11:00:00', '14:30:00', 1150.00, 430.00),
('FL018', 'AA', 'LAX', 'JFK', 'Non-stop', '2025-05-18', '17:00:00', '01:30:00', 1300.00, 480.00),

-- Flights for different time ranges (morning, afternoon, evening)
('FL019', 'DL', 'JFK', 'LAX', 'Non-stop', '2025-05-15', '06:30:00', '10:00:00', 1220.00, 455.00), -- Morning
('FL020', 'UA', 'JFK', 'LAX', 'Non-stop', '2025-05-15', '12:30:00', '16:00:00', 1240.00, 465.00), -- Afternoon
('FL021', 'AA', 'JFK', 'LAX', 'Non-stop', '2025-05-15', '18:30:00', '22:00:00', 1190.00, 445.00), -- Evening

-- Sample round-trip flight pairs
('FL022', 'DL', 'BOS', 'ORD', 'Non-stop', '2025-05-15', '08:45:00', '10:30:00', 750.00, 280.00), -- Outbound
('FL023', 'DL', 'ORD', 'BOS', 'Non-stop', '2025-05-18', '16:15:00', '19:45:00', 750.00, 280.00); -- Return 