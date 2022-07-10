<h1>Dom Pedro Interview</h1>

<h2>Create Data Base MYSQL</h2>
<p>CREATE SCHEMA `db_dompedro` ;</p>

<h2>Create Table</h2>
<p>
    CREATE TABLE `db_dompedro`.`users` ( <br>
    `idusers` INT NOT NULL AUTO_INCREMENT, <br>
    `usersName` VARCHAR(45) NOT NULL, <br>
    `usersEmail` VARCHAR(45) NOT NULL, <br>
    `createAt` VARCHAR(45) NOT NULL, <br>
    PRIMARY KEY (`idusers`)); 
</p>

<h2>Start Servers</h2>
<p> 
    In client
    npm start
</p>
<p>
    In server
    npm run devStart
</p>
