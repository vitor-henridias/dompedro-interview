<h1>Dom Pedro Interview</h1>

<h2>Create Data Base MYSQL</h2>
<p>CREATE SCHEMA `db_dompedro` ;</p>

<h2>CREATE TABLE</h2>
<p>
    CREATE TABLE `db_dom_pedro`.`users` (
    `idusers` INT NOT NULL AUTO_INCREMENT,
    `usersName` VARCHAR(45) NOT NULL,
    `usersEmail` VARCHAR(45) NOT NULL,
    `createAt` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`idusers`));
</p>

<h2>Start Servers</h2>
<p> 
    cd client
    npm start
</p>
<p>
    cd .. 
    cd server
    npm run devStart
</p>