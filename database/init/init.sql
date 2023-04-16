CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL unique,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "entity" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_id int,
    min_count int DEFAULT 0,
    max_count int DEFAULT -1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES entity(id)
);

CREATE TABLE "attribute" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    sub_type int,
    required BOOLEAN NOT NULL,
    entity_id int NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (entity_id) REFERENCES entity(id) on delete cascade
);

CREATE TABLE "object" (
    id SERIAL PRIMARY KEY,
    parent_id int,
    entity_id int NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (entity_id) REFERENCES entity(id)
);

CREATE TABLE "date_time_value" (
    id SERIAL PRIMARY KEY,
    object_id int NOT NULL,
    attribute_id int NOT NULL,
    value TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (object_id) REFERENCES entity(id),
    FOREIGN KEY (attribute_id) REFERENCES attribute(id)
);

CREATE TABLE "int_value" (
    id SERIAL PRIMARY KEY,
    object_id int NOT NULL,
    attribute_id int NOT NULL,
    value VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (object_id) REFERENCES entity(id),
    FOREIGN KEY (attribute_id) REFERENCES attribute(id)
);

CREATE TABLE "small_string_value" (
    id SERIAL PRIMARY KEY,
    object_id int NOT NULL,
    attribute_id int NOT NULL,
    value VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (object_id) REFERENCES entity(id),
    FOREIGN KEY (attribute_id) REFERENCES attribute(id)
);