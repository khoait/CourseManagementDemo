using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Text;

namespace VUS.Course.Shared.Repositories
{
    public interface IRepository : IReadOnlyRepository
    {
        void Create<TEntity>(TEntity entity)
            where TEntity : Entity;

        void Update<TEntity>(TEntity entity)
            where TEntity : Entity;

        void Delete<TEntity>(Guid id)
            where TEntity : Entity;

        void Delete<TEntity>(TEntity entity)
            where TEntity : Entity;

        void Save();
    }
}
