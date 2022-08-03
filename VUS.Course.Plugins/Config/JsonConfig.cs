using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using VUS.Course.Shared.Extensions;

namespace VUS.Course.Plugins.Config
{
    /// <summary>
    /// Sample JsonConfig:
    /// { "Settings": [{
    ///  "Name": "errorMessage",
    ///  "Value": "Sample error message"
    ///  }]}
    /// </summary>
    [DataContract]
    public partial class JsonConfig : IEnumerable<ConfigSetting>, IPluginConfig
    {
        public JsonConfig()
        {
            Settings = new List<ConfigSetting>();
        }

        [DataMember]
        public List<ConfigSetting> Settings { get; set; }

        public ConfigSetting this[string name]
        {
            get
            {
                return Settings.FirstOrDefault(s => !string.IsNullOrEmpty(s.Name) && s.Name.Equals(name, StringComparison.InvariantCultureIgnoreCase));
            }
            set
            {
                var current =
                    Settings.FirstOrDefault(s => !string.IsNullOrEmpty(s.Name) && s.Name.Equals(name, StringComparison.InvariantCultureIgnoreCase));
                if (!value.Name.Equals(name, StringComparison.InvariantCultureIgnoreCase)) value.Name = name;
                if (current == null)
                {
                    Settings.Add(value);
                    return;
                }
                Settings.Remove(current);
                Settings.Add(value);
            }
        }

        public IEnumerator<ConfigSetting> GetEnumerator()
        {
            return Settings.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }


        public static T Deserialize<T>(string json)
        {
            return JsonConvert.Deserialize<T>(json);
        }
    }
}
