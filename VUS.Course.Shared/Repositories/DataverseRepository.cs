using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace VUS.Course.Shared.Repositories
{
    public class DataverseRepository<TContext> : DataverseReadOnlyRepository<TContext>, IRepository
        where TContext : DataverseServiceContext
    {
        public DataverseRepository(TContext context)
            : base(context)
        {
        }

        public virtual void Create<TEntity>(TEntity entity)
            where TEntity : Entity
        {
            context.AddObject(entity);
        }

        public virtual void Update<TEntity>(TEntity entity)
            where TEntity : Entity
        {
            if (!context.IsAttached(entity))
                context.Attach(entity);
            context.UpdateObject(entity);
        }

        public virtual void Delete<TEntity>(Guid id)
            where TEntity : Entity
        {
            TEntity entity = context.CreateQuery<TEntity>().FirstOrDefault(e => e.Id == id);
            if (entity != null)
            {
                Delete(entity);
            }
        }

        public virtual void Delete<TEntity>(TEntity entity)
            where TEntity : Entity
        {
            context.DeleteObject(entity);
        }

        public virtual void Save()
        {
            context.SaveChanges();
        }
    }
}
