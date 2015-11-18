﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace WebApiServer.Models
{
    public class UserCompanyContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Company> Companies { get; set; }
    }
}
