# <span style="color:#FDC433">🌕Проєктування бази даних</span>

В рамках проекту розробляється: 
<br/>
<h2 style="color: #FFC839;"> ⭐️Модель бізнес-об'єктів </h2>  
@startuml
 entity Client
 
 entity Expert
  
 entity Poll
  
 entity Query

  
 entity Analytic
  
 entity Manager

 entity Buyer



entity Account
entity Account.email
entity Account.password
entity Account.username
entity Account.id


 entity Poll
 entity Poll.Type
entity Poll.Description
 entity Commission
 entity Commission.Description
entity Commission.Price



Client <|-- Manager
Client <|-- Expert
Expert <|-- Analytic
Expert <|-- Buyer

Account.email --* Account
Account.password --* Account
Account.username --* Account
Account.id --* Account

Account "0,*"-- "1,1" Client

Buyer "1,1" -- "0,*" Commission

Commission.Price --* Commission
Commission.Description --* Commission

Poll.Type ---* Poll
Poll.Description --* Poll
Manager "1,1"-- "0,*" Poll
Query "0,*" -u-o "1,*" Poll


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
