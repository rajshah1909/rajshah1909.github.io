# Airline Booking System

## Project Overview
This is a comprehensive airline booking system that allows for flight management, user reservations, waiting list functionality, and customer support. The system supports three types of users: regular customers, customer representatives, and administrators.

## Features

### User Functionality
- Search for flights between airports:
  - One-way flights on specific dates
  - Flexible date search
  - Filter and sort by price, time, airline
- View upcoming flights and their details
- Make flight reservations
- Join waiting lists for fully booked flights
- View and manage personal waiting list entries
- View reservation history and upcoming reservations
- Cancel reservations
- Submit questions to customer representatives
- View answers to submitted questions

### Customer Representative Functionality
- View and manage flight information
- Access customer waiting lists
- View waiting lists by specific flights
- Respond to customer questions
- Assist users with reservations and booking issues
- Manage user accounts

### Admin Functionality
- Add, edit, or delete flights
- Manage aircraft information
- User management (add/edit/delete)
- View system reports and statistics
- Monitor system performance

## Technologies Used
- Java EE (Servlets, JSP)
- MySQL Database
- JSTL for JSP templating
- HTML, CSS, JavaScript for front-end
- Apache Tomcat as application server
- Maven for dependency management and build

## Project Setup

### Prerequisites
- Java 11 or higher
- Maven 3.6 or higher
- MySQL 8.0 or higher
- Apache Tomcat 11.0 or higher

### Database Setup
1. Create a MySQL database named `airline_booking`
2. Import the schema and data from the SQL files:
   ```
   mysql -u username -p airline_booking < airline_schema.sql
   mysql -u username -p airline_booking < flights.sql
   mysql -u username -p airline_booking < users.sql
   ```

### Building and Deploying
1. Clone the repository
2. Navigate to the project directory
3. Build the project using Maven:
   ```
   mvn clean package
   ```
4. Deploy the WAR file to Tomcat:
   ```
   cp target/airline-system.war [TOMCAT_HOME]/webapps/
   ```
5. Restart Tomcat if necessary

### Accessing the Application
Access the application at: `http://localhost:8080/airline-system/`

## Login Credentials

### Regular User
- Username: `user`
- Password: `pass`

### Administrator
- Username: `admin`
- Password: `pass`

### Customer Representative
- Username: `rep`
- Password: `pass`

## Key Components

### Model Classes
- `User`: Represents system users with different roles
- `Flight`: Stores flight information
- `Reservation`: Contains reservation details
- `WaitingList`: Manages flight waiting lists
- `Question`: Stores customer questions
- `Answer`: Stores representative answers to questions

### Data Access Objects (DAOs)
- `UserDAO`: User data management
- `FlightDAO`: Flight data management
- `ReservationDAO`: Reservation data management
- `WaitingListDAO`: Waiting list data management
- `QuestionDAO`: Question and answer management

### Servlets
- `FlightServlet`: Handles flight-related operations
- `UserServlet`: Manages user authentication and profile operations
- `ReservationServlet`: Processes reservation operations
- `WaitingListServlet`: Handles waiting list operations
- `QuestionServlet`: Manages question and answer operations

### JSP Pages
- User pages: search-flights.jsp, my-reservations.jsp, ask-question.jsp, etc.
- Admin pages: dashboard.jsp, edit-flight.jsp, users.jsp, etc.
- Customer rep pages: dashboard.jsp, waiting-list.jsp, questions.jsp, etc.

## Recent Fixes
- Fixed edit-flight.jsp issue for admin users
- Fixed infinite redirect issues in the waiting list functionality
- Fixed type mismatch errors for LocalDateTime formatting in JSP pages
- Ensured consistent text color (black) throughout user interfaces

## Troubleshooting
- If you encounter 404 errors, verify servlet mappings in web.xml and @WebServlet annotations
- For database connection issues, check the database credentials in the configuration
- If facing display issues, ensure proper CSS is loaded and JSP tags are working correctly

## License
This project is developed for educational purposes.

## Contributors
- ras637 (Raj Shah)
- mp2173 (Mili Patel) 
- vp600 (Vasu Patel)
- vmp130 (Vrajkumar Patel)
