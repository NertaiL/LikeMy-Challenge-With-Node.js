CREATE DATABASE likeme;
CREATE TABLE posts (id SERIAL, titulo VARCHAR(100) NOT NULL, img VARCHAR(1000) NOT NULL,
descripcion VARCHAR(255) NOT NULL, likes INT NOT NULL);

INSERT INTO posts (titulo,img,descripcion,likes) VALUES ("La Gran Muralla (China)", "https://historia.nationalgeographic.com.es/medio/2014/06/12/china2_1787x2000.jpg","La Gran Muralla China es una antigua fortificación china,1 construida y reconstruida entre el siglo v a. C. y el siglo xvi para proteger la frontera norte del Imperio chino durante las sucesivas dinastías imperiales de los ataques de los nómadas xiongnu de Mongolia y Manchuria.",960)
