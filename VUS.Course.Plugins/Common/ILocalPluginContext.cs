using Microsoft.Xrm.Sdk;
using System;
using System.Globalization;

namespace VUS.Course.Plugins.Common
{
    public interface ILocalPluginContext
    {
        IServiceProvider ServiceProvider { get; }
        IOrganizationService CurrentUserService { get; }
        IOrganizationService SystemUserService { get; }
        IPluginExecutionContext PluginExecutionContext { get; }
        IServiceEndpointNotificationService NotificationService { get; }
        ITracingService TracingService { get; }

        EntityImageCollection PostEntityImages { get; }
        EntityImageCollection PreEntityImages { get; }

        T GetAttributeValue<T>(string fieldname);
        Entity GetEntityImage(string name = null);
        T GetInputParameter<T>(string field);

        void Trace(CultureInfo cultureInfo, string format, params object[] args);
        void Trace(Exception exception);
        void Trace(string format, params object[] args);
    }
}
