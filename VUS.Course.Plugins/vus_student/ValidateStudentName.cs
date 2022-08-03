using Microsoft.Xrm.Sdk;
using System;

namespace VUS.Course.Plugins.vus_student
{
    public class ValidateStudentName : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            // Obtain the organization service reference which you will need for  
            // web service calls.  
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var pluginExecutionContext = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var service = serviceFactory.CreateOrganizationService(pluginExecutionContext.UserId);

            if (!pluginExecutionContext.InputParameters.Contains("Target")) return;

            if (pluginExecutionContext.InputParameters["Target"] is Entity target)
            {
                var fullname = target.GetAttributeValue<string>("vus_fullname");
                var lastname = target.GetAttributeValue<string>("vus_lastname");
                var firstname = target.GetAttributeValue<string>("vus_firstname");

                if (fullname.ToLower().Contains("test") ||
                    lastname.ToLower().Contains("test") ||
                    firstname.ToLower().Contains("test"))
                {
                    throw new InvalidPluginExecutionException(OperationStatus.Failed, 1, "student name must not contain test");
                }
            }
        }
    }
}
