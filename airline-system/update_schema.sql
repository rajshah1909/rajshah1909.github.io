DROP TABLE IF EXISTS Airports;
CREATE TABLE Airports (
    airport_id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(100),
    country VARCHAR(100),
    iata_code VARCHAR(10),
    icao_code VARCHAR(10),
    latitude DOUBLE,
    longitude DOUBLE,
    altitude INT,
    timezone VARCHAR(10),
    dst VARCHAR(10),
    tz_database VARCHAR(50),
    type VARCHAR(50),
    source VARCHAR(50)
);

DROP TABLE IF EXISTS Airlines;
CREATE TABLE Airlines (
    airline_id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100),
    alias VARCHAR(100),
    iata_code VARCHAR(10),
    icao_code VARCHAR(10),
    callsign VARCHAR(50),
    country VARCHAR(100),
    active VARCHAR(10)
); 