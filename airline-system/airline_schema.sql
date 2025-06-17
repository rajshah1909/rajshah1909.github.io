-- Create the database
CREATE DATABASE IF NOT EXISTS airline_booking;
USE airline_booking;

-- Create Airlines table
CREATE TABLE Airlines (
    airline_id CHAR(20),
    PRIMARY KEY (airline_id)
);

-- Create Aircraft table
CREATE TABLE Aircraft (
    aircraft_id CHAR(20),
    airline_id CHAR(20),
    PRIMARY KEY (aircraft_id),
    FOREIGN KEY (airline_id) REFERENCES Airlines(airline_id)
);

-- Create Airports table
CREATE TABLE Airports (
    airport_id CHAR(20),
    PRIMARY KEY (airport_id)
);

-- Create Days table
CREATE TABLE Days (
    day_number INT,
    day_name CHAR(10),
    PRIMARY KEY (day_number)
);

-- Create Flights table
CREATE TABLE Flights (
    flight_number CHAR(20),
    airline_id CHAR(20),
    departure_airport CHAR(20),
    destination_airport CHAR(20),
    flight_type CHAR(20),
    depart_time TIME,
    arrive_time TIME,
    fare_first FLOAT,
    fare_economy FLOAT,
    PRIMARY KEY (flight_number),
    FOREIGN KEY (airline_id) REFERENCES Airlines(airline_id),
    FOREIGN KEY (departure_airport) REFERENCES Airports(airport_id),
    FOREIGN KEY (destination_airport) REFERENCES Airports(airport_id)
);

-- Create Flight_Days table
CREATE TABLE Flight_Days (
    flight_number CHAR(20),
    day_number INT,
    PRIMARY KEY (flight_number, day_number),
    FOREIGN KEY (flight_number) REFERENCES Flights(flight_number),
    FOREIGN KEY (day_number) REFERENCES Days(day_number)
);

-- Create Trip table
CREATE TABLE Trip (
    flight_number CHAR(20),
    trip_date DATE,
    meal CHAR(30),
    PRIMARY KEY (flight_number, trip_date),
    FOREIGN KEY (flight_number) REFERENCES Flights(flight_number)
);

-- Create Seats table
CREATE TABLE Seats (
    aircraft_id CHAR(20),
    seat_number CHAR(10),
    class CHAR(10),
    PRIMARY KEY (aircraft_id, seat_number),
    FOREIGN KEY (aircraft_id) REFERENCES Aircraft(aircraft_id)
);

-- Create Seat_Assignment table
CREATE TABLE Seat_Assignment (
    flight_number CHAR(20),
    trip_date DATE,
    aircraft_id CHAR(20),
    seat_number CHAR(10),
    PRIMARY KEY (flight_number, trip_date, aircraft_id, seat_number),
    FOREIGN KEY (flight_number, trip_date) REFERENCES Trip(flight_number, trip_date),
    FOREIGN KEY (aircraft_id, seat_number) REFERENCES Seats(aircraft_id, seat_number)
);

-- Create Person table
CREATE TABLE Person (
    user_name CHAR(20),
    passw CHAR(20),
    full_name CHAR(50),
    PRIMARY KEY (user_name)
);

-- Create Admin table
CREATE TABLE Admin (
    user_name CHAR(20),
    PRIMARY KEY (user_name),
    FOREIGN KEY (user_name) REFERENCES Person(user_name)
);

-- Create Customer_Reg table
CREATE TABLE Customer_Reg (
    user_name CHAR(20),
    PRIMARY KEY (user_name),
    FOREIGN KEY (user_name) REFERENCES Person(user_name)
);

-- Create Customer table
CREATE TABLE Customer (
    user_name CHAR(20),
    account CHAR(20),
    PRIMARY KEY (user_name),
    FOREIGN KEY (user_name) REFERENCES Person(user_name)
);

-- Create Ticket table
CREATE TABLE Ticket (
    ticket_number CHAR(20),
    flight_number CHAR(20),
    trip_date DATE,
    user_name CHAR(20),
    round_trip CHAR(1),
    booking_fee DECIMAL(8,2),
    issue_date DATE,
    total_fare DECIMAL(8,2),
    PRIMARY KEY (ticket_number),
    FOREIGN KEY (flight_number, trip_date) REFERENCES Trip(flight_number, trip_date)
);

-- Insert test user data
INSERT INTO Person (user_name, passw, full_name) VALUES ('testuser', 'password123', 'Test User');
INSERT INTO Customer (user_name, account) VALUES ('testuser', 'ACC123'); 