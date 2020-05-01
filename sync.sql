CREATE TABLE users
(
    id INT NOT NULL PRIMARY KEY, 
    username VARCHAR (50) NOT NULL,
    pass VARCHAR (50) NOT NULL,
    user_image BLOB
);

CREATE TABLE contacts
(
    id INT NOT NULL PRIMARY KEY, 
    linked_user_id INT NOT NULL FOREIGN KEY, 
    contact_name VARCHAR (50) NOT NULL,
    phone VARCHAR (10),
    email VARCHAR (50),
    contact_address VARCHAR (50),
    last_contact DATE,
    contact_frq INT,
    contact_image BLOB
)


CREATE TABLE topics
(
    id INT NOT NULL PRIMARY KEY, 
    contact_id INT NOT NULL FOREIGN KEY, 
    title VARCHAR (50) NOT NULL,
    discussion_description VARCHAR (50),
    last_contact DATE,
    contact_frq INT,
)

CREATE TABLE tags
(
    id INT NOT NULL PRIMARY KEY, 
    topic_id INT NOT NULL SECONDARY KEY, 
    tag_id INT NOT NULL SECONDARY KEY,
)

CREATE TABLE tag_reference
(
    id INT NOT NULL PRIMARY KEY, 
    tag VARCHAR (50) NOT NULL,
)