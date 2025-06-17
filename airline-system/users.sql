CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Drop existing data if any to ensure clean state
DELETE FROM users;

-- Insert a test user
INSERT INTO users (username, password, full_name, role) 
VALUES ('testuser', 'testpass', 'Test User', 'user');

-- Insert an admin user
INSERT INTO users (username, password, full_name, role)
VALUES ('admin', 'adminpass', 'Admin User', 'admin'); 