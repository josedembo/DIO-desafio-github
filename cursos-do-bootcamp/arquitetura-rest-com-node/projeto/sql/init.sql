CREATE EXTENSION IF NOT EXISTS "uuid_ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS apliation_user( 
    id uuid DEFAULT uuid_generate_v4(), 
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (id)
    );

INSERT INTO apliation_user(username, password) VALUES('jose', crypt('admin', 'd0d6c415bc3d47c03b7a5e06a13eb567') );