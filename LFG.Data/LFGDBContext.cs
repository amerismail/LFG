using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LFG.Model;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace LFG.Data
{
    public class LfgDbContext : DbContext
    {
        public LfgDbContext()
            : base(nameOrConnectionString: "DefaultConnection") { }

        public DbSet<Activity> Activities { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
