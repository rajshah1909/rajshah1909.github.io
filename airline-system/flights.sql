CREATE TABLE IF NOT EXISTS flights (
    flight_number VARCHAR(10) PRIMARY KEY,
    airline_id VARCHAR(10) NOT NULL,
    aircraft_id INT NOT NULL,
    departure_airport VARCHAR(3) NOT NULL,
    arrival_airport VARCHAR(3) NOT NULL,
    departure_time DATETIME NOT NULL,
    arrival_time DATETIME NOT NULL,
    base_price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (airline_id) REFERENCES airlines(airline_id),
    FOREIGN KEY (aircraft_id) REFERENCES aircraft(aircraft_id),
    FOREIGN KEY (departure_airport) REFERENCES airports(airport_code),
    FOREIGN KEY (arrival_airport) REFERENCES airports(airport_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Add indexes for better query performance
CREATE INDEX idx_flights_departure_airport ON flights(departure_airport);
CREATE INDEX idx_flights_arrival_airport ON flights(arrival_airport);
CREATE INDEX idx_flights_departure_time ON flights(departure_time);
CREATE INDEX idx_flights_airline_id ON flights(airline_id); 