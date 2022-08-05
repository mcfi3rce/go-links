create table go_links
( 
    source        text not null,
    target        text not null,
    user_name       text not null,
    date_added    date,
    date_modified date,
    constraint go_links_pk
        unique (source)
);

create table users
(
    user_name  text not null,
    first_name text not null,
    last_name  text not null,
    email      text not null,
    date_added date,
    constraint user_pk
        primary key (user_name)
);

alter table users owner to postgres;
alter table go_links owner to postgres;

INSERT INTO users (user_name, first_name, last_name, email, date_added)
VALUES ('adam-mcpherson', 'Adam', 'McPherson', 'aomcpherson@gmail.com', now());

INSERT INTO go_links (source, target, user_name, date_added)
VALUES ('microsoft', 'https://microsoft.com/', 'adam-mcpherson', now());

INSERT INTO go_links (source, target, user_name, date_added)
VALUES ('google', 'https://google.com/', 'adam-mcpherson', now());