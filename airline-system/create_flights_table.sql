USE airline_booking;

-- Drop the existing Flights table if it exists
DROP TABLE IF EXISTS Flights;

-- Create the Flights table with the correct schema
CREATE TABLE Flights (
    flight_number VARCHAR(20) PRIMARY KEY,
    airline_id VARCHAR(20) NOT NULL,
    aircraft_id INT NOT NULL,
    departure_airport VARCHAR(20) NOT NULL,
    destination_airport VARCHAR(20) NOT NULL,
    flight_type VARCHAR(20) DEFAULT 'Non-stop',
    depart_date DATE NOT NULL,
    depart_time TIME NOT NULL,
    arrive_time TIME NOT NULL,
    fare_economy DECIMAL(10,2) NOT NULL,
    fare_first DECIMAL(10,2)
);

-- Insert some sample data
INSERT INTO Flights (flight_number, airline_id, aircraft_id, departure_airport, destination_airport, flight_type, depart_date, depart_time, arrive_time, fare_economy, fare_first)
VALUES 
('AA100', 'American', 1, 'JFK', 'LAX', 'Non-stop', '2025-06-01', '09:00:00', '12:00:00', 299.99, 899.99),
('UA200', 'United', 2, 'ORD', 'SFO', 'Non-stop', '2025-06-01', '10:30:00', '13:30:00', 349.99, 999.99),
('DL300', 'Delta', 3, 'ATL', 'MIA', 'Non-stop', '2025-06-01', '07:45:00', '09:15:00', 199.99, 599.99); 