using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace VUS.Course.Shared.Repositories
{
    public class DataverseReadOnlyRepository<TContext> : IReadOnlyRepository
        where TContext : DataverseServiceContext
    {
        protected readonly TContext context;

        public DataverseReadOnlyRepository(TContext context)
        {
            this.context = context;
        }

        protected virtual IQueryable<TEntity> GetQueryable<TEntity>(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            int? skip = null,
            int? take = null)
            where TEntity : Entity
        {
            IQueryable<TEntity> query = context.CreateQuery<TEntity>();

            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (orderBy != null)
            {
                query = orderBy(query);
            }

            if (skip.HasValue)
            {
                query = query.Skip(skip.Value);
            }

            if (take.HasValue)
            {
                query = query.Take(take.Value);
            }

            return query;
        }

        public virtual IEnumerable<TEntity> GetAll<TEntity>(QueryBase query)
            where TEntity : Entity
        {
            if (query is FetchExpression fetchXml)
            {
                query = (context.Execute(new FetchXmlToQueryExpressionRequest { FetchXml = fetchXml.Query }) as FetchXmlToQueryExpressionResponse).Query;
            }

            var results = new List<TEntity>();

            if (query is QueryExpression queryExpression)
            {
                queryExpression.PageInfo.PageNumber = 1;
                while (true)
                {
                    var retrieveReq = new RetrieveMultipleRequest()
                    {
                        Query = queryExpression
                    };
                    var queryResult = (RetrieveMultipleResponse)context.Execute(retrieveReq);
                    results.AddRange(queryResult.EntityCollection.Entities.Select(e => e.ToEntity<TEntity>()));

                    if (!queryResult.EntityCollection.MoreRecords)
                        break;

                    queryExpression.PageInfo.PageNumber++;
                    queryExpression.PageInfo.PagingCookie = queryResult.EntityCollection.PagingCookie;
                }
            }
            else if (query is QueryByAttribute queryByAttribute)
            {
                queryByAttribute.PageInfo.PageNumber = 1;
                while (true)
                {
                    var retrieveReq = new RetrieveMultipleRequest()
                    {
                        Query = queryByAttribute
                    };
                    var queryResult = (RetrieveMultipleResponse)context.Execute(retrieveReq);
                    results.AddRange(queryResult.EntityCollection.Entities.Select(e => e.ToEntity<TEntity>()));

                    if (!queryResult.EntityCollection.MoreRecords)
                        break;

                    queryByAttribute.PageInfo.PageNumber++;
                    queryByAttribute.PageInfo.PagingCookie = queryResult.EntityCollection.PagingCookie;
                }
            }
            else
                throw new NotImplementedException($"The specified QueryBase type ({query.GetType().Name}) is not supported.");

            return results;
        }

        public virtual IQueryable<TEntity> Get<TEntity>(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            int? skip = null,
            int? take = null)
            where TEntity : Entity
        {
            return GetQueryable(filter, orderBy, skip, take);
        }


        public virtual int GetCount<TEntity>(Expression<Func<TEntity, bool>> filter = null)
            where TEntity : Entity
        {
            return GetQueryable(filter).Count();
        }

        public virtual bool GetExists<TEntity>(Expression<Func<TEntity, bool>> filter = null)
            where TEntity : Entity
        {
            return GetQueryable(filter).Any();
        }
    }
}
