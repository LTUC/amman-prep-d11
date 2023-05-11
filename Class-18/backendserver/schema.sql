DROP TABLE IF EXISTS memes;
CREATE TABLE IF NOT EXISTS memes (
    id SERIAL PRIMARY KEY,
    image_path VARCHAR(255),
    meme_name VARCHAR(255),
    rank INTEGER,
    tags VARCHAR(255),
    top_text VARCHAR(255)
);