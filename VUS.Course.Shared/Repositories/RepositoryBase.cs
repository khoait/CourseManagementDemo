using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Text;

namespace VUS.Course.Shared.Repositories
{
    public class RepositoryBase
    {
        public IOrganizationService Service { get; }
        public RepositoryBase(IOrganizationService service)
        {
            Service = service;
        }        
    }
}
