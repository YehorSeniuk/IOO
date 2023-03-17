# <span style="color:#FDC433">🌕Проєктування бази даних</span>

В рамках проекту розробляється: 
<br/>
<h2 style="color: #FFC839;"> ⭐️Модель бізнес-об'єктів </h2>  
@startuml

  
 entity Poll
  
entity Query
entity Query.id
entity Query.content
entity Query.type


entity Account
entity Account.email
entity Account.password
entity Account.username
entity Account.id


entity Poll
entity Poll.type
entity Poll.description
entity Poll.id
entity Poll.title
entity Poll.datetime
entity Poll.state

entity Role
Account.email --* Account
Account.password --* Account
Account.username --* Account
Account.id --* Account

entity Option
entity Option.id
entity Option.description
entity Option.type

entity ChosenOption
entity Answer
entity Answer.id
entity Answer.description 
entity Answer.datetime




Role "1,*" -u- "1,1"Account

Poll *--- Poll.id
Poll *--- Poll.description
Poll *--- Poll.type
Poll *--- Poll.title
Poll *--- Poll.datetime
Poll *--- Poll.state

Query *--- Query.id
Query *--- Query.content
Query *--- Query.type

Option *--- Option.id
Option *--- Option.description
Option *--- Option.type

Answer *--- Answer.id
Answer *--- Answer.description
Answer *--- Answer.datetime

Poll "1,1"--- "0,*" Query
Query "1,1" --- "0,*" Option
Query "1,1" --l-- "0,*" Answer
Option "0,*" --- "1,1" ChosenOption
ChosenOption "0,*" --- "1,1" Answer

@enduml

<h2 style="color: #FFC839;"> ⭐️ER-модель </h2> 

@startuml
    entity Client{
  }
  
  entity Expert{
    id:INT
    name: TEXT
    e-mail: TEXT
    password: TEXT
  }
  
  entity Poll{
    id:INT
    description:TEXT
    concern:TEXT
    datetime:DATETIME
  }
  
  entity Query{
    id:INT
    category:TEXT
    description:TEXT
  }


  entity Response{
    expertId:INT
    id:INT
    description:TEXT
    datetime:DATETIME
  }
  
  
  entity Analytic {
    id: INT
    name: TEXT
    e-mail: TEXT
    phone: TEXT
    password: TEXT
    rating: INT
    
  }
  
  entity Manager {
    id: INT
    name: TEXT
    e-mail: TEXT
    phone: TEXT
    password: TEXT
    rating: INT
    
  }

  entity Patron { 
    id:INT
    name: TEXT
    e-mail: TEXT
    password: TEXT
    rating: INT
  }




  Response "0, *" -u-> "1, 1" Query
  Poll "1, 1" <-u- "0, *"  Query
  Response "0, *" <-u- "1, 1" Expert
  Expert "1, 1" <-u- "1, 1" Client
  Expert "1, 1" -u-> "1, 1" Patron
  Manager "1, 1" -u-> "0, *" Poll
  Manager "1, 1" <-u- "0, *" Patron
  Analytic "1, 1" -u-> "0, *"  Poll


 
@enduml
<h2 style="color: #FFC839;"> ⭐️Реляційна схема </h2> 

<img src="../../database_scheme.png"/>
