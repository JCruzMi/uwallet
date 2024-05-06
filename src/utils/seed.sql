CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  username VARCHAR (50) NOT NULL, 
  password VARCHAR (255) NOT NULL, 
  email VARCHAR (255) UNIQUE NOT NULL, 
  created_at TIMESTAMP NOT NULL default NOW()
);

INSERT INTO users (username, password, email) VALUES ('admin', 'admin', 'admin');
  
CREATE TABLE cards (
  id VARCHAR (50) PRIMARY KEY, 
  amount INT, 
  name VARCHAR (255) NOT NULL, 
  user_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  created_at TIMESTAMP NOT NULL default NOW()
);
  
INSERT INTO cards (id, amount, name, user_id) VALUES ('0000000000000000', 0, 'admin', 1);
INSERT INTO cards (id, amount, name, user_id) VALUES ('0000000000000001', 0, 'admin', 1);

CREATE TABLE movements (
  id SERIAL PRIMARY KEY, 
  amount INT,
  number_sender VARCHAR (50) NOT NULL,
  number_receiver VARCHAR (50) NOT NULL,
  FOREIGN KEY(number_sender) 
    REFERENCES cards(id),
  FOREIGN KEY(number_receiver) 
    REFERENCES cards(id),
  created_at TIMESTAMP NOT NULL default NOW()
);
  