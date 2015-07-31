using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LFG.Model;

namespace LFG.Data
{
    public class LfgUow : IDisposable
    {
        private LfgDbContext DbContext { get; set; }
        
        public LfgUow()
        {
            CreateDbContext();
        }

        public IRepository<Activity> Activities { get { return new EFRepository<Activity>(DbContext); } }
        public IRepository<GameSystem> GameSystems { get { return new EFRepository<GameSystem>(DbContext); } }

        public void Commit()
        {
            DbContext.SaveChanges();
        }

        protected void CreateDbContext()
        {
            DbContext = new LfgDbContext();
            DbContext.Configuration.ProxyCreationEnabled = true;
            DbContext.Configuration.LazyLoadingEnabled = true;
            DbContext.Configuration.ValidateOnSaveEnabled = false;
        }

        #region IDisposable
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (DbContext != null)
                {
                    DbContext.Dispose();
                }
            }
        }
        #endregion
    }
}
