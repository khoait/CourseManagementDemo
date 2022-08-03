﻿using Microsoft.Xrm.Sdk;
using System;
using System.Globalization;
using System.Linq;
using System.ServiceModel;
using VUS.Course.Plugins.Config;

namespace VUS.Course.Plugins.Common
{
    /// <summary>
    ///     Base class for all plug-in classes.
    /// </summary>
    [Serializable]
    public abstract class PluginBase : IPlugin
    {
        public virtual ConfigType ConfigType => ConfigType.Json;
        public virtual bool AutoLoadConfig => true;

        /// <summary>
        ///     Initializes a new instance of the <see cref="PluginBase" /> class.
        /// </summary>
        public PluginBase()
        {
        }

        /// <summary>
        ///     Initializes a new instance of the <see cref="PluginBase" /> class.
        /// </summary>
        public PluginBase(string unsecureString, string secureString)
        {
            UnsecureConfigString = unsecureString;
            SecureConfigString = secureString;

            // load config if configured for autoload (default is yes & json)
            if (!AutoLoadConfig) return;

            switch (ConfigType)
            {
                case ConfigType.Json:
                    LoadJsonConfig();
                    break;
                case ConfigType.Xml:
                    LoadXmlConfig();
                    break;
            }
        }

        public void LoadJsonConfig()
        {
            var config = ConfigString;
            ErrorLoadingConfig = null;
            if (String.IsNullOrEmpty(config)) return;

            try
            {
                Config = JsonConfig.Deserialize<JsonConfig>(config);
            }
            catch (Exception ex)
            {
                // Error is captured and logged during execute trace.
                ErrorLoadingConfig = ex.Message;
            }
        }

        public void LoadXmlConfig()
        {
            var config = ConfigString;
            ErrorLoadingConfig = null;
            if (String.IsNullOrEmpty(config)) return;

            try
            {
                Config = XmlConfig.Deserialize<XmlConfig>(config);
            }
            catch (Exception ex)
            {
                // Error is captured and logged during execute trace.
                ErrorLoadingConfig = ex.Message;
            }
        }

        private string ErrorLoadingConfig { get; set; }

        public IPluginConfig Config { get; set; }

        /// <summary>
        ///     Gets or sets the name of the child class.
        /// </summary>
        /// <value>The name of the child class.</value>
        public virtual string PluginName => GetType().Name;
        public abstract string[] ValidMessageNames { get; }


        public string UnsecureConfigString { get; }
        public string SecureConfigString { get; }
        public string ConfigString => string.IsNullOrEmpty(SecureConfigString) ? SecureConfigString : UnsecureConfigString;

        public virtual bool ForceError => false;
        public virtual string RequiredPrimaryEntityLogicalName => "";

        /// <summary>
        ///     Main entry point for he business logic that the plug-in is to execute.
        /// </summary>
        /// <param name="serviceProvider">The service provider.</param>
        /// <remarks>
        ///     For improved performance, Microsoft Dynamics 365 caches plug-in instances.
        ///     The plug-in's Execute method should be written to be stateless as the constructor
        ///     is not called for every invocation of the plug-in. Also, multiple system threads
        ///     could execute the plug-in at the same time. All per invocation state information
        ///     is stored in the context. This means that you should not use global variables in plug-ins.
        /// </remarks>
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Globalization", "CA1303:Do not pass literals as localized parameters", Justification = "Execute")]
        public void Execute(IServiceProvider serviceProvider)
        {
            if (serviceProvider == null)
                throw new InvalidPluginExecutionException(String.Format(ResponseMessages.NoServiceProvider,
                    PluginName));

            var localContext = new LocalPluginContext(serviceProvider);
            localContext.Trace(CultureInfo.InvariantCulture, TraceMessages.EnteringPlugin, PluginName);

            if (!String.IsNullOrEmpty(ErrorLoadingConfig))
                localContext.Trace(CultureInfo.InvariantCulture, ErrorLoadingConfig);

            if (!String.IsNullOrEmpty(RequiredPrimaryEntityLogicalName) &&
                !RequiredPrimaryEntityLogicalName.Equals(localContext.PluginExecutionContext.PrimaryEntityName,
                    StringComparison.InvariantCultureIgnoreCase))
            {
                throw new InvalidPluginExecutionException(
                    string.Format(ResponseMessages.InvalidEntity, localContext.PluginExecutionContext.PrimaryEntityName, PluginName));
            }

            if (!ValidMessageNames.Contains(
                localContext.PluginExecutionContext.MessageName,
                StringComparer.InvariantCultureIgnoreCase))
                throw new InvalidPluginExecutionException(
                    string.Format(ResponseMessages.InvalidMessageName, PluginName));

            try
            {
                // Invoke the custom implementation 
                Execute(localContext);
                // now exit

                if (ForceError)
                    throw new InvalidPluginExecutionException(string.Format(ResponseMessages.PluginAborted,
                        PluginName));
            }
            catch (FaultException<OrganizationServiceFault> e)
            {
                localContext.Trace(TraceMessages.OrganizationServiceFault, PluginName);
                localContext.Trace(e);
                throw;
            }
            catch (InvalidPluginExecutionException pex)
            {
                localContext.Trace(TraceMessages.OrganizationServiceFault, PluginName);
                localContext.Trace(pex);
                throw;
            }
            catch (Exception ex)
            {
                localContext.Trace(TraceMessages.OrganizationServiceFault, PluginName);
                localContext.Trace(ex);
                // Handle the exception.
                throw new InvalidPluginExecutionException(
                    string.Format(ResponseMessages.OrganizationServiceFault, PluginName), ex);
            }
            finally
            {
                localContext.Trace(CultureInfo.InvariantCulture, TraceMessages.ExitingPlugin, PluginName);
            }
        }


        /// <summary>
        ///     Placeholder for a custom plug-in implementation.
        /// </summary>
        /// <param name="context">Context for the current plug-in.</param>
        public abstract void Execute(ILocalPluginContext context);
    }
}
