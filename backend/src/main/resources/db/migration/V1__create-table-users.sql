create table tbuser(
    id bigint auto_increment primary key not null,
    login varchar (100) not null unique,
    password varchar(100) not null,
    role varchar (20) not null
)