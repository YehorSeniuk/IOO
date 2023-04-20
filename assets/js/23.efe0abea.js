(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{704:function(t,n,s){"use strict";s.r(n);var a=s(47),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"реалізація-інформаціиного-та-програмного-забезпечення"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#реалізація-інформаціиного-та-програмного-забезпечення"}},[t._v("#")]),t._v(" Реалізація інформаційного та програмного забезпечення")]),t._v(" "),s("p",[t._v("В рамках проекту розробляється:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- SQL-скрипт для створення на початкового наповнення бази даних\n\n-- MySQL Script generated by MySQL Workbench\n-- Thu Apr 20 17:02:45 2023\n-- Model: New Model    Version: 1.0\n-- MySQL Workbench Forward Engineering\n\nSET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;\nSET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;\nSET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';\n\n-- -----------------------------------------------------\n-- Schema mydb\n-- -----------------------------------------------------\nDROP SCHEMA IF EXISTS `mydb` ;\n\n-- -----------------------------------------------------\n-- Schema mydb\n-- -----------------------------------------------------\nCREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;\nUSE `mydb` ;\n\n-- -----------------------------------------------------\n-- Table `mydb`.`Role`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`Role` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`Role` (\n  `idRole` INT NOT NULL,\n  `name` VARCHAR(45) NULL,\n  `description` VARCHAR(180) NULL,\n  PRIMARY KEY (`idRole`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`Account`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`Account` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`Account` (\n  `idAccount` INT NOT NULL,\n  `email` VARCHAR(45) NULL,\n  `password` VARCHAR(45) NULL,\n  `username` VARCHAR(45) NULL,\n  `Role_idRole` INT NOT NULL,\n  PRIMARY KEY (`idAccount`),\n  INDEX `fk_Account_Role1_idx` (`Role_idRole` ASC) VISIBLE,\n  CONSTRAINT `fk_Account_Role1`\n    FOREIGN KEY (`Role_idRole`)\n    REFERENCES `mydb`.`Role` (`idRole`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`PollType`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`PollType` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`PollType` (\n  `idPollType` INT NOT NULL,\n  `name` VARCHAR(45) NULL,\n  PRIMARY KEY (`idPollType`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`Poll`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`Poll` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`Poll` (\n  `idPoll` INT NOT NULL,\n  `description` VARCHAR(180) NULL,\n  `title` VARCHAR(45) NULL,\n  `datetime` VARCHAR(45) NULL,\n  `PollType_idPollType` INT NOT NULL,\n  PRIMARY KEY (`idPoll`),\n  INDEX `fk_Poll_PollType1_idx` (`PollType_idPollType` ASC) VISIBLE,\n  CONSTRAINT `fk_Poll_PollType1`\n    FOREIGN KEY (`PollType_idPollType`)\n    REFERENCES `mydb`.`PollType` (`idPollType`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`State`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`State` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`State` (\n  `idState` INT NOT NULL,\n  `name` VARCHAR(45) NULL,\n  `description` VARCHAR(180) NULL,\n  PRIMARY KEY (`idState`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`Action`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`Action` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`Action` (\n  `idAction` INT NOT NULL,\n  `datetime` DATETIME NULL,\n  `comment` VARCHAR(180) NULL,\n  `Account_idAccount` INT NOT NULL,\n  `Poll_idPoll` INT NOT NULL,\n  `State_idState` INT NOT NULL,\n  PRIMARY KEY (`idAction`),\n  INDEX `fk_Action_Account_idx` (`Account_idAccount` ASC) VISIBLE,\n  INDEX `fk_Action_Poll1_idx` (`Poll_idPoll` ASC) VISIBLE,\n  INDEX `fk_Action_State1_idx` (`State_idState` ASC) VISIBLE,\n  CONSTRAINT `fk_Action_Account`\n    FOREIGN KEY (`Account_idAccount`)\n    REFERENCES `mydb`.`Account` (`idAccount`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_Action_Poll1`\n    FOREIGN KEY (`Poll_idPoll`)\n    REFERENCES `mydb`.`Poll` (`idPoll`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_Action_State1`\n    FOREIGN KEY (`State_idState`)\n    REFERENCES `mydb`.`State` (`idState`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`QueryType`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`QueryType` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`QueryType` (\n  `idQueryType` INT NOT NULL,\n  `name` VARCHAR(45) NULL,\n  PRIMARY KEY (`idQueryType`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`Query`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`Query` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`Query` (\n  `idQuery` INT NOT NULL,\n  `content` VARCHAR(180) NULL,\n  `Poll_idPoll` INT NOT NULL,\n  `QueryType_idQueryType` INT NOT NULL,\n  PRIMARY KEY (`idQuery`),\n  INDEX `fk_Query_Poll1_idx` (`Poll_idPoll` ASC) VISIBLE,\n  INDEX `fk_Query_QueryType1_idx` (`QueryType_idQueryType` ASC) VISIBLE,\n  CONSTRAINT `fk_Query_Poll1`\n    FOREIGN KEY (`Poll_idPoll`)\n    REFERENCES `mydb`.`Poll` (`idPoll`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_Query_QueryType1`\n    FOREIGN KEY (`QueryType_idQueryType`)\n    REFERENCES `mydb`.`QueryType` (`idQueryType`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`Answer`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`Answer` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`Answer` (\n  `idAnswer` INT NOT NULL,\n  `description` VARCHAR(180) NULL,\n  `datetime` DATETIME NULL,\n  `Query_idQuery` INT NOT NULL,\n  PRIMARY KEY (`idAnswer`),\n  INDEX `fk_Answer_Query1_idx` (`Query_idQuery` ASC) VISIBLE,\n  CONSTRAINT `fk_Answer_Query1`\n    FOREIGN KEY (`Query_idQuery`)\n    REFERENCES `mydb`.`Query` (`idQuery`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`OptionType`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`OptionType` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`OptionType` (\n  `idOptionType` INT NOT NULL,\n  `name` VARCHAR(45) NULL,\n  PRIMARY KEY (`idOptionType`))\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`Option`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`Option` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`Option` (\n  `idOption` INT NOT NULL,\n  `description` VARCHAR(180) NULL,\n  `Query_idQuery` INT NOT NULL,\n  `OptionType_idOptionType` INT NOT NULL,\n  PRIMARY KEY (`idOption`),\n  INDEX `fk_Option_Query1_idx` (`Query_idQuery` ASC) VISIBLE,\n  INDEX `fk_Option_OptionType1_idx` (`OptionType_idOptionType` ASC) VISIBLE,\n  CONSTRAINT `fk_Option_Query1`\n    FOREIGN KEY (`Query_idQuery`)\n    REFERENCES `mydb`.`Query` (`idQuery`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_Option_OptionType1`\n    FOREIGN KEY (`OptionType_idOptionType`)\n    REFERENCES `mydb`.`OptionType` (`idOptionType`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`ChosenOption`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`ChosenOption` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`ChosenOption` (\n  `idChosenOption` INT NOT NULL,\n  `datetime` DATETIME NULL,\n  `Answer_idAnswer` INT NOT NULL,\n  `Option_idOption` INT NOT NULL,\n  PRIMARY KEY (`idChosenOption`),\n  INDEX `fk_ChosenOption_Answer1_idx` (`Answer_idAnswer` ASC) VISIBLE,\n  INDEX `fk_ChosenOption_Option1_idx` (`Option_idOption` ASC) VISIBLE,\n  CONSTRAINT `fk_ChosenOption_Answer1`\n    FOREIGN KEY (`Answer_idAnswer`)\n    REFERENCES `mydb`.`Answer` (`idAnswer`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_ChosenOption_Option1`\n    FOREIGN KEY (`Option_idOption`)\n    REFERENCES `mydb`.`Option` (`idOption`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`StateResolve`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`StateResolve` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`StateResolve` (\n  `idStateResolve` INT NOT NULL,\n  `rule` VARCHAR(45) NULL,\n  `State_idState` INT NOT NULL,\n  PRIMARY KEY (`idStateResolve`),\n  INDEX `fk_StateResolve_State1_idx` (`State_idState` ASC) VISIBLE,\n  CONSTRAINT `fk_StateResolve_State1`\n    FOREIGN KEY (`State_idState`)\n    REFERENCES `mydb`.`State` (`idState`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\nSET SQL_MODE=@OLD_SQL_MODE;\nSET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;\nSET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;\n")])])]),s("ul",[s("li",[t._v("RESTfull сервіс для управління даними")])]),t._v(" "),s("p",[t._v("RESTfull сервіс")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fastapi\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" fastapi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FastAPI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" fastapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responses "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" JSONResponse\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pymysql\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FastAPI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataBase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__new__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'instance'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DataBase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__new__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__connect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pymysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            database"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ioo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pymysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DictCursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/allusers"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    db "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DataBase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" JSONResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT * FROM account'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/user/{id}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_user_by_id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    db "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DataBase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'SELECT * FROM account WHERE idAccount=")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" fastapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPException"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status_code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" JSONResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/adduser'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" status_code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_new_user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    req_dict "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        email "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        id_role "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Role_idRole'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" fastapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPException"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status_code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    db "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DataBase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("f\"INSERT INTO `account`(`email`, `password`, `username`, `Role_idRole`) VALUES ('")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("',")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id_role"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(');"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'New user added!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/updateuser/{id}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update_user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    req_dict "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    db "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DataBase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" req_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'SELECT * FROM account WHERE idAccount=")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" fastapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPException"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status_code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'UPDATE account SET ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("req_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" WHERE idAccount=')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Updated!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/deleteuser/{id}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    db "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DataBase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'SELECT * FROM account WHERE idAccount=")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" fastapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPException"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status_code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'DELETE FROM `account` WHERE idAccount=")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'User with id=")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" deleted'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);