CREATE TABLE [dbo].[Users]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] VARCHAR(80) NOT NULL, 
    [Login] VARCHAR(50) NULL, 
    [Password] VARCHAR(50) NULL, 
    [CompanyID] INT NOT NULL, 
    [ContractStatus] INT NOT NULL
)
