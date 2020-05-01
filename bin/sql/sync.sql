CREATE TABLE AppUsers (
    id INT NOT NULL PRIMARY KEY, 
    username VARCHAR (50) NOT NULL,
    pass VARCHAR (50) NOT NULL
    -- user_image BLOB,
);

CREATE TABLE Contacts (
    id INT NOT NULL PRIMARY KEY, 
    linked_user_id INT NOT NULL REFERENCES AppUsers(id), 
    contact_name VARCHAR (50) NOT NULL,
    phone VARCHAR (10),
    email VARCHAR (50),
    contact_address VARCHAR (50),
    last_contact DATE,
    contact_frq INT
    -- contact_image BLOB
);

CREATE TABLE Topics (
    id INT NOT NULL PRIMARY KEY, 
    contact_id INT NOT NULL REFERENCES Contacts(id), 
    title VARCHAR (50) NOT NULL,
    discussion_description TEXT
);

CREATE TABLE Tag (
    id INT NOT NULL PRIMARY KEY, 
    tag VARCHAR (50) NOT NULL
);

CREATE TABLE TopicTag (
    topic_id INT NOT NULL, 
    tag_id VARCHAR (50) NOT NULL
);

INSERT INTO AppUsers(id, username, pass)
VALUES
(1, 'Joel', 'testPass');

INSERT INTO Contacts(id, 
    linked_user_id, 
    contact_name, 
    phone, 
    email, 
    contact_address,
    last_contact,
    contact_frq)
VALUES
(1, 1, 'Bill', '8606085518', 'bv123@gmail.com', '201 street road', '2020-01-20', 12),
(2, 1, 'Jacob', '9174200924', 'jfcym93@gmail.com', '201 street road', '2019-12-20', 12),
(3, 1, 'Estephany', '2039456910' , null, '201 street road', '2020-02-14', 12);

INSERT INTO Topics(id, 
    contact_id, 
    title, 
    discussion_description)
VALUES
(1, 1, 'nightshades','bill is following the Tom Brady diet\, nightshades are high in toxicity'),
(2, 1, 'national treasure', 'starting a cult centered around the gospel of national treasure'),
(3, 2, 'baking', 'Jacob is baking bread, started making Hawaiian sweet bread');

INSERT INTO Tag(id, 
    tag)
VALUES
(1, 'nightshades'),
(2, 'baking'),
(3, 'cult'),
(4, 'Nicholas Cage');

INSERT INTO TopicTag(topic_id, 
    tag_id)
VALUES
(1, 1),
(3, 2),
(2, 3),
(2, 4);


