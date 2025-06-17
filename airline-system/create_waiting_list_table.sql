-- Create WaitingList table if it doesn't exist
CREATE TABLE IF NOT EXISTS WaitingList (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    flight_number VARCHAR(20) NOT NULL,
    date_added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (username) REFERENCES users(username),
    FOREIGN KEY (flight_number) REFERENCES Flights(flight_number),
    UNIQUE KEY unique_wait (username, flight_number)
); 