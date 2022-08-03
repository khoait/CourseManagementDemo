using System.Collections.Generic;

namespace VUS.Course.Plugins.Config
{
    public interface IPluginConfig
    {
        ConfigSetting this[string name] { get; set; }
        List<ConfigSetting> Settings { get; set; }
        IEnumerator<ConfigSetting> GetEnumerator();
    }
}
